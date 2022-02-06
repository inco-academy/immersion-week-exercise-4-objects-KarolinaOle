module.exports = rmCensored;

function rmCensored(obj) {
  const swearWords = {};
  for (i=0; i<swearWords.length; i++){
    if (swearWords.includes("*")) {
    delete swearWords[i];
  }
  return obj
}
};

