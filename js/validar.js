function validar() {
	var nombre, email, mensaje, expresion;
	nombre = document.getElementById("nombre").value;
	email = document.getElementById("email").value;
	mensaje = document.getElementById("mensaje").value;

	expresion = /\w+@+\w+\.+[a-z]/; 	

/* expresion regular --> evaluo la cadena de caracteres para saber si es el formato de email
texto123@texto123.texto
\w texto alfanumerico , [a-z] caracteres de la A a la Z */

	if (nombre === "" || email === "" || mensaje === "") {
		alert("Todos los campos son obligatorios.");
		return false;
	}
	else if (nombre.length>30) {
		alert("El nombre es muy largo");
		return false;
	}
	else if (email.length>100) {
		alert("El email es muy largo");
		return false;
	}
	else if (!expresion.test(email)) {
		alert("El email no es válido");
		return false;
	}
}