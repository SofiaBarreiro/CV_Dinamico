var Person = /** @class */ (function () {
    function Person(first_name, last_name, phone, adress, city, email, nationality, birth_date) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.adress = adress;
        this.city = city;
        this.email = email;
        this.nationality = nationality;
        this.birth_date = birth_date;
        this.jobs = new Array();
        this.languages = new Array();
        this.education = new Array();
    }
    Person.prototype.addAge = function (birth_date) {
        var today = new Date();
        var birthdate = new Date(birth_date);
        var age = today.getFullYear() - birthdate.getFullYear();
        var m = birthdate.getMonth() - today.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    };
    Person.prototype.addLinks = function (linkedin, github) {
        this.linkedin = linkedin;
        this.github = github;
    };
    Person.prototype.addElement = function (newElement, typeOfElement) {
        if (newElement != null) {
            typeOfElement.push(newElement);
        }
    };
    return Person;
}());
var Work = /** @class */ (function () {
    function Work(nameOfCompany, jobOccupied, task, periodOfTime) {
        this.nameOfCompany = nameOfCompany;
        this.jobOccupied = jobOccupied;
        this.task = task;
        this.periodOfTime = periodOfTime;
    }
    return Work;
}());
var Education = /** @class */ (function () {
    function Education(diploma, institute, years) {
        this.diploma = diploma;
        this.institute = institute;
        this.years = years;
    }
    return Education;
}());
var Languages = /** @class */ (function () {
    function Languages(language, level) {
        this.language = language;
        this.level = level;
    }
    return Languages;
}());
