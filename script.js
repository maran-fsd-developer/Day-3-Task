//! 1.Compare two JSON have the same properties without order.
//!let obj1={name:"person1",age:5};
//!let obj2={age:5,name:"person 1"};

/*function deepEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

let areEqual = deepEqual(obj1, obj2);
console.log(areEqual); */

//! 2.Display all the country flags in the console.
/*var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags.svg);
  }
};*/

//! 3.Print all countries names,regions,sub-region and populations.
/*var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  var result1 = JSON.parse(data1);
  for (var i = 0; i < result1.length; i++) {
    console.log(
      "countryname:" + " " + result1[i].name.common,
      "regions:" + " " + result1[i].region,
      "sub-region:" + " " + result1[i].subregion,
      "population:" + " " + result1[i].population
    );
  }
};*/
