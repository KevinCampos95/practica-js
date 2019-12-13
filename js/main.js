$(document).ready(function(){

	const boton = $('input[type="submit"]');

	const users = [
		{
			usuario : "admin",
			password : "admin"
		},{
			usuario : "kevin",
			password : "1234"
		}
	];

	boton.click(function(e){

		e.preventDefault();

		let usuario = $("#usuario").val();
		let password = $("#password").val();
		let respuesta = inicioSesion(usuario,password);

		if(respuesta){
			window.location.replace("pagina1.html");
			alert("Usuario correcto");
		}else{
			alert("Usuario incorrecto");
		}
	});

	function inicioSesion(user,pass){
		let estado = false; 

		for(indice in users){
			if(users[indice].usuario == user && users[indice].password == pass){
			estado = true;
			}
		};
		
		return estado;
	};

});