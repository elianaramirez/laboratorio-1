const person = {
name: "Gregor",
lastname: "Mandella",
age: 34,
roles: [
  { name: "Manager", method: "get" },
  { name: "Client", method: "post" },
  { name: "User", method: "get" },
],
address: {
  address: {
    street: "3914 Woodruff Ave",
    location: "Oakland, CA 94602Glenview",
  },
  position: {
    lat: 123.221,
    lng: 124.544,
  },
},
};

//const showPersonalInformation = (person) => {
//var information = "";
//information += "Nombres " + person.name + "\n";
//information += "Apellidos" + person.lastname + "\n";
//information += "Edad" + person.age;
//return information;
//};
//const addIdUser = (person, id) => {
    //return { ...person, id };
 //  };
 const addIdUser = {...person, id:1};
 
person.roles.push({Name: "new", get:"neww"}) 
   
const {name, lastname, age} = person;


const showRoles = (person) => {

let information = "";
let roles = person.roles;
for (let i = 0; i < roles.length; i++) {
  information += "Nombre del rol " + roles[i].name + "\n";
  information += "Tipo del rol " + roles[i].method + "\n";
}
return information;
};

const getPosition = (person) => {
return person.address.position;
};
const getFirstRol = (person) => {
return person.roles[0];
};

const main = () => {
//console.log("Nombre:"+ "\n"+ name + "Apellido:"+ "\n"+ lastname +"edad:" + "\n"+ age);
console.log( ' Nombre: ' + name + "\n", 'Apellido: ' + lastname + "\n",'edad: '+ age);

//console.log(showPersonalInformation(person));

console.log(showRoles(person));
console.log(getPosition(person));
console.log(getFirstRol(person));
//console.log(addIdUser(person, 123456));
console.log(addIdUser);

};
export default main;
