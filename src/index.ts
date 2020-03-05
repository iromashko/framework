import { User } from './models/User';

const user = new User({ name: 'name', age: 24 });

user.on('change', () => console.log(`Change #1`));
user.on('change', () => console.log(`Change #2`));
user.on('save', () => console.log(`Save was triggered`));
user.trigger('save');
user.trigger('change');
