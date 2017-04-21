// Extensiones permitidas
var type = ['png', 'jpg', 'jpeg'];

// Extraemos los datos del archivo
var data = function (file)
{
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