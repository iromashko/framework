import { User } from './models/User';

const user = new User({ name: 'name', age: 24 });
user.set({ name: 'newname', age: 55 });

console.log(user.get('name'));
console.log(user.get('age'));
