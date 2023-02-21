function sum (a,b){
     a =prompt("enter the value of a :");
     let op =prompt("enter the operator:");
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
console.log("Enter a  choice:")
let  ch= prompt("Enter a valid choice:");
console.log('ch ki value kya hai?', ch);
switch(ch){
    case '1':
        console.log('case one executed ');
        let c = sum(4,5);
         console.log('sum is',sum(4,5));
        break;
        case '2':
             sub(9,3);
             console.log('sub is',sub(9,3));
            break;
            case '3':
                 mul(2,3);
                 console.log('mul is',mul(2,3));
                break;
                case '4':
                     divide(10,5);
                     console.log('div is',div(10,5));
                    break;
                    default:
                        console.log("enter valid choice");
}