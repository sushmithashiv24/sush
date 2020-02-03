import React, { useState,useRef } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';
import Invoices from './InvoiceData.jsx';

let currencyType = null;
let currencyRange = null;
let startDate = new Date();
let invoiceData = [];

function formatCurrency(ccy){
	let currencyFormat = [];
	var range0 = 0;
	var range1 = 100000;
	var range2 = 200000;
	var range3 = 400000;
	var formatter = new Intl.NumberFormat('en-IN', {style: 'currency',currency: ccy,});
	currencyFormat[0] = {value: range1, label: formatter.format(range0) + ' to ' + formatter.format(range1)};
	currencyFormat[1] = {value: range2, label: formatter.format(range1) + ' to ' + formatter.format(range2)};
	currencyFormat[2] = {value: range3, label: formatter.format(range2) + ' to ' + formatter.format(range3)};
	
	return currencyFormat;
}

function searchInvoice() {
	var j = 0;	
	invoiceData = [];
	for(var i = 0; i < Invoices.invoice.length; i++){
		var maturityDate = new Date(Invoices.invoice[i].MaturityDate);
		if(Invoices.invoice[i].Ccy == currencyType.value && maturityDate > startDate ){
			if(Invoices.invoice[i].InvoiceAmount < currencyRange.value && Invoices.invoice[i].InvoiceAmount > (currencyRange.value-100000)){
				invoiceData[j] = Invoices.invoice[i];
				console.log(invoiceData[j].InvoiceAmount);
				j = j + 1;
			}
		}
	}
	return invoiceData;
}

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currencyFormat: Invoices.usdOptions}
  }
  handleCurrencyChange = selectedOption1 => {
	  this.setState(currencyType = selectedOption1);
	  console.log(currencyType.value);
	  console.log(formatCurrency(selectedOption1.value));
	  this.setState({ currencyFormat: formatCurrency(selectedOption1.value) });
  };
  handleCurrencyRange = currencyRange1 => {
	  this.setState(currencyRange = currencyRange1);
	  console.log(currencyRange1.value);
  };
  renderInvoiceData = e => {
	  e.preventDefault();
	 console.log(searchInvoice());
	this.setState(invoiceData = searchInvoice());
    console.log('The link was clicked.');
  };
  handleDate = selctedDate => {
	  this.setState(startDate = selctedDate);
	  console.log(selctedDate);
  };
  render() {
	  const rowGetter1 = rowNumber1 => invoiceData[rowNumber1];
    return (
		<form>
			<table>
			<tbody>
				<tr>
				  <td><label>Invoice Currency:</label></td>
				  <td style={{height: 82, width: 202}}> <Select value={currencyType} onChange={this.handleCurrencyChange} options = {Invoices.currencyOptions}/></td>
				  <td><label>Invoice Amount Range: </label></td>
				  <td style={{height: 82, width: 202}}> <Select value={currencyRange} onChange={this.handleCurrencyRange} options = {this.state.currencyFormat} /></td>
				  <td><label> Maturity Date Range: </label></td>
				  <td><DatePicker selected={startDate} onChange={this.handleDate} name="startDate" dateFormat="MM/dd/yyyy" /></td>
				  <td><button onClick={this.renderInvoiceData}>Search</button></td>
				</tr>
			</tbody>
			</table>
			<h3>Currency Invoices with value between from amount - to amount maturing between from date and to date</h3>
			<DataGrid columns={Invoices.columnsNames} rowGetter={rowGetter1} rowsCount={invoiceData.length} minHeight={400} />
		</form>
    );
  }
}

ReactDOM.render(<MainForm  />, document.getElementById('root'));