// task_02.js
class User {
   constructor(user) {
       this.name = user.name;
       this.age = user.age;
       this.followers = user.followers;
   }
   getInfo() {
       return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
   }
}
const mango = new User({
   name: 'Mango',
   age: 2,
   followers: 20,
 });
 console.log(mango.getInfo());// User Mango is 2 years old and has 20 followers
 const poly = new User({
   name: 'Poly',
   age: 3,
   followers: 17,
 });
 console.log(poly.getInfo()); // User Poly is 3 years old and has 17 followers