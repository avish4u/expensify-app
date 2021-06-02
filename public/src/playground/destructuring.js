console.log('destructuring');

//Object Destructuring.....................................................
// const person = {
//     name: 'Avish',
//     age: 19,
//     location :{
//         city: 'tonk',
//         temp: 36
//     }
// };

// //ES6Object destructuring....
// const {name:firstname = 'Anonymus', age} = person;
// // const name = person.name;
// // const age = person.age;
// const{city, temp: temperature} = person.location;


// console.log(`${firstname} is ${age}.`);

// if(person.location.city && person.location.temp){
//     console.log(`Its ${person.location.temp} in ${person.location.city}.`);
// }
// if(city && temperature){
//     console.log(`its ${temperature} in ${city}.`);
// }
// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan holiday',
//     publisher: {
//      name:'penguin'
//     }
// }
// const {name:publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

//Array destructuring....................................

// const address = ['1299 S juniper street', 'philadelphia', 'pennsylvenia', '19147'];
// const [,city , state = 'NewYork'] = address;
// console.log(`you are in ${city} ${state}.`);

const item =['Coffee(hot)', '$2', '$2.5' , '$2.75'];
const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
