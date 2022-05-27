function validar() {
	var nombre, telefono, direccion, pedido;
	nombre = document.getElementById("nombre").value;
	telefono = document.getElementById("telefono").value;
	direccion = document.getElementById("direccion").value;
	pedido = document.getElementById("pedido").value;
	
	if (nombre === "" || telefono === "" || direccion === "" || pedido === "") {
		alert("Todos los campos son obligatorios.");
		return false;
	}
	else if (nombre.length>30) {
		alert("El nombre es muy largo");
		return false;
	}
	else if (direccion.length>100) {
		alert("La dirección es muy larga");
		return false;
	}
	else if (isNaN(telefono)) {
		alert("El teléfono ingresado no es un número");
		return false;
	}
}