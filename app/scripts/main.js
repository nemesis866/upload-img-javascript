// Extensiones permitidas
var type = ['png', 'jpg', 'jpeg'];

// Extraemos los datos del archivo
var data = function (file)
{
	'use strict';

	var result = [];

	// Verifiquemos que exista el archivo
   	if(file){
   		// Obtenemos el tamaño del archivo
       	var fileSize = Math.round(file.size * 100 / 1024) / 100;

       	// Obtenemos la extension y nombre del archivo
       	var temp = file.name.split('.');
       	var ext = temp[temp.length - 1];
       	var name = file.name.substring(0, file.name.length - (ext.length + 1));

       	result.push(fileSize, name, ext);

      	return result;
    }

    return null;	
};

// Accion a ejecutar con la imagen seleccionada
var selectedFile = function ()
{
	'use strict';

	// Desactivamos el boton submit
	document.getElementById('submit-img').disabled = true;
	// Obtenemos el contenido del input
	var selected = document.getElementById('img');
	// Obtenemos el archivo
	var file = selected.files[0];

	// Verifiquemos que exista el archivo
   	if(file){
   		// Obtenemos los datos del archivo
       	var temp = data(file);
       	var size = temp[0];
       	var name = temp[1];
       	var ext = temp[2];

       	// Verificamos la extension
       	for(var i = 0; i < type.length; i++){
       		// Verificamos la extension y el tamaño
       		if(type[i] === ext && size <= 10){
       			// Activamos el boton submit
				document.getElementById('submit-img').disabled = false;
       		}
       	}
    }
};

// Enviar el formulario
var formImg = document.getElementById('form-img') || 'form';
formImg.onsubmit = function (e){
	'use strict';
	// Evitamos el comportamiento por defecto
	e.preventDefault();

	var url = '/img/userid';
	// Obtenemos el contenido del formulario
	var formData = new FormData(formImg);

	// Manejadores de eventos
	var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.upload.addEventListener('loadstart', function() {
    	// Cuando empieza a cargar el archivo
    }, false);
    xmlHTTP.upload.addEventListener('progress', function() {
    	// Mientras el archivo este cargando
    }, false);
    xmlHTTP.addEventListener('load', function() {
    	// Cuando la transferencia esta completa
    }, false);
    xmlHTTP.addEventListener('error', function() {
    	// Cuando la transferencia falla
    }, false);
    xmlHTTP.addEventListener('abort', function() {
    	// Cuando la transferencia es cancelada
    }, false);
    xmlHTTP.open('POST', url, true);
    //xmlHTTP.setRequestHeader('book_id','10');
    xmlHTTP.send(formData);
};