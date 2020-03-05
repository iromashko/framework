import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'myname',
  age: 33
});
axios.get('http://localhost:3000/users/1');
