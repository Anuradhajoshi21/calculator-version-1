
function sum (a,b){
   return a+b;
   
}
function sub(a,b){
   return a-b;
}
function mul (a,b){
  
   return  a*b;
}
function divide (a,b){
   
   return  a/b;
}
function main(){
a = parseFloat(prompt("enter the value of a :"));
    let op =prompt("enter the operator:");
    b =parseFloat(prompt("enter the value of b :"));
/*console.log("Enter a  choice:")
let  op= prompt("Enter a valid choice:");
console.log('ch ki value kya hai?', op);*/
let c;
switch(op){
   case '+':
       
        c = sum(a,b);
        console.log('sum is',c);
       break;
       case '-':
           c=  sub(a,b);
            console.log('sub is',c);
           break;
           case '*':
              c=   mul(a,b);
                console.log('mul is',c);
               break;
               case '/':
                   c= divide(a,b);
                    console.log('div is',c);
                   break;
                   default:
                       console.log("enter valid choice");
}
}
main();