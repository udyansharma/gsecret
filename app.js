const request = require('request');
let address = ["Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Chennai","Siliguri","Jhansi","Ulhasnagar","Nellore	Seemandhra","Jammu","Sangli","Belgaum","Mangalore","Ambattur","Tirunelveli",
"Malegoan","Gaya","Jalgaon","Udaipur","Maheshtala"];
console.log(address.length);
let resultArray = [];
for (let i=0;i<=11;i++){
request.get("https://maps.google.com/maps/?q="+address[i]+"&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjThv_MjffmAhXNwjgGHTICBwQQ_AUoA3oECBIQBQ",(error,apiResponse,body)=>{
    const metaSeparatedBody = body.split("<meta");
    console.log("undefined",apiResponse);
    console.log("THE BODY IS",metaSeparatedBody[8]);
    const myTargetLine = metaSeparatedBody[8].split("center=")[1].split("&")[0];
    let indexOfSeparator = myTargetLine.indexOf("%2C");
    console.log({indexOfSeparator});
    let latitude = myTargetLine.substring(0,indexOfSeparator);
    let longitude = myTargetLine.substring(indexOfSeparator+3);
    let latLngObj = {latitude,longitude};
    resultArray.push({[address[i]]:latLngObj})
});
}
setTimeout(()=>{console.log(resultArray)},5000)