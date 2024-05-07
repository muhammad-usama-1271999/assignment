let currentUsers = ['user1', 'user4', 'user5', 'admin'];
let newUsers = ['user4', 'user8', 'admin', 'user3'];
newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} is available.`);
    }
    else {
        console.log(`${newUser} will need to enter a new username.`);
    }
});
export {};
