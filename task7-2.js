const user = {
    name: 'Ivan', 
    age: 20,
    city: 'Moscow'
};

function has(str,obj) {
    return (str in obj)
};

let res = has('age',user)
console.log(res)