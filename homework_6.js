let john = {name:'John', surname: "Smith", id: 1};
let mary = {name:'Mary', surname: "Key", id: 2};

let users = [john, mary];

let newUsers = users.map(user => {
	let tempUser = {};
	tempUser['fullName'] = `${user.name} ${user.surname}`;
	tempUser['id'] = user.id
	return tempUser;
});

// let newUsers = users.map(user => {
// 	user['fullName'] = `${user.name} ${user.surname}`;
// 	delete user.name;
// 	delete user.surname;
// 	return user;
// });
console.log(newUsers);
