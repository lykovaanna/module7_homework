const user = {
  name: 'Ivan', 
  age: 20,
  city: 'Moscow'
};

for (let name in user) {
  if (user.hasOwnProperty(name)) {
    console.log(name + '-' + user[name]);
  } 
}