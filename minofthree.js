
const minValue = (a,b,c)=> {

    return (a<b && a<c) ? a: (b<a && b<c) ? b : c 

}
let minumresult = minValue(2,8,1);
console.log("final",minumresult);
//*2<9 && 2<6 -true;
//(6,2,5)--- 6<2;
