var age = 16
console.log(`Você tem ${age} anos.`)
if (age < 16) {
    console.log('Não vota!')
} else if (age < 18 || age > 65) {
    console.log('Voto opcional!')
} else {
    console.log('Voto obrigatório!')
}

let object = {
    name: `Rahim`,
    age: 18,
    place: `Delhi`,

    details: function () {
        if (this.age < 16) {
            console.log('Não vota!')
        } else if (this.age < 18 || this.age > 65) {
            console.log('Voto opcional Vote!')
        } else {
            console.log('Voto obrigatório!')
        }
        return `The candidate name is ${this.name} and ${this.age} years old`;

    }
}

console.log(object.details());

