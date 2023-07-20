// // console.log(1<2<3)
// // console.log(3>2>1)

// // function d(s){
// //     return s.split(/\s+/).slice(0.5).join(" ");
// // }
// // var s2= "we Should always be helpful to others"
// // var s3= d(s2);
// // console.log(s3)

// //  var a1= new Array(3)
// //  console.log(a1)
// //  var a2=[]
// //  a2[2]=100
 
// //  console.log(a2)
// //  var a3=[,,,]
// //  console.log(a3)

// let o={"name":"john","city":"vert"}
// let p= function (alt_name){
//     if(alt_name){
//         this.name=alt_name;
//         console.log(this.name+this.city)
//     }
// }
// p.bind(o)('shaun')
// console.log(o.name)

// const var1=null;
// const v2=1;
// console.log(Boolean(var1))
// console.log(!!var1)
// console.log(Boolean(v2))
// console.log(!!v2)

// const s={r:10,d(){
//     return this.r*2;
// },p:()=>2* Math.PI*this.r,}

// console.log(s.d())
// console.log(s.p())

// const {car:myCar}={car:'ford'}
// console.log(car)
let L=[4,5,6]
for(let i in L){
    console.log(i)
}

let g=0;
for(g++;++g;g++){
    console.log(g);
    if(g==14){
        break;
    }
}

let h=8;
let f=(h>6||h<10)?++h:h+7;
console.log(f)