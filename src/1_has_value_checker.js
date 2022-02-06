module.exports = hasValue;

function hasValue(obj,value) {
  if (Object.values(obj).includes(value)){
    return true
  }
  else {
    return false
  }
};

