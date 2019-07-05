class Person{


    first_name: string;
    last_name: string;
    adress: string;
    phone: number;
    city: string;
    email: string;
    nationality: string;
    age: string;
    birth_date: string;

    linkedin: string;
    github: string;

    jobs: Array<object>;
    education : Array<object>;
    languages: Array<object>;


    constructor(first_name: string, last_name: string, phone: number, adress: string, city: string, email: string, nationality: string, birth_date: string) {

        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.adress = adress;
        this.city = city;
        this.email = email;
        this.nationality = nationality;
        this.birth_date = birth_date;

        this.jobs = new Array<object>();
        this.languages = new Array<object>();
        this.education = new Array<object>();


    }

    addAge(birth_date: string) {


        var today = new Date();

        var birthdate = new Date(birth_date);
        var age = today.getFullYear() - birthdate.getFullYear();
        var m = birthdate.getMonth() - today.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        return age;

    }


    addLinks(linkedin: string, github: string) {

        this.linkedin = linkedin;
        this.github = github;

    }


    addElement(newElement:object, typeOfElement:Array<object>){

        if(newElement != null){

            typeOfElement.push(newElement);

        }

    }




    
}



class Work{

    nameOfCompany: string;
    jobOccupied: string;
    task: string;
    periodOfTime: string;


    constructor(nameOfCompany: string, jobOccupied: string, task: string, periodOfTime: string) {
        this.nameOfCompany = nameOfCompany;
        this.jobOccupied = jobOccupied;
        this.task = task;
        this.periodOfTime = periodOfTime;

    }


}



class Education{

    diploma: string;
    institute: string;
    years: string;
    

    constructor(diploma:string, institute:string, years:string) {

        this.diploma = diploma;
        this.institute = institute;
        this.years = years;
    }

    
}

class Languages{

    language:string;
    level:string;
    constructor(language: string, level:string) {
        this.language = language;
        this.level = level;
    }



}

