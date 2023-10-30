let evenOrOdd =(variable)=>{
  console.log("val",variable%2);
  let result=variable%2;
  if(result===1){
    console.log("odd");
  }
  else{
    console.log("even");
  }
}
evenOrOdd(8)

// TERNARY OPERTOR-----//
let result=(variable)=>{
   let finalvalue= variable%2===0?"even":"odd";
   console.log("final",finalvalue);
   

} 
result(7)