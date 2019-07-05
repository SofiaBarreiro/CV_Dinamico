var person = new Person('Nombre', 'Apellido', 1111111, 'XXXXXXX', 'Ciudad', 'tumail@hotmail.com', 'argentina', 'tuFechadeNac');
var software = ['Javascript', 'Html', 'Css', 'Bootstrap','typescript'];
var idioma1 = new Languages('idioma1', 'nivel');
var idioma2 = new Languages('idioma2', 'nivel');
var education1 = new Education('Diploma', 'Universidad ', 'Periodos');
var education2 = new Education('Diploma2', 'Universidad2', 'Periodos');
var photo = '.\\foto\\fotoCV.jpg'
var linkedin = 'https://www.linkedin.com';
var github= 'https://www.github.com/SofiaBarreiro';
var job1= new Work('Lugar de Trabajo', 'nombre del puesto', 'tareas', 'periodo');
var job2= new Work('Lugar de Trabajo', 'nombre del puesto', 'tareas', 'periodo');





person.addElement(idioma1, person.languages);
person.addElement(idioma2, person.languages);


person.addElement(education1, person.education);
person.addElement(education2, person.education);


person.addElement(job1, person.jobs);
person.addElement(job2, person.jobs);

person.addLinks(linkedin, github);
