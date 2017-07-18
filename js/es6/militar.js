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
		this.gruposanguineo = "";
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
		this.telefonofijo = "";
		this.telefonomovil = "";
		this.correo = "";

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
	Obtener(){
		return this;
	}
}


class Persona{
	constructor(){
		this.DatoBasico = new DatoBasico();
		this.CuentaBancaria = new CuentaBancaria();
		this.DatoFisico = new DatoFisico();
		this.DatoFisionomico = new DatoFisionomico();
		this.Direccion = new Direccion();
		this.Telefono = new Telefono();
		this.PartidaNacimiento = new PartidaNacimiento();
		this.urlFoto = "1";
		this.urlHuella = "2";
		this.urlFirma = "3";
	}
}

class PartidaNacimiento{
	constructor(){
		this.registrocivil = "";
		this.ano = "";
		this.acta = "";
		this.folio = "";
		this.libro = "";
	}
}

class Militar{
	constructor(){
		this.tipodato = "";
		this.Persona = new Persona();
		this.categoria = "";
		this.situacion = "";
		this.clase = "";
		this.fechagraduacion = "";
		this.fechaingresocomponente = "";
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
	Obtener(){
		return this;
	}
}

class CuentaBancaria{
	constructor(){
		this.banco = "";
		this.tipocuenta = "";
		this.numerocuenta = "";
	}
}


function ObtenerMilitar(){
	
	let militar = new Militar();
	militar.Persona.DatoBasico.cedula = $("#txtcedula").val();
	militar.Persona.DatoBasico.nombreprimero = $("#txtnombre").val();
	militar.Persona.DatoBasico.apellidoprimero = $("#txtapellido").val();
	militar.Persona.DatoBasico.fechanacimiento = $("#txtnacimiento").val();
	militar.Persona.DatoBasico.sexo = $("#cmbsexo").val();
	militar.Persona.DatoBasico.estadocivil = $("#cmbedocivil").val();
	militar.fechagraduacion = $("#txtfechagraduacion").val();
	militar.situacion = $("#cmbsituacion").val();
	militar.categoria = $("#cmbcategoria").val();
	militar.clase = $("#cmbclase").val();
	militar.Componente.descripcion = $("#cmbcomponente").text();
	militar.Componente.abreviatura = $("#cmbcomponente").val();
	militar.Grado.descripcion = $("#cmbgrado").text();
	militar.Grado.abreviatura = $("#cmbgrado").val();
	militar.Persona.CuentaBancaria.banco = $("#cmbinstfinanciera").val();
	militar.Persona.CuentaBancaria.tipocuenta = $("#cmbtipofinanciera").val();
	militar.Persona.CuentaBancaria.numerocuenta = $("#txtnrocuenta").val();
	militar.Persona.Direccion.estado = $("#cmbmestado").val();
	militar.Persona.Direccion.municipio = $("#cmbmmunicipio").val();
	militar.Persona.Direccion.parroquia = $("#cmbmparroquia").val();
	militar.Persona.Direccion.sector = $("#txtmciudad").val();
	militar.Persona.Direccion.calleavenida = $("#txtmcalle").val();
	militar.Persona.Direccion.casa = $("#txtmcasa").val();
	militar.Persona.Direccion.apartamento = $("#txtmapto").val();
	militar.Persona.Direccion.telefonofijo = $("#txtmtelefono").val();
	militar.Persona.Direccion.telefonomovil = $("#txtmcelular").val();
	militar.Persona.Direccion.correo = $("#txtmcorreo").val();
	militar.Persona.PartidaNacimiento.registrocivil= $("#txtpregistrocivil").val();
	militar.Persona.PartidaNacimiento.ano = $("#txtpano").val();
	militar.Persona.PartidaNacimiento.acta = $("#txtpacta").val();
	militar.Persona.PartidaNacimiento.folio = $("#txtpfolio").val();
	militar.Persona.PartidaNacimiento.libro = $("#txtplibro").val();
	militar.Persona.DatoFisico.peso = $("#txtmpeso").val();
	militar.Persona.DatoFisico.talla = $("#txtmtalla").val();
	militar.Persona.DatoFisionomico.coloropiel = $("#cmbmpiel").val();
	militar.Persona.DatoFisionomico.colorojos = $("#cmbmojos").val();
	militar.Persona.DatoFisionomico.colorcabello = $("#cmbmcolorcabello").val();
	militar.Persona.DatoFisionomico.estatura = $("#txtmestatura").val();
	militar.Persona.DatoFisionomico.senaParticular = $("#txtmsenaparticular").val();
	militar.Persona.DatoFisionomico.gruposanguineo = $("#txtmgruposanguineo").val();
	//militar.Grado.abreviatura = $("#cmbgrado option:selected").val();
	console.log(militar);


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
