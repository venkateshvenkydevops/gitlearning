
// const start = () => {
//     for (i = 1; i <= 5; i++) {
//         console.log(i)
//         if (i <= 3)
//             console.log(` i--> ${i} ,"true`);
//         else {
//             return
//         }
//     }
//     for (i = 1; i <= 2; i++) {
//         console.log(`2 loop ${i}`);
//     }
// }

// start();




// const names =["venky","sandy","booms"];
// console.log("lengtharray",names.length);

//  for(  i= 0; i<names.length; i++){
//     console.log(` I am  ${names[i]}`)
//  }
// const stringname ="venkateshdeveloper";
// console.log("namelength",stringname.length);



// const namesObject ={
//     name:"venky",
//     age : 27,
//     DoB : "06/03/1996"

// }

// console.log(namesObject.name);
// console.log(namesObject["name"]);

// for( let i in namesObject){
//     console.log(`key = ${i}`);
//     console.log(`result =${namesObject[i]}`);
// }



const familyMembers = [
    {
        name: "venky",
        age: 27
    },
    {
        name: "sandhiya",
        age: 30
    },

    {
        name: "booms",
        DoB: `28/3/2022`
    }];

console.log("final", familyMembers)

for (let i = 0; i < familyMembers.length; i++) {
    // console.log(`index = ${i}, value =`,familyMembers[i])
    console.log(`index = ${i}, value = ${JSON.stringify(familyMembers[i])}`)  /*-- Print an object in string interpolation--*/
}