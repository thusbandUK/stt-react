//generates six-letter caps code if none entered
export function generateSixLetterCode(){
    const alphabet  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let nascentCode = [];
    for (let j=0; j<6; j++){
        let randomNumber = Math.floor(Math.random()*26);
        nascentCode.push(alphabet[randomNumber]);
    }    
    return nascentCode.join("");
}

//generates identifier object to be uploaded to localStorage

export var identifierObject = {
  code: null,
  params: null
}

//autopopulates hidden identifier form field, either w query params or randomly generated

export function populateIdentifier() {

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("identifier");
if (c){
  //assigns form field value to be parse by Netlify
  document.getElementById('identifier').value = c;
    //configures object to be filed in local storage    
    identifierObject = {code: c, params: true};
} else {
  //assigns form field value to be parse by Netlify
  var generatedCode = generateSixLetterCode();
  document.getElementById('identifier').value = generatedCode;
  //configures object to be filed in local storage
  identifierObject = {code: generatedCode, params: false};
}
}