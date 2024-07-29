const carbone = require('carbone');
const fs = require('fs');
const path = require('path');
const { exit } = require('process');

const data = {
  "invoiceDate": "2023-01-27",
  "refNo": "Ref : QNI-SEEPL-05/24-049 ",
  "toCompany":"STERLING ELECTRO ENTERPRISES PVT LTD MUMBAI - 400078",
  "toName":"Mr Bhavika Patil",
  "subject": "Quotation for supply of NAXSO Make Busbar Trunking Systems",
  "products": [
    {
      "name": "Rackmount case (With bays for multiple 3.5-inch drives and room for the motherboard and other components.)",
      "exTaxTotal": 500,
      "unit": 500,
      "vat": 20,
      "qty": 1
    },
    {
      "name": "Motherboard (has the necessary number of SATA ports for your storage needs)",
      "exTaxTotal": 150,
      "unit": 150,
      "vat": 20,
      "qty": 1
    },
   
  ]
};

carbone.render('./template.odt', data,{convertTo : 'pdf'}, function(err, result){
  if (err) {
    return console.log({err});
  }

  fs.writeFileSync('./report/result.pdf', result);
  exit()
});
