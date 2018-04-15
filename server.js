// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var request =require('request');
var bodyParser = require('body-parser');




//var devKey="46c1991eef174e06b4adc698802862b0";
//var bearer="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoiNTg5MGEwNTc5Y2FlY2I4NzEyOTljNGQzIiwicm9sZSI6InVzZXIiLCJwcmltYXJ5U3Vic2NyaWJlcktleSI6IjQ2YzE5OTFlZWYxNzRlMDZiNGFkYzY5ODgwMjg2MmIwIiwiaWF0IjoxNDg2MDQ4ODExfQ.4fDc34_cHvkZ7LbzO0FhgDi7JDjXKNt-ZN_FIkp22YU";
//var currentAccountId= '5890a0589caecb871299c4d4';
//var getSavingAccountId= '5890a0589caecb871299c4d5';
//var accountId = '';
//var accountType = '';
//var url = 'https://bluebank.azure-api.net/api/v0.6.3';
var request = require('request');
// configure app to use bodyParser()
// this will let us get the data from a POST

var devKey ="e73af7a07f5347dda1f4779eca3ae604";
var bearer= "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1MjM3ODg3MjYsIm5iZiI6MTUyMzc4NTEyNiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2Q1Zjg1NjgyLWY2N2EtNDQ0NC05MzY5LTJjNWVjMWEwZThjZC92Mi4wLyIsInN1YiI6IjQ5MTcyMjgzLWNhOTUtNGYxYy04YmI1LWY3YTI1ZDQ2MDZlYyIsImF1ZCI6IjQwOTU3YjljLTYzYmMtNGFiNC05ZWNiLTY3YjU0M2M4ZTRjYSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNTIzNzg1MTI2LCJhdXRoX3RpbWUiOjE1MjM3ODUxMjYsIm9pZCI6IjQ5MTcyMjgzLWNhOTUtNGYxYy04YmI1LWY3YTI1ZDQ2MDZlYyIsIm5hbWUiOiJ0cmF5bm9yczIyIiwiZmFtaWx5X25hbWUiOiJUcmF5bm9yIiwiZ2l2ZW5fbmFtZSI6IlN0ZXBoZW4iLCJlbWFpbHMiOlsidHJheW5vcnMyMkBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfQmx1ZUJhbmtTVVNJIn0.Co5IHkzDBrfhvVUDDJBWk3veaAmgWWmlhm1WLYXhW7HLWcB1yS6JVPw10MNR3cG8T-7cLVv7ibDZ63DLZGIpvH0DfzbN_y9KXq_e-UipBDjGeOza3JYpuMwkyggsGcY0Dt1kzaYKQWfqtXq9GcScX5xPqg1MPryYGtDMW9ghU-DD114o0PKe93hpqqO48mrGztY4PCxHZct700vbUdSzYqQVXR-ZYDfWJ4ImZVMEbdEnkMmQ2QbEeRndxn-3iQm94gpBCxuq5H-9IjpCZyG4kLmgTk8sLX3kjvgmq_T8EGEH8dHxV0VF0TT8OfxKP70B8wXCXkEj7f-WirpDCWCXXA" 
//var bearer= "break";
var url = "https://bluebank.azure-api.net/api/v0.7/";
var accountID = "0361d0ec-959f-4ce3-970c-a05a77a2609c";
var customerID = "49172283-ca95-4f1c-8bb5-f7a25d4606ec";
//var urlGetAccountDetails = "https://bluebank.azure-api.net/api/v0.7/accounts/0361d0ec-959f-4ce3-970c-a05a77a2609c";
//var urlGetTransations ="https://bluebank.azure-api.net/api/v0.7/accounts/0361d0ec-959f-4ce3-970c-a05a77a2609c/transactions";


var urlGetAccountDetails = url+"accounts/"+accountID;
var urlGetTransations =url+"accounts/"+accountID+"/transactions";
var urlGetCustomer = url+"customers";
//var urlGetCustomer = "https://bluebank.azure-api.net/api/v0.7/customers";
var urlGetCustomerID = urlGetCustomer+"/"+customerID;
var urlGetAllAccounts= urlGetCustomerID +"/accounts";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/getAccount', function(req, res) {

var account = req.param('account');

//if(account=="savings"){
//accountId = getSavingAccountId;
//accountType = "Savings Account";
//console.log("Savings account picked");
//}else if(account=="current"){
//accountId = currentAccountId;
//console.log("Current account picked");
//}else{
//console.log("Default account picked");
//accountId = currentAccountId;
//accountType = "Current Account";
//}

var options={
	url: url +'/accounts/'+accountID,
	headers: {'Ocp-Apim-Subscription-Key': devKey,
				"Authorization": bearer}
}

