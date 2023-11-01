
const date =new Date();
console.log("date",date);

const month = date.getMonth() +1;
console.log("month",month)

const year = date.getFullYear();
console.log("year",year);

const daysincurrent = getDaysinmonth(year,month);

function getDaysinmonth(year,month){
    return new Date(year,month,0).getDate() 
}

console.log("no of days",daysincurrent);

