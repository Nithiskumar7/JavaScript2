//JavaScript Variables var let const

var a = 10;
var b = 20;
var c = a + b;
console.log(c)

let m = 600;
let n = 700;
let s = m+n;
console.log(s);

const k = 10;
const r = 22;
console.log(k+r);


let x = 5, y=6, z=7;
let e = x+y+z;
console.log(e)

let sum = 44;
console.log(sum);

const say = "hello";
const namee = "nk";
console.log(say+' '+namee);

//Data type 

const xx = 50;
const yy = "helena"
const rr = `the math mark ${xx} person name ${yy} `
console.log(rr);

//JavaScript Symbol

const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1);

//JavaScript Object
const student = {
    firstName: 'ram',
    lastName: 'kumar',
    class:12
};



for(let i=0; i<=10;i++ ){
    console.log(`NithisKUmar ${i+1}`)
}

document.write("Manisha Kumari<br>".repeat(10))


function smallBro(num){
    var i;
    for(i=0;i<=num;i++){
        console.log(i+"Amit Kumar");
    }
}
smallBro(10);