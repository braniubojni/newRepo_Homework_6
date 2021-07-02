let john = {name:'John', surname: "Smith", id: 1};
let mary = {name:'Mary', surname: "Key", id: 2};

let users = [john, mary];

let newUsers = users.map(user => {
	return {fullName: `${user.name} ${user.surname}`,id:user.id};
});

// let newUsers = users.map(user => {
// 	user['fullName'] = `${user.name} ${user.surname}`;
// 	delete user.name;
// 	delete user.surname;
// 	return user;
// });
console.log(newUsers);
