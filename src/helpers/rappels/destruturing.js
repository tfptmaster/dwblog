const person = {
    nom : "Luis",
    age: 39, 
    adress : {
        adressLine : "9 impasse du petit verger",
        zipcode: "44220",
        ville : "Nantes"
    }
}

//  sans destructuration
// const nom = person.nom
// const age = person.age

// ES6
const {nom, age : myAge, adress, adress: {ville, zipcode, adressLine}, sport = "Football"} = person
// const {ville} = adress

function pirate() {
    return {
        name: "Luffy",
        bounty : "3MM"
    }
}

const {name, bounty} = pirate()
let kingOfPirate = ( ) => `The king of pirates is ${pirate.fName} ${pirate.lName}`
const zoro = {
    fName:"Zoro",
    lName:"Roronoa"
}

let kingOfPirate2 = ({fName, lName}) => `The king of pirates is ${fName} ${lName}`


function getHokage() {
    return null
}

const {a, b} = getHokage() || {}

const tableau = ["un", "deux", "trois"]
const [nb1, nb2, nb3] = tableau


// passage par reference
// typoes primitifs - stockage par value

const obj1 = {name: "Altair", nested : {
    c:"123456"
}}
const obj2 = obj1

const obj3 = Object.assign({}, obj1)
const obj4 = {...obj1, age:12, village: "Le Bourg"} // spread operateur

const tableau2 = ["un", "deux", "trois"]
const tableau3 = ["quattre", "cinq", "six"]

// fusionner 2 tableaux

const tableau4 = [...tableau2, ...tableau3]

const newTab = [...tableau2, "quatre"]

const [num, ...rest] = newTab
const person2  ={
    non: "Léon",
    age: 5,
    adress : {
        adressLine : "9 impasse du petit verger",
        zipcode: "44220",
        ville : "Nantes"
    }
}

const {nom: nom2, ...rest2} = person2;

function sum(...args) {
    
}
