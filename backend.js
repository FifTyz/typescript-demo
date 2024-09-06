let isG = true ; 
let isG2 = false ;

var num1 ;
let num2 ;
const num3 = 2 ;
num = 20 ;
let accounts = [{name:"John" ,age:"18"} ,{name:"John" ,age:"18"}] ;
function checkAge(age)
{
    // if(age <= 6)
    // {
    //     console.log("free");
    // }else if(age <= 8)
    // {
    //     console.log("4 bath");
    // }else
    // {
    //     console.log("8 bath");
    // }
    switch(age)
    {
        case 6:
            console.log("free");
            break;
        case 7:
            console.log("4 bath");
            break;
        case 8:
            console.log("8 bath");
            break;
        default:
            console.log("10 bath");
            break;
          
    }
}
function Array ()
{
    for(let i = 0 ; i < 3 ; i++)
    {
        accounts.map((result)=>{
            console.log(result.name);
        })
    }
}
function square(x1,x2)
{
    (x1 < 8 || x2 < 8) ? x1 = 4 : console.log("false");
    
    if(x1 < 8 || x2 < 8)
    {
        x1 = 4 ;
        x2 = 4 ;
    }
    x3 = x1*x2
    return x3 ;
}
function getName(name)
{
    if(isG)
    {
        isG = false ;
        return "Mr " + name ;
    }else
    {
        return "Ms " + name ;
    }
    
}
console.log((square(8,8) + 8) - 2);
console.log(getName("yo"));
// Array();
// checkAge(8);