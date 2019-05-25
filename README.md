# node-sms-horizon

Send SMS using SMS Horizon gateway in node Environment.

## Getting Started

First you have to register in https://www.smshorizon.in/, then you will have a User Name, Api key and sender Id.

### Prerequisites

To install node-sms-horizon , you need node.js and npm.

### Installing

Once you have that set-up, just run

```
npm install --save node-sms-horizon
```
 in your project directory.


## Usage

node-sms-horizon send_sms(senderOption, recieverOption) returns promise and
needs two parameters 'senderOption' and 'recieverOption'.
```
var send_sms = require("node-sms-horizon");

structure of those parameters:

senderOption= {
user_name : // Use your User name from sms-horizon. 
api_key : // You will get this api key after registration. 
sender_id : //you have to create a sender Id in you sms-horizon portal. 
};

recieverOption= {
phone_no: // reciever phone number;
text: // sms content
}

then just pass those parameters in as send_sms(senderOption, recieverOption).

Example:

let send_sms = requrire('node-sms-horizon');
let sent     = send_sms(senderOption, recieverOption);

sent.then(response => {
    console.log(response)
}).catch(error => {
    console.error(error)
})

```

## Authors

* **Subha Chandra Das** - [SubhaChandraDas](https://github.com/SubhaChandraDas)

## License

This project is licensed under the MIT License.

