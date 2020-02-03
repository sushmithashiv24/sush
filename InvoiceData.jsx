export const Invoices = {
	columnsNames : [
	{key: 'InvoiceId', name: 'Invoice Id'},
	{key: 'Reference', name: 'Reference'},
	{key: 'MaturityDate', name: 'Maturity Date'},
	{key: 'InvoiceAmount', name: 'Invoice Amount'},
	{key: 'Ccy', name: 'Ccy'},
	{key: 'Buyer', name: 'Buyer'},
	{key: 'Supplier', name: 'Supplier'},
	{key: 'InvoiceDate', name: 'Invoice Date'}
	],
	invoice : [
	{ InvoiceId:'123',Reference:'12323', MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'10000.00',Ccy:'USD',Buyer:'',Supplier:'',InvoiceDate:'2017-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'124',Reference:'23423', MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'150000.00',Ccy:'INR',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'125',Reference:'12355', MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'250000.00',Ccy:'INR',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'126',Reference:'67867', MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'250000.00',Ccy:'USD',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'127',Reference:'23445', MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'150000.00',Ccy:'JPY',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'128',Reference:'127891',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'150000.00',Ccy:'RYD',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'129',Reference:'345343',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'350000.00',Ccy:'INR',Buyer:'',Supplier:'',InvoiceDate:'2016-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'132',Reference:'333333',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'250000.00',Ccy:'JPY',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'133',Reference:'343434',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'175000.00',Ccy:'INR',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'134',Reference:'123123',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'350000.00',Ccy:'JPY',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'135',Reference:'346366',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'350000.00',Ccy:'RYD',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'136',Reference:'985554',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'240000.00',Ccy:'RYD',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'137',Reference:'984753',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'120000.00',Ccy:'INR',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }, 
	{ InvoiceId:'138',Reference:'234546',MaturityDate:'2018-01-25T08:00:00+01:00',InvoiceAmount:'350000.00',Ccy:'USD',Buyer:'',Supplier:'',InvoiceDate:'2018-01-25T08:00:00+01:00' }
	],
	currencyOptions : [
	{ value: "USD", label: "USD" },
	{ value: "INR", label: "INR" },
	{ value: "JPY", label: "JPY" },
	{ value: "RYD", label: "RYD" } 
	],
	usdOptions : [
	  { value: 'above', label: '$ 1,00,000.00' },
	  { value: 'below', label: '$ 1,00,000.00' } 
	]
}

export default Invoices;