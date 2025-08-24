let obj={0:false,1:true,2:false,3:false,4:true};

const toggleSwitch=(index)=>{

return{
...obj,
[index]:!obj[index],
}



}

const obj2=toggleSwitch(2)

console.log(obj2===obj);