let Person = {
    name:'Ben',
    lastName:'Henry',
    say: function (){
        return this.name
    }};

let SecondPerson = {
        name:'Joe',
        lastName:'Dough',
        say: Person.say.bind(Person)
        };

function getFullName(prefix,suffix){
    return prefix + ' ' + this.name + ' ' + this.lastName + suffix;
}
//call мы можем применять любую функция как метод любого объекта
console.log(getFullName.call(Person,'Mr','good bye!!!'));

//apply передаем аргументы массивом, работает так же как и call
console.log(getFullName.apply(Person,['Hello',' Good bye']));

//bind привязывается контекст к Person
console.log(SecondPerson.say())