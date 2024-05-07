let userName: string[] = ["admin", "user1", "user2", "user3", "user4"]


    userName.forEach(userName =>{
    if(userName === "admin"){
        console.log("Hello admin, would you like to see a status report")
    }else {
        console.log(`hello ${userName}, thank you for logging again`);
    }
})