module.exports = groupFamilies;

function groupFamilies(arr) {
  let obj = {}; 
  
  for (let i = 0; i < arr.length; i++) { 
    if (obj.hasOwnProperty(arr[i]['surname'])) {
      obj[arr[i].surname].push(arr[i].name); 
    } else {
      obj[arr[i].surname] = [arr[i].name]; 
    }
    console.log(obj);
  }
}

groupFamilies([
  { name: 'Barack', surname: 'Obama' },
  { name: 'Michelle', surname: 'Obama' },
]); // { Obama: [ 'Barack', 'Michelle' ] }

groupFamilies([
  { name: 'Barack', surname: 'Obama' },
  { name: 'Michelle', surname: 'Obama' },
  { name: 'Donald', surname: 'Trump' },
]); // { Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }
