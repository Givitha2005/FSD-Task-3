// XMLHTTPREQUEST
// STEP-1: Creating an XHR Object
var request = new XMLHttpRequest();

// STEP-2: Opening a connection
request.open("GET", "https://restcountries.com/v2/all",true);

// STEP-3: Sending a request
request.send();

//STEP-4: Receiving a response via onload
request.onload = function(){
    if(request.status == 200){
        var data = JSON.parse(request.responseText);
        // response as string
        for (let i = 0; i <data.length; i++){
console.log(`Country: ${data[i].name}; 
Region: ${data[i].region}
Sub region: ${data[i].subregion}
Population: ${data[i].population}`)
        }

    }
}