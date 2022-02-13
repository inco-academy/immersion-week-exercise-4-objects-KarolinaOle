module.exports = countOccurences;

function countOccurences(str) {
  let words = str.split(' '); 
  let obj = {};
  
  for (let i=0; i<words.length; i++){
    if (Object.keys(obj).includes(words[i])) {
      obj[words[i]] += 1;
    } else {
      obj[words[i]] = 1;
    }
  }
  let objRev = {};
 
  for (let key in obj) {
    if (Object.keys(objRev).includes(obj[key].toString())){
      objRev[obj[key]].push(key);
    } else {
      objRev[obj[key]] = [key];
    }
  }
  return objRev;
};
