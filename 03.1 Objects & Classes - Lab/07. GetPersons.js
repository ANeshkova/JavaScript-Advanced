function getPersons() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let arrayOfPersons = [];

    arrayOfPersons.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    arrayOfPersons.push(new Person('SoftUni'));
    arrayOfPersons.push(new Person('Stephan', 'Johnson', 25));
    arrayOfPersons.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return arrayOfPersons;
}

console.log(getPersons());
