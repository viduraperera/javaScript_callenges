let student = {
    first: 'vidura',
     last: 'perera',
      age: 25,
       height: 170,
       studentInfor: function(){
            return this.first + '\n'  + this.last + "\n" + this.age;
       }
    };

console.log(student.first);
console.log(student.last);
console.log(student.height);
student.first = "notVidura";
console.log(student.first);
console.log(student.studentInfor());

let age = prompt("what is your age");

if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
}
else{
    status = 'not my audience';
    console.log(status);
}

let day = 'monday';

switch(day){
    case 'sunday' :
        text = 'weekend'
        console.log(text); 
    
    case 'monday' :
        text = 'weekday';
        console.log(text);
    default:
        text = 'any other day';
        console.log(text);
}

function type(){
    let result = 'Hello World';
    console.log(result);
}

function type_2(){
    type();
}

type_2();

 window.vehicleName = 'honda';

function printVehicleName(name){
    console.log(window.vehicleName);
}

printVehicleName(vehicleName);


let Vehicle = {
    vehicleName : 'toyota',
    getVehicleName: function(){
        return this.vehicleName;
    }
};

console.log(Vehicle.getVehicleName());

    fetch('(https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data =>{
        console.log(JSON.stringify(data))
    })
    .catch(error => console.log(error));

    //JSON is javascript object notaion
//use to represernt data 
//API to carry inmoramtion that is light wegiht