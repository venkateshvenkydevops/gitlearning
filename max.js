
const maximum =(a,b,c)=>{
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
       return  c;
    }
}

const max =maximum(9,15,88);
console.log("result",max)



const val =58;

 const final =(i)=>{
    return  i % 5 ===0 ? "true":"false";
 }
 const value =final(val)
 console.log("result",value)