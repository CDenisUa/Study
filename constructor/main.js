var user = {
    firstName : 'Denis',
    lastName: 'Ron',
    getFullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}
let a = user.getFullName();
console.log(a);

// Функция конструктор

function User(firstName,lastName){
    /* this = {}
    *  this наследует prototype */
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAdmin = false;
    this.getFullName = function (){
        return this.firstName + ' ' + this.lastName;
    }
}

// Создаем экземпляры обьектов

let myUser = new User('Егор','Евтушенко'),
    anotherUser = new User('Alex','Ivanov');

console.log(`Сегодня на работу пришел ${myUser.getFullName()} и испортил станок. Но 
затем пришел ${anotherUser.getFullName()} и поченил его.`);
