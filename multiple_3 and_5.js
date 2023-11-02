 const multipleArray =[];

 for(i=1 ;i<=100;i++){
//   if( i % 3 ===0 && i %5 ===0 ){
//      multipleArray.push("FizzBuzz");
//   }
//   else if (i %5 == 0){
//     multipleArray.push("Buzz");
//   }
//   else if( i% 3 === 0){
//     multipleArray.push("Fizz")
//   }
//   else{
//     multipleArray.push(i)
//   }

  let result=(i %3 ==0 && i %5===0) 
                ? "FizzBuzz"   
                :(i % 5 ===0)
                    ? " Buzz"
                    :(i % 3 ===0)
                        ? "Fizz"
                        : i; 
 multipleArray.push(result);
 }
 console.log("array",multipleArray)

 /*------goal--------
 /* 3- every multiple of 3 write- Fizz
 /* 5-  every multiple of 5 replace with buzz
 /*---- 3&5 - every multiple of 3 and 5 replace with FizzBuzz ---*/





 