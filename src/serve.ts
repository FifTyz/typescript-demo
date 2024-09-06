import express  , {Request,Response} from "express";
import user from './interface'
import cors from 'cors'
const app  = express () ;
app.use(cors())
app.get("/users",(req:Request , res:Response)=> {
    const accounts:user[] = [
        {name:"John" , age:16},
        {name:"Alex" , age:18}
    ]
    res.status(200).send(JSON.stringify(accounts));
    // status
    // 200 = ok
    // 201 = create successed
    // 400 = bad request
    // 401 = user ที่ไมไ่ด้รับอนุญาตให้เข้าถึงข้อมูล
    // 403 = จำกัดสิทธิ์การใช้งาน
    // 404 = page not found
    // 409 = มีข้อมูลนี้อยู่ในระบบแล้ว
    // 500 = server error
})
app.get("/users/:id",(req:Request , res:Response)=> {
    const IDUser:string = req.params.id ;
    const accounts:user[] = [
        {name:"John" , age:16},
        {name:"Alex" , age:18}
    ]
    res.status(200).send(JSON.stringify(accounts[Number.parseInt(IDUser)]));
})
app.listen(8000 , ()=>{
    console.log("server start 8000");
    
})