/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

var name = "Wesly";
var surname = "Lodewijks";
var streetname = "trinidadstraat";
var city = "purmerend";
var country = "nederland";

var age = 18;
var streetnumber = 18;
var balance = 13000;
var weight = 64;
var yearOfBirth = 1998;

var isSick = false;
var isCool = true;
var isMale = true;
var isBlond = false;
var isTired = true;


/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */

var friends = ["nino", "jordy", "gerwin", "kelvin"];
var weather = ["sun", "snow", "rain", "cloudy"];
var grades = ["6", "5", "7", "9"];

console.log(friends.length);
console.log(weather.length);
console.log(grades.length);



/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

var classes = [];
classes.push("SCT");
classes.push("FRO");

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

var food = ["apple", "peer", "orange", "lemon"];
food.splice(0, 1);
food.splice(2, 1);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

var mobiel = {
    merk:"Apple",
    model:"Iphone 6",
    value: 150
};

var laptop = {
    merk:"MSI",
    value: 1000
};

var OV = {
    holderName:"wesly",
    color:"yellow",
    balance:12.3
}

var wallet = {
    color:"black",
    balance:75,
    material:"leather"
}

var girlfriend = {
    age:16,
    name:"samantha",

}

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

function Multiply(value1, value2){
    var answer = value1 * value2;
    return answer;
}
var answer = Multiply(3, 5);
console.log(answer);

function MonthsOnEarth(jaren, maanden) {
    var tijd = (jaren * 12) + maanden;
    return tijd;
}
var tijd = MonthsOnEarth(18, 7);
console.log(tijd);

function Difrence(value1, value2){
    var answer2 = value1 - value2;
    return answer2;
};
var answer2 = Difrence(20, 12);
console.log(answer2);

function Square(number) {
    var uitkomst = number * number;
    return uitkomst;
}

var uitkomst = Square(6);
console.log(uitkomst);


/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function Person(Firstname, Lastname){
    var person = {
        fisrtname: Firstname,
        lastname: Lastname
    }
    return person;
}
console.log(Person("wesly", "lodewijks"));

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

var student = {
    naam: "wesly",
    leeftijd: 18,
    showName: function(){
        console.log(student)
}
}
console.log(student.showName())



/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log(
    'Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    { array : false, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */

  var autos = ["toyota", "ford", "fiat"];

  console.log(autos.random());

/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */

    var langeTekst = "Dit is die lange tekst waar bij ik ik ik het zelfde woord woord moet uh uh zeggen uhhh.";

    console.log(langeTekst.replaceAll("ik","doei"));
    console.log(langeTekst.replaceAll("uh","guido"));

/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?',
            'jouw antwoord');
