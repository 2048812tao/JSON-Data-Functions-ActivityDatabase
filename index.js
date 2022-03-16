let personData = require("./data.json");

/*for(let i = 0; i < personData.length; i++){
    if(personData[i].gender == "female"){
        console.log("print out all female data",personData[i]);
    }  
}*/

/*for(let x = 0; x < personData.length; x++){
    let birthdate = new Date(personData[x].birthdate);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthdate.getFullYear();
    if(age >= 18){
        console.log(personData[x].name, age);
    }
}*/

for(let y = 0; y < personData.length; y++){
    let birthdate = new Date(personData[y].birthdate);
    let currentMonth = birthdate.getMonth(); 
    if(currentMonth == 1){
        console.log(personData[y]);
    }
}
