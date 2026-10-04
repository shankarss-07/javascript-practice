

//HIGHER ORDER FUNCTIONS retuns

function oddOrEvenFactory(request) {
if(request == "odd") {
return function(n) {
console.log(! (n%2 == 0));
}
} else if(request == "even") {
return function(n) {
console. log(n%2 == 0);
}
} else{
console. log("wrong request");
let request = "odd";
}
}

//HIGHER ORDER FUNCTIONS

function multifunc(greet,count){
    for(i=0; i<=count; i++){
        greet();
    }
    }
    let name=function(){
        console.log("i am the Boss");
    }
multifunc(name,10);




//let nam="i am ";//global scope
//function outer(){
  //  let nam="shankar";//function scope //next this one
  //  console.log(nam);
// function inner(){
//     console.log(nam);//lexical scope  and this is not printing beacuse we dint call inner function
// }
// }
// console.log(nam);// first prints
// outer();



// // lexical scope like nested loop
// function outer(){
//     let a=2;
//     let b=4;
    
// function inner(){ 
//     let c=112;
//         console.log(a);
//         console.log(b);
//         }
// inner();
// }
// outer();
// console.log(c);// not accessable from inner 




//Block Scope 
// for(let i=0; i<=10; i++){    
// }
//console.log(i);// it inly prints inside the flower brakets



//GLOBAL SCOPE AND FUNCTION SCOPE

let sum=54;//global scope
function calSum(a,b){
    let sum=a+b; //function scope
    console.log(sum);
}
calSum(2,4);
console.log(sum);


// cancat of Array 
 let array=["aaa",'bbb',"ccc",'cxccc'];
 function fucnName(array){
    let cancat="";
    for(let i=0; i<array.length; i++){
        cancat=cancat+array[i];
    }
    return cancat;
 } 
console.log(fucnName(array));



//SUM OF N NUMBER
// function funcsum(n){
//     let sum=0;
//     for(i=0; i<=n; i++){
//         sum=sum+i;
//     }
// return sum;
// }
// console.log(funcsum(5));





//RETURN FUNCTION 


// function fucnName(){
//     let age=12;
//     if(age<=18){
//         return "adult";
//     }else
//         return "no a adult";
// }
// console.log(fucnName());

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));






//number's  table

// function table(){
//     let input=prompt("enter the table of the  number ");
//     n=parseInt(input);
//     for(let i=n; i<=n*10; i=i+n){

//         console.log(i);
//     }
// }
// table();

//avgof three  number

// function avgnum(num1,num2,num3) {
//     avgofthree=(num1+num2+num3)/3;
//     console.log(`average of three number is ${avgofthree}`);
// }
// avgnum(2,3,4);





//FUCTION WITH ARGUMENTS
// function fucnName(name,age){
//     console.log(` ${name}'s is the boss and his age is ${age}`);
// }
// fucnName("shankar",30);



// function fucnName(){
//     let rand=(Math.floor(Math.random()*6)+1);
//     console.log(rand);
// }

// fucnName();







// const max=prompt("enter the max number");
// const random=Math.floor(Math.random()*max)+1;
// let guess=prompt("enter the random number:");

// while(true){
// if(guess=="quit"){
//     console.log("your are quiteded");
//     break;
    
// }else if(guess==random){
//     console.log(" you Enter the correct  number ",random);
//     break;
// }else if(guess<random){
//     guess=prompt("to less");
// }else if(guess>random){
//     guess=prompt("to high");
// }
// }
// 



// //ARRAY OF OBJECT
// const studentinfo=[
//     {
//         name:'abhi',
//         collage:'sridevi',
//         city:'tumkur'
//     },
//     {
//         name:'shankr',
//         collage:"srivivas",
//         city:"mukka"
//     },
//     {
//         name:'shreyas',
//         collage:"SUIet",
//         city:"mukka"
//     }
// ];
//studentinfo[1].city to accsess
//studentinfo[1].city="bengalore"// to update

// //OBJECT OF OBJECT
// const studentinf={
//     abhi:{
//         collage:'sridevi',
//         city:'tumkur'
//     },
//     shankar:{
//         collage:"srivivas",
//         city:"mukka"
//     },
//     shreyas:{
//         collage:"SUIet",
//         city:"mukka"
//     }
// };
// studentinf.abhi.city// to accsess




/// OBJECT LETERIALS


// const student={
//     name:"ssh",
//     age:21,
//     course:["py","jva",'js']
    
// }
// console.log(student)

// student.name;// for get value


// let prop="shankar";










// let list = ['shnar', 'dsjl', 'karthi', 'basu', 'shreyas', 'shankar', 'push'];
// let req=prompt("enter your choice");

// while (true) {
//     if(req=="list"){
//         for(let i=0; i<=list.length; i++){
//             console.log(i,list[i]);
            
//         }
        
