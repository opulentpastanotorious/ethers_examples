const mathScores = [39, 50, 45, 41, 50];
  
let newMap = mathScores.map((currentValue, index, array) => {
    console.log('Current value:' + currentValue);
    console.log('Index:' + index);
    console.log('Array:' + array);
    return currentValue;
})

console.log('newMap:' + newMap);

//////////////////////////////////////////////////////////////////////////////////////////


const codes = [101, 201, 301, 303, 202]; 
let mathCodes = codes.map((code)=>{
    return `mth${code}`;
});
  
console.log('mathCodes:' +mathCodes); //["mth101","mth201","mth301","mth303","mth202"]

//////////////////////////////////////////////////////////////////////////////////////////

 /*
 
 Q)  why 1st  ${code} doesn't need .toString()?
 
 A)  Because things inside template literal expressions are casted to string 
 anyway,  but code.length is undefined(which is then casted to string)
 */
 
const map1 = [101, 201, 301, 303, 202]; 
let map2 = map1.map((code, index, array)=>{
     console.log('index:' + index); //["mth101","mth201","mth301","mth303","mth202"]
     return `mth${code}:${code.toString().length}`;
     code.l
});
  
console.log('map1:' + map1); //["mth101","mth201","mth301","mth303","mth202"]
console.log('map2:' +map2); //["mth101","mth201","mth301","mth303","mth202"]

//////////////////////////////////////////////////////////////////////////////////////////



const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

// const cArr1 = Array(10);
const cArr1 = new Array(9,10,8,7,6);
console.log('cArr1 Array :' + cArr1);
const Arr1 = cArr1.map((val,ind,ogAr)=>{ind});
console.log('Arr1 Array :' + Arr1);
// const Arr2 = cArr1.call('hello ',(val)=>{val.toString()});
// console.log('Arr2 Array :' + Arr2);

// convert map string to chars 
const map = Array.prototype.map;
console.log('map:' + (map));
console.log('typeof map:' + typeof(map));

const charCodes = map.call('Hello World', (x) => x.toString());
console.log('charCodes:' + charCodes);
console.log('typeof charCodes:' + typeof(charCodes));


//////////////////////////////////////////////////////////////////////////////////////////

const kvArray2 = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray2 = kvArray2.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]


//////////////////////////////////////////////////////////////////////////////////////////