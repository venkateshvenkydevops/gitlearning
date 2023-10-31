const maxThree=(a,b,c)=>{

    return (a>b && a>c) ? a : (b>a && b>c) ? b : c;
  
}


let maxValue= maxThree(9,20,10); 
console.log("finalvale",maxValue)
//* 7 >2- true;
//* 7 >5 -true;
//* 5>2 -true;
// 5>7 ---false;
//*2>7--false;
//*2>5--false