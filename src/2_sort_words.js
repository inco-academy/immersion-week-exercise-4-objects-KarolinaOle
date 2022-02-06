module.exports = sortWords;

function sortWords(arr) {
  const Obj = {
    "odd" : [],
    "even": []
  }
for (let i=0; i<arr.length; i++) {
  if ((arr[i].length)%2==0) {
    Obj["even"].push(arr[i]);
  } else {
    Obj["odd"].push(arr[i]);
  }
  return obj
}
};
