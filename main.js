var myData = JSON.parse(ANCESTRY_FILE);
var mothers = getMothersList(myData);
var avgM = avgMothers(mothers);
console.log(myData);
console.log(mothers);
console.log(avgM);


function getMothersList(list){
  var arr = [];
  var birth;
  for (var i=0; i<list.length; i++) {
      if (list[i].mother) {
        birth = findBirth(list[i].mother, list);
        if (birth) {
          var obj = {
            name: list[i].mother,
            childBirth: list[i].born,
            dateBirth: birth
          };
          arr.push(obj);
        }
      }
    }
  return arr;

}
function findBirth(data,list) {
  for (var i=0; i<list.length; i++) {
    if (data === list[i].name) {
    return list[i].born;
    }
  }
}

function avgMothers(list) {
  var avg =  0 ;
  for (var i=0; i<list.length; i++) {
    avg = avg +(list[i].childBirth - list[i].dateBirth);
  }
  return avg/list.length;
}
