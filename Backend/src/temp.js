const bcrypt=require("bcrypt");

const password="";

const hash=async ()=>{
    const salt=await bcrypt.genSalt(10);
    const result=await bcrypt.hash(password,salt);
    console.log(salt);
    console.log(result);
    const isAllowed=await bcrypt.compare("",result);
    console.log(isAllowed);
}

hash();
