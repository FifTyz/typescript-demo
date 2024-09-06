import  express , {Request,Response} from "express";
import user from './interface';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.get("/users",(req:Request , res:Response)=>{
    const accounts:user[] = [
        {name:"John" , age:16 ,status:false} ,
        {name:"Alex" , age:18 ,status:false} 
    ]  
    res.status(200).send(JSON.stringify(accounts));
    // 200 = ok
    // 201 = create successed
    // 400 = bad request
    // 401 = auth user
    // 403 = auth 
    // 404 = not page found 
    // 409 = มีข้อมูลนี้ในระบบแล้ว
    // 500 = server error
})
app.get("/users/:id/:username/:sorce",(req:Request , res:Response)=>{
    const {id} = req.params;
    const accounts:user[] = [
        {name:"John" , age:16 ,status:false} ,
        {name:"Alex" , age:18 ,status:false} 
    ]  
    // "1" > 1
    const index = Number.parseInt(id);
    if((index+1) <= accounts.length)
    {
        res.status(200).send(JSON.stringify(accounts[index]));
    }else
    {
        res.status(404);
    }
})
app.get("/product",(req:Request , res:Response)=>{
    const idx:unknown = req.query.id ;
    const accounts:user[] = [
        {name:"John" , age:16 ,status:false} ,
        {name:"Alex" , age:18 ,status:false} 
    ]  
    // "1" > 1
    let index:number ; 
    if(typeof idx === 'string')
    {
        index  = Number.parseInt(idx);
        if((index+1) <= accounts.length)
            {
                res.status(200).send(JSON.stringify(accounts[index]));
            }else
            {
                res.status(404);
            }
    }
})
app.post("/account",(req:Request , res:Response)=>{
    const {name , age} = req.body;
    console.log(`name:${name} age:${age}`);
    console.log("name"+name+"age:"+ age);
    res.status(201).send("successed");
});

app.listen(8000 ,()=>
{
    console.log("server start 8000");
})

