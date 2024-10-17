// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email) {
    const emailToDomain = email.indexOf("@");
    return email.substring(emailToDomain + 1);
}

const domainName = getEmailDomain("n.eeken@novi-education.nl");
console.log(domainName);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

//Stappenplan:
// input = emailadres
// output = status van die persoon; medewerker, student of extern
// Stappenplan:
//1. argument (specifiek mailadres) komt via parameters de functie binnen.
//2. alles voor de @ moet eraf, domein gedeelte opslaan in variabele
//3. Variabele met domein naam nu vergelijken:
//    a. is het novi-education.nl dan student teruggeven
//    b. is het novi.nl dan medewerker teruggeven
//    a. is het anders dan extern teruggeven

function typeOfEmail(email) {
    const emailToDomain2 = email.indexOf("@");
    const domainName = email.substring(emailToDomain2 + 1);
    if (domainName === "novi.nl") {
        return "Medewerker";
    } else if (domainName === "novi-education.nl") {
        return "Student";
    } else {
        return "Extern";
    }
}

const typeUser = typeOfEmail("t.mellink@novi.nl");
console.log(typeUser);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

// SCHEMA
// 1. sla gegeven email op
// 2. check of er een . in voorkomt als allerlaatste karakter of een , . Zoja dan false loggen.
// 3. check of email een @ bevat. Zoja dan emailadres als true loggen. Zonee, dan false.

function checkEmailValidity(email) {
    if (email.lastIndexOf(".") === email.length - 1 || email.includes(",")) {
        return "false";
    } else if (email.includes("@")) {
        return "true";
    } else {
        return "false";
    }
}

const emailValide = checkEmailValidity("tessmellink@novi,nl");
console.log(emailValide);