/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 * 
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 * 
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
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
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
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
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
 */

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */

function Multiply(value1, value2){
    var answer = value1 * value2;
    return answer;
}

var answer = Multiply(3, 5);
console.log(answer);

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */

