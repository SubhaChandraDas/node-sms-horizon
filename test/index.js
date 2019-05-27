var send = require("../index")({
    user_name :  '',
    api_key : '',
    sender_id : ''
});

console.log(send('',"Test test").then((r)=>console.log(r)));