/**
 Desarrollado por  :  Maria Elena Nuñez
 Correo            :  marielen936@gmail.com
 Modifcado    por  :
 Correo persona mod:
 Fecha Creacion    :  11-07-2017
 Fecha Modificacion:  11-07-2017
 Descripcion       :  Clases, metodos y funciones de Militares
*/
class DatoBasico{
	constructor(){
		this.cedula = "";
		this.nropersona = "";
		this.nacionalidad = "";
		this.nombreprimero = "";
		this.nombresegundo = "";
		this.apellidoprimero = "";
		this.apellidosegundo = "";
		this.fechanacimiento = "";
		this.fechadefuncion = "";
		this.nropasaporte = "";
		this.sexo = "";
		this.estadocivil = "";
	}

	NombreCompleto(){
		return this.nombreprimero + " " + this.nombresegundo;
	}

	ApellidoCompleto(){
		return this.apellidoprimero + " " + this.apellidosegundo;
	}

	NombreApellido(){
		return this.NombreCompleto() + " " + this.ApellidoCompleto();
	}

	Sexo(){
		return (this.sexo == "F")?"FEMENINO":"MASCULINO";
	}

	Nacionalidad(){
		let nacionalidad = "VENEZOLANA";
		if (this.nacionalidad == "E"){
			nacionalidad = "EXTRANJERA"
		}
		return nacionalidad;
	}

	GenerarEstadoCivil(){
		let estadocivil= "";
		 switch(this.estadocivil) {
		    case "C":
		     	estadocivil =(this.Persona.DatoBasico.sexo=="F")?"CASADA":"CASADO";
		        break;
		    case "D":
		    	estadocivil = (this.Persona.DatoBasico.sexo=="F")?"DIVORCIADA":"DIVORCIADO";
		        break;
		    case "S":
		    	estadocivil = (this.Persona.DatoBasico.sexo=="F")?"SOLTERA":"SOLTERO";
		        break;
		    case "V":
		    	estadocivil = (this.Persona.DatoBasico.sexo=="F")?"VIUDA":"VIUDO";
		        break;
		    default:
		        estadocivil = "";
		        break;
		}
		return estadocivil;
	}
}


class  DatoFisico{
	constructor(){
		this.peso = 0.0;
		this.talla = 0.0;
	}
}

class DatoFisionomico{
	constructor(){
		this.coloropiel = "";
		this.colorojos = "";
		this.colorcabello = "";
		this.estatura = "";
		this.senaParticular = "";
	}
}


class Correo{
	constructor(){
		this.correoprincipal = "";
		this.correoalternativo = "";
		this.correoinstitucional = "";
	}
}


class RedSocial{
	constructor(){
		this.twitter = "";
		this.facebook = "";
		this.instagram = "";
		this.linkedin = "";
	}
}

class Telefono{
	constructor(){
		this.telefonomovil = "";
		this.telefonodomiciliario = "";
		this.telefonoemergencia = "";
	}
}


class Direccion{
	constructor(){
		this.tipo = "";
		this.estado = "";
		this.municipio = "";
		this.parroquia = "";
		this.sector = "";
		this.calleavenida = "";
		this.casa = "";
		this.apartamento = "";
		this.numero = "";
	}
}

class Carnet{
	constructor(){
		this.idcarnet = "";
		this.tipo = "";
		this.condicion = "";
		this.serial = "";
		this.codigocomponente = "";
		this.fechacreacion = "";
		this.fechavencimiento = "";
		this.responsable = "";
		this.Componente = new Componente();
		this.Grado = new Grado();
	}
}


class Familiar{
	constructor(){
		this.Persona = new Persona();
		this.parentesco = "PD";
		this.esmilitar = "";
		this.condicion = "";
		this.estudia = "";
		this.beneficio = "";
		this.documento = "";
		this.documentopadre = "";
	}

	GenerarParentesco(){
		let parentesco= "";
		 switch(this.parentesco) {
		    case "PD":
		     	parentesco =(this.Persona.DatoBasico.sexo=="F")?"MADRE":"PADRE";
		        break;
		    case "HJ":
		    	parentesco = (this.Persona.DatoBasico.sexo=="F")?"HIJA":"HIJO";
		        break;
		    case "EA":
		    	parentesco = (this.Persona.DatoBasico.sexo=="F")?"ESPOSA":"ESPOSO";
		        break;
		    default:
		        parentesco = "";
		        break;
		}
		return parentesco;
	}

}


class Tim{
	constructor(){
		this.fechacreacion = "";
		this.fechavencimiento = "";
		this.Componente = new Componente();
		this.Grado = new Grado();
	}
}


class Componente{
	constructor(){
		this.nombre = "";
		this.descripcion = "";
		this.abreviatura = "";
	}
}


class Grado{
	constructor(){

		this.nombre = "";
		this.descripcion = "";
		this.abreviatura = "";
	}
}


class Persona{
	constructor(){
		this.DatoBasico = new DatoBasico();
		this.DatoFisionomico = new DatoFisionomico();
		this.Telefono = new Telefono();
		this.urlFoto = "1";
		this.urlHuella = "2";
		this.urlFirma = "3";
	}
}


class Militar{
	constructor(){
		this.tipodato = "";
		this.Persona = new Persona();
		this.categoria = "";
		this.situacion = "";
		this.clase = "";
		this.fechaingresocomponente = "2017-01-10";
		this.fechaascenso = "";
		this.anoreconocimiento = "";
		this.mesreconocido = "";
		this.diareconocido = "";
		this.posicion = "";
		this.descripcionhistorica = "";
		this.Componente = new Componente();
		this.Grado = new Grado();
		this.Tim = new Tim();
		this.Familiar = new Familiar();
		this.urlsimbolo = "";
		this.urlfirmaministro = "";
		this.urlpresidenteipsfa = "";
		this.urlfoto = "";
		this.urlhuella = "";
		this.urlfirma = "";
		this.urlcedula = "";
	}
}



function Obtener(){
	let militar = new Militar();
	console.log(JSON.stringify(militar.ObtenerFecha()));

}

$(function (){	
  if (sessionStorage.getItem('ipsfaToken') == undefined ){
		$(location).attr("href","index.html");
	}else{
		$("#_body").show();
	}
});

function CerrarSession(){
	sessionStorage.removeItem('ipsfaToken');
	$(location).attr("href","index.html");
}