//     }else if(req=="add"){
//         let task=prompt("enter the value to add");
//         list.push(task);
//     }else if(req=="quit"){
//         console.log("you are quiteded");
//         break;
//     }else if(req=="delete"){
//         let index=prompt("enter the index to delete");
//         list.splice(index,1);
//         console.log("succefuly deleted");
//     }
//     console.log("---------------------")
//     req=prompt("enter your choice");    
// }



//NESTEDED OF LOOPS

// let fruits=[['shnar','dsjl','karthi'],['basu','shreyas','shankar'],['basu','shreyas','shankar']];
// for(let fruit of fruits){
//         // for(let list of fruit){
//         for(let list of fruit){
                
//          for(let seq of list){  ///// not
//           console.log(seq);
//         }
// }
// }




//FOR OF LOOPS
// let fruits=['shnar','dsjl','karthi','basu','shreyas','shankar'];
// for(let fruit of fruits){
//         console.log(fruit);
// }
// for(let fruit of "shankarss"){
//         console.log(fruit);
// }


// NESTEDED LOOP
// let fruits=[['shnar','dsjl','karthi'],['basu','shreyas','shankar']];
// for(i=0; i<=fruits.length; i++){
//         console.log(`list ${i}`);
// for(j=0; j<=fruits[i].length; j++){
//          console.log(fruits[i][j]);
//         }
// }





//loops with array
// let fruits=['shnar','dsjl','karthi','basu','shreyas','shankar'];
// for(i=fruits.length-1; i>=0; i--){
//         console.log(i,fruits[i]);
// }




//BREAK /

// let i=1;
// while(i<=5){
//         if(i==3){
//         break;
//         }
// console.log(i);
// i++;
// }


// let fav="kgf";
// let guess=prompt("guess my fav movie");
// while((guess!=fav ) && (guess!="quit")){
//         guess=prompt("please try again");

// }
// if(guess==fav){
//         console.log("yes you choose correct one kfg");
// }else {
//         console.log("you quit");

// }





//FOR LOOP
// let i=1;
// while(i<=10){
//         console.log(i);
//         i++;
// }


//NESTRED LOOP 
// for(let i=1; i<=3; i++){
// for(let j=1; j<=3; j++){
//         console.log(j);
// }  
// }//3 times print



//FOR LOOP
// let n=prompt("Enter the number : ");
// n=parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//         console.log(i);
// }  


// for(let i=1; i<=70; i=i+7){
//         console.log(i);
// }




//ARRAY METHODS
// let s=["red",'green',"blue","pink"];
// let n=["jan","jul","mar","aug","red","green","blue","pink"];
// console.log(n.shift());
// console.log(n.unshift[1]("june"));
// console.log(n.indexOf("jul")); //1
// console.log(n.indexOf("green")); //-1
// console.log(n.includes("jul")); //true
// console.log(n.includes("gery")); //false
// console.log(n.concat(s)); // merging two string or arrays
// console.log(n.slice(-2)); //7-3=4 and printing (green ,blue ,pink)\
// console.log(n.splice(0,2,"july","new1"));(remove ,replace,add in place )
// console.log(n.sort());//sort an array 

//NESTED ARRAY
// let a=[['X',null,'O'],
//         [null,'X',null],
//         ['O',null,'X']];
// a[0][1]='O';
// a[1][0]='O';
// a[1][2]='O';
// a[2][1]='O';
// console.log(a);








// console.log(n.push("shankar"));
//console.log(n);
 


//Array (DATA STRACTURE)
// console.log(n[2][3]);

// let nam="shalkar";
// console.log(nam.slice(3).replace("l","t"));





//METHOD OF CHAINING
// let nam="shankarssspushv";
// console.log(nam.trim().toUpperCase());


// let nam="shankarssspushv";
// // console.log(nam.indexOf("v"));
// // nam.slice(4)
// // nam.repeat(2);
// // nam.replace("hv","hr")
// // console.log(nam);
// console.log(nam.repeat(10));


// STRING METHOD -INDEX OF 





// // PROMPT AND ALERT //

// let fname=prompt("enter your name:");
// console.log(fname);
// console.error("check the message")


// //SWITCH STATEMENT

// let day="2";
// switch(day){
//     case "1":
//     console.log("monday");
//     break;
//     case "2":
//     console.log("Tonday");
//     break;
//     case "w":
//     console.log("wonday");
//     break;
//     case "th":
//     console.log("Thonday");
//     break;
//     default:
//         console.log("enter the currect day");
// }
 
        

// // LOGICAL AND OR //

// let nam="asz";
// if(nam[0]=="a" && nam.length>=3){
//     console.log("its good string");
// }



// //IF STATEMENT//
// let size="XL";
// if( size=="S"){
//     console.log("50");
// }else if(size=="M"){
//     console.log("100");
// }else if(size=="XL"){
//     console.log("150");
// }else if(size=="XXL"){
//     console.log("200");
// }else if(size=="XXXL"){
//     console.log("250");
// }

// // CONCATIONATION //
// console.log("i am shankar");
// let pen=10;
// let pensil=12;
// let value="The price of pen and pensil prize is : "+(pen+pensil)+"rupees" ;
// console.log(value);
