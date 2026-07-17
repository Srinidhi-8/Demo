let flexibleValue:any=10;
flexibleValue="Now I an a string";
flexibleValue=true;

let mysteryValue:unknown="Hello vishnu";
if(typeof mysteryValue==="string"){
    console.log("Length of unknow string:"+mysteryValue.length);
}

function logNotification(message:string):void{
    console.log("ALERT:"+message);
}

logNotification("Environment Setup complete!");