request(options, function (error, response, body) {
	console.log("-----------------------------------");
	console.log("  ");
	console.log("...Calling GET https://bluebank.azure-api.net/api/v0.7/accounts/<accountID> ");
	console.log("  ");
	console.log("Response Code: "+ response.statusCode);
  if (!error && response.statusCode == 200) {
    //console.log("call successfull"+body+"response: "+ response); // Print the google web page.
   
    var obj = JSON.parse(body);
    console.log(obj);
    //console.log("Balance: " + obj.accountBalance);
    console.log("  ");
    console.log("-----------------------------------");
    res.json({ balance: obj.accountBalance,
     			accountType: obj.accountFriendlyName}); 
  }else{
  	console.log("error: "+error);
  	console.log("-----------------------------------");
    //as a fail safe it will output a cached request
    console.log("{ id: 0361d0ec-959f-4ce3-970c-a05a77a2609c, sortCode: 839999, accountNumber: 10002295,  Iban: null, Bban: null, accountType: current, accountFriendlyName: MainAccount, accountBalance: 1119.73, accountCurrency: null }");
  	res.json({ message: "API is currently down, please contact you admin" }); 
  }
});
 
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/getCustomer', function(req, res) {

//var account = req.param('account');


var options={
  url: urlGetCustomerID,
  headers: {'Ocp-Apim-Subscription-Key': devKey,
        "Authorization": bearer}
}

request(options, function (error, response, body) {
  console.log("-----------------------------------");
  console.log("  ");
  console.log("...Calling GET https://bluebank.azure-api.net/api/v0.7/customers/<customerID> ");
  console.log("  ");
  console.log("Response Code: "+ response.statusCode);
  if (!error && response.statusCode == 200) {
    //console.log("call successfull"+body+"response: "+ response); // Print the google web page.
   
    var obj = JSON.parse(body);
    console.log(obj);
    //console.log("Balance: " + obj.accountBalance);
    console.log("  ");
    console.log("-----------------------------------");
    res.json({ address1: obj.address1 , county: obj.county ,postCode: obj.postCode,
          givenName: obj.givenName, familyName: obj.familyName}); 
  }else{
    console.log("error: "+error);
    console.log("-----------------------------------");
    res.json({ message: "API is currently down, please contact you admin" }); 
  }
});
 
});



router.get('/getHolidayInfoSS', function(req, res) {

	var user_id = req.param('id');
	console.log("-----------------------------------");
	console.log("  ");
	console.log("...Calling GET http://partners.api.skyscanner.net/apiservices/browsegrid/v1.0/Lasvagas/gbp/march ");
	console.log("  ");
	console.log("Hotel: £800 Flights: £1000  ");
	console.log("-----------------------------------");
    res.json({ Hotel: '£800', Flights: '£1000' });   
});


router.get('/getTransactionData', function(req, res) {
	var options={
	url: urlGetTransations,
	headers: {'Ocp-Apim-Subscription-Key': devKey,
				"Authorization": bearer}
}
	var user_id = req.param('id');
	console.log("-----------------------------------");
	console.log("  ");
	console.log("...Calling GET https://bluebank.azure-api.net/api/v0.7/accounts/<AccountId>/transactions");
	console.log("  ");
	console.log("Searching mortgage provider based on transactions");
	console.log("-----------------------------------");
request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log("call successfull"+body+"response: "+ response); // Print the google web page.
    //console.log(body);
    var info = JSON.parse(JSON.stringify(body));
    console.log(info);
    console.log(" ------------------------------------- ");
    console.log("  ");
    console.log(" Return { mortgageProvider: HSBC, cost: £1,120, DatePaid: 02/03/18, Certainty: 0.93  }");
    console.log("  ");
    console.log(" ------------------------------------- ");
    // console.log("-----------------------------------");
    // res.json({ balance: obj.accountBalance,
    //  			accountType: accountType}); 
      res.json({ mortgageProvider: 'HSBC', cost: '£1,120', DatePaid: '02/03/18', Certainty: '0.93'  });  
  }else{
  	console.log("error: "+error);
  	res.json({ message: "API is currently down, please contact you admin" }); 
  }
});
	//https://bluebank.azure-api.net/api/v0.6.3/accounts/"+currentAccountId+"/transactions
   
});

router.get('/transferFundsTo', function(req, res) {

var requestData = {
"toAccountNumber":"50000365",
"toSortCode":"839999",
"paymentReference":"Flights to Las Vagas",
"paymentAmount":"1"
}


var options={
	url: 'https://bluebank.azure-api.net/api/v0.6.3/accounts/'+getSavingAccountId+"/payments",
	method: "POST",
 json: true,
 body: requestData,
 port: '8080',
	headers: {"content-type": "application/json",
				'Ocp-Apim-Subscription-Key': devKey,
				"bearer": bearer}


}

function callback(error, response, body) {
		console.log("-----------------------------------");
		console.log("  ");
	console.log("...Calling POST https://bluebank.azure-api.net/api/v0.6.3/accounts/<accountID>/payments ");
	console.log("  ");
	console.log("Response Code: "+ response.statusCode);
    if (!error) {
        var info = JSON.parse(JSON.stringify(body));
        console.log("Payment made, information below: ");
        console.log(info);
		console.log("  ");
		console.log("-----------------------------------");
        res.json(info); 


    }
    else {
        console.log('Error happened: '+ error);
        res.json({ message: "API is currently down, please contact you admin" }); 
    }
}

//send request
request(options, callback);



});

app.post('/transferfunds', function(req, res) {
    var toAccountNumber = req.body.toAccountNumber;
    var toSortCode= req.body.toSortCode;
    var paymentReference= req.body.paymentReference;
    var paymentAmount= req.body.paymentAmount;
    console.log(toSortCode);


    res.send(toAccountNumber + ' ' + paymentAmount + ' ' + paymentReference);
});





// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Listening on ' + port);