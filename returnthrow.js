  const abc=(a)=>{
    // return "abc";
    // return new Error("alert me");
    // throw new Error("danger");
    // return new Error("alertdangerrrrrr");
    if(a==0){
        return new Error("value is zero");
    }
    else{
        return a;
    }
  }
 const final= abc(0);
 console.log("finall",final);
