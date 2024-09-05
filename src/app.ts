let num:number = 0 ;
let Name:string = "John" ;
let isCheck:boolean = true ;
let anyway:any = true ;
let unk:unknown ; 
const nickname:string = "migel";
let accounts:{name:string , age:number , status:boolean} = {name:"John" ,age:18, status:false}
let users:user[] = [{name:"John" ,age:18, status:false} , {name:"John" ,age:18, status:false}] //let users:{name:string , age:number , status:boolean}[] แบบนี้คือจะเอาข้อมูลใส่ลงใน array

interface user{
    name:string;
    age:number;
    status:boolean;
}
//ข้างบนคือการสร้าง interface เอง(กำหนดประเภทข้อมูลที่เราจะรับ)

type animal = string | number ; // อันนี้คือชนิดข้อมูล
let cat : animal

function dataUsers(data:unknown)
{
    if(typeof data === "string")
    {
        // successed data
    }else
    {
        // data wrong
    }
}

function demo()
{
    users.map((result)=>{
    console.log(result.name);
    })
}

const demo3 = ():void =>
{
    console.log("sawassdee");
    
}
demo3()
//demo();