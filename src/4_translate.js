module.exports = translate;

function translate(obj, str) {
  let newStr = str.split(' ');

  for (let i = 0; i < newStr.length; i++ ){
  if (obj.hasOwnProperty(newStr[i])) {    
    newStr[i] = obj[newStr[i]]; 
  } else {
    console.log("Error: missing value");
    return "Error: missing value";
  }
}

console.log(newStr.join(" "));
return newStr.join(" ");
};
