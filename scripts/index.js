

window.onload = function MakeCV() {

    var table = document.createElement('table');
    divTable = document.getElementById('divTable');
    divTable.appendChild(table);
    addLinks();

    addHeader(table, person, photo);

    addTittle('Datos Personales', table);
    addPersonalData(table, 'Email:', person.email);
    addPersonalData(table, 'Domicilio:', person.adress);
    addPersonalData(table, 'Localidad:', person.city);
    addPersonalData(table, 'Teléfono:', person.phone);

    addTittle('Conocimientos', table);

    addSoftware(software, table);

    addTittle('Idiomas', table);

    addLanguages(table);

    addTittle('Estudios', table);

    addEducation(table);

    addTittle('Experiencia', table);

    addWorkExperience(table);

}

function addHeader(table, person, photo) {

    var row = document.createElement('th');
    row.setAttribute('colspan', 15);;


    var col1 = document.createElement('td');
    col1.setAttribute('id', 'nameTitle');

    col1.setAttribute('rowspan', 2);

    var col2 = document.createElement('td');
    col2.setAttribute('rowspan', 8);
    var text = document.createTextNode(person.last_name + " " + person.first_name);
    var img = document.createElement('img');
    img.setAttribute('id', 'ImgPerfil');
    img.setAttribute('src', photo);




    col1.appendChild(text);
    col2.appendChild(img);
    row.appendChild(col1);
    row.appendChild(col2);
    table.appendChild(row);



}


function addTittle(text, table) {

    var row = document.createElement('tr');
    row.setAttribute('id', 'title');
    var col = document.createElement('td');
    col.setAttribute('colspan', 18);
    var PD = document.createTextNode(text);
    col.appendChild(PD);
    row.appendChild(col);
    table.appendChild(row);

}





function addPersonalData(table, text, data) {


    var row1 = document.createElement('tr');
    // row1.setAttribute('colspan', '4');


    for (var j = 0; j < 7; j++) {

        var col1 = document.createElement('td');
        col1.setAttribute('colspan', '2');
        col1.setAttribute('class', 'columData');

        if (j == 0) {
            var text2 = document.createTextNode(text)
        } else {
            if (j == 1) {
                col1.setAttribute('colspan', '4');

                var text2 = document.createTextNode(data);
            }
            else {
                var text2 = document.createTextNode('');
            }
        }

        col1.appendChild(text2);
        row1.appendChild(col1);
        table.appendChild(row1);


    }

}
function addWorkExperience(table) {



    for (var e in person.jobs) {

        

        for (var i = 0; i < 12; i++) {
            var row = document.createElement('tr');
            row.setAttribute('colspan', '10');
            
            for (var j = 0; j < 5; j++) {
                var col = document.createElement('td');
                col.setAttribute('colspan', 4);
                col.setAttribute('class', 'columData');
                switch (i) {
                    case 0:

                        if (j == 0) {
                            var text2 = document.createTextNode(person.jobs[e].periodOfTime);
                        } else {
                            if (j == 1) {
                                var text2 = document.createTextNode(person.jobs[e].jobOccupied);
                            }
                            else {
                                var text2 = document.createTextNode('');
                            }
                        }
                        break;
                    case 1:
                        if (j == 0) {
                            var text2 = document.createTextNode('');
                        } else {
                            if (j == 1) {
                                var text2 = document.createTextNode(person.jobs[e].nameOfCompany);
                            }
                            else {
                                var text2 = document.createTextNode('');
                            }
                        }

                        break;
                    case 2:
                        if (j == 0) {
                            var text2 = document.createTextNode('');
                        } else {
                            if (j == 1) {
                                var text2 = document.createTextNode(person.jobs[e].task);
                            }
                            else {
                                var text2 = document.createTextNode('');

                            }
                        }
                        break;
                    default: 
                    var text2 = document.createTextNode('');

                    break;

                }

                col.appendChild(text2);
                row.appendChild(col);
                table.appendChild(row);

            }

        }

    }


}


function addEducation(table) {


    for (var e in person.education) {

        for (var i = 0; i < 12; i++) {


            var row = document.createElement('tr');
            // row.setAttribute('colspan', '10');
            for (var j = 0; j < 6; j++) {
                var col = document.createElement('td');
                col.setAttribute('colspan', '4');
                col.setAttribute('class', 'columData');


                switch (i) {
                    case 0:

                        if (j == 0) {
                            var text2 = document.createTextNode(person.education[e].years);

                        } else {
                            if (j == 1) {
                                var text2 = document.createTextNode(person.education[e].diploma);
                                // col.setAttribute('colspan', '2');

                            }
                            else {
                                var text2 = document.createTextNode('');
                            }
                        }


                        break;
                    case 1:
                        if (j == 0) {
                            var text2 = document.createTextNode('');
                        } else {
                            if (j == 1) {
                                var text2 = document.createTextNode(person.education[e].institute);
                                // col.setAttribute('colspan', '2');
                            }
                            else {
                                var text2 = document.createTextNode('');
                            }
                        }
                        break;
                    default:
                        var text2 = document.createTextNode('');

                        break;

                }

                // col.setAttribute('colspan', '3');

                col.appendChild(text2);
                row.appendChild(col);
                table.appendChild(row);

            }

        }

    }


}


function addSoftware(software, table) {

    var row = document.createElement('tr');
    var col1 = document.createElement('td');
    col1.setAttribute('colspan', '4');
    // col1.setAttribute('width', '230');

    var text1 = document.createTextNode('Poseo conocimientos en: ');

    var col2 = document.createElement('td');
    col2.setAttribute('colspan', '11');

    for (var i = 0; i < software.length; i++) {

        if (i < (software.length - 1)) {
            var textNode = document.createTextNode(software[i] + ", ");

        } else {

            var textNode = document.createTextNode(software[i] + ".");

        }

        col2.appendChild(textNode);

    }

    col1.appendChild(text1);
    row.appendChild(col1);
    row.appendChild(col2);
    table.appendChild(row);

}


function addLinks() {

    var github = document.getElementById('github');

    var linkedin = document.getElementById('linkedin');

    github.setAttribute('href', person.github);
    linkedin.setAttribute('href', person.linkedin);

}


function addLanguages(table) {


    for (var e in person.languages) {


        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        col1.setAttribute('colspan', '2');
        // col1.setAttribute('width', '230');

        var text1 = document.createTextNode(person.languages[e].language);

        var col2 = document.createElement('td');
        col2.setAttribute('colspan', '22');


        var textNode = document.createTextNode(person.languages[e].level);
        col2.appendChild(textNode);


        col1.appendChild(text1);
        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);


    }


}

