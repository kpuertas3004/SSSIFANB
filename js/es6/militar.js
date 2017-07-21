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

class DocumentoCivil{
	constructor(){
		this.archivo = "";
	}

	ActaMatrimonio(){
		this.registrocivil = "";
		this.ano = "";
		this.acta = "";
		this.folio = "";
		this.libro = "";
		this.archivo = "";	
		return this;	
	}

	ActaDivorcio(){
		this.tribunal = "";
		this.numerosentencia = "";
		this.fechasentencia = "";
		this.archivo = "";
		return this;	
	}

	CartaSolteria(){
		this.registrocivil = "";
		this.fecha = "";
		this.archivo = "";
		return this;	
	}

	ConstanciaViudez(){
		this.registrocivil = "";
		this.fecha = "";
		this.archivo = "";
		return this;	
	}

	ActaDefuncion(){
		this.registrocivil = "";
		this.fecha = "";
		this.archivo = "";
		return this;	
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
		this.Persona = "" ;//new Persona();
		this.parentesco = "";
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
		this.firma = "";
		this.huella = "";
	}
}


class Componente{
	constructor(){
		this.nombre = "";
		this.descripcion = "";
		this.abreviatura = "";
	}

GenerarComponente(){
		let abreviatura= "";
		 switch(this.abreviatura) {
		    case "EJ":
		     	descripcion ="EJÉRCITO BOLIVARIANO";
		     	nombre ="EJÉRCITO";
		        break;
		    case "AV":
		    	descripcion ="AVIACION MILITAR BOLIVARIANA";
		    	nombre ="AVIACION";
		        break;
		    case "GN":
		    	descripcion ="GUARDIA NACIONAL BOLIVARIANA";
		    	nombre ="GUARDIA NACIONAL";
		        break;
		    case "AR":
		    	descripcion ="ARMADA BOLIVARIANA";
		    	nombre ="ARMADA";
		        break;
		    default:
		        descripcion = "";
		        break;
		}
		return abreviatura;
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
		this.DocumentoCivil = new DocumentoCivil();
		this.RedSocial = new RedSocial();
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
		this.tipodato = 0;
		this.Persona = new Persona();
		this.categoria = "";
		this.situacion = "";
		this.clase = "";
		this.fingreso = "";
		this.fascenso = "";
		this.areconocido = 0;
		this.mreconocido = 0;
		this.dreconocido = 0;
		this.posicion = 0;
		this.descripcionhistorica = "";
		this.Componente = new Componente();
		this.Grado = new Grado();
//		this.Tim = new Tim();
//		this.Familiar = new Familiar();
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


function ObtenerFamiliar(){
	
	let familiar = new Familiar();
	familiar.Persona.DatoBasico.cedula = $("#txtcedulaf").val();
	familiar.Persona.DatoBasico.fechanacimiento = $("#txtnacimientof").val();
	familiar.Persona.DatoBasico.sexo = $("#cmbsexof").val();
	familiar.Persona.DatoBasico.nombreprimero = $("#txtnombref").val();
	familiar.Persona.DatoBasico.apellidoprimero = $("#txtapellidof").val();
	familiar.Persona.DatoBasico.estadocivil = $("#cmbedocivilf").val();
	familiar.parentesco = $("#cmbparentescof").val();
	familiar.condicion = $("#cmbcondicionf").val();
	familiar.estudia = $("#cmbestudiaf").val();
	familiar.Persona.Direccion.estado = $("#cmbestadof").val();
	familiar.Persona.Direccion.municipio = $("#cmbmunicipiof").val();
	familiar.Persona.Direccion.parroquia = $("#cmbparroquiaf").val();
	familiar.Persona.Direccion.ciudad = $("#cmbciudadf").val();
	familiar.Persona.Direccion.calleavenida = $("#txtmcallef").val();
	familiar.Persona.Direccion.casa = $("#txtmcasaf").val();
	familiar.Persona.Direccion.apartamento = $("#txtmaptof").val();
	familiar.Persona.Direccion.telefonofijo = $("#txtmtelefonof").val();
	familiar.Persona.Direccion.telefonomovil = $("#txtmcelularf").val();
	familiar.Persona.Direccion.correo = $("#txtmcorreof").val();
	familiar.Persona.PartidaNacimiento.registrocivil= $("#txtpregistrocivilf").val();
	familiar.Persona.PartidaNacimiento.ano = $("#txtpanof").val();
	familiar.Persona.PartidaNacimiento.acta = $("#txtpactaf").val();
	familiar.Persona.PartidaNacimiento.folio = $("#txtpfoliof").val();
	familiar.Persona.PartidaNacimiento.libro = $("#txtplibrof").val();
	familiar.Persona.DatoFisico.peso = $("#txtmpesof").val();
	familiar.Persona.DatoFisico.talla = $("#txtmtallaf").val();
	familiar.Persona.DatoFisionomico.coloropiel = $("#cmbmpielf").val();
	familiar.Persona.DatoFisionomico.colorojos = $("#cmbmojosf").val();
	familiar.Persona.DatoFisionomico.colorcabello = $("#cmbmcolorcabellof").val();
	familiar.Persona.DatoFisionomico.estatura = $("#txtmestaturaf").val();
	familiar.Persona.DatoFisionomico.senaParticular = $("#txtmsenaparticularf").val();
	familiar.Persona.DatoFisionomico.gruposanguineo = $("#txtmgruposanguineof").val();
	familiar.Persona.RedSocial.twitter = $("#txtmtwitterf").val();
	familiar.Persona.RedSocial.facebook = $("#txtmfacebookf").val();
	familiar.Persona.RedSocial.instagram = $("#txtminstagranf").val();
	familiar.Persona.RedSocial.linkedin = $("#txtmlinkedinf").val();
	familiar.Carnet.huella = $('#_imghuellaf').val();
	familiar.Carnet.firma = $('#_imgfirmaf').val();

	console.log(familiar);
}


function ObtenerMilitar(){
	
	let militar = new Militar();
	militar.Persona.DatoBasico.cedula = $("#txtcedula").val();
	militar.Persona.DatoBasico.nombreprimero = $("#txtnombre").val();
	militar.Persona.DatoBasico.apellidoprimero = $("#txtapellido").val();
	militar.Persona.DatoBasico.fechanacimiento = new Date($("#txtnacimiento").val());
	militar.Persona.DatoBasico.sexo = $("#cmbsexo option:selected").val();
	militar.Persona.DatoBasico.estadocivil = $("#cmbedocivil").val();
	militar.fingreso = new Date($("#txtfechagraduacion").val());
	militar.fascenso = new Date($("#txtfechagraduacion").val());
	militar.situacion = $("#cmbsituacion option:selected").val();
	militar.categoria = $("#cmbcategoria option:selected").val();
	militar.clase = $("#cmbclase option:selected").val();
	militar.Componente.descripcion = $("#cmbcomponente option:selected").text();
	militar.Componente.abreviatura = $("#cmbcomponente option:selected").val();
	militar.Grado.descripcion = $("#cmbgrado option:selected").text();
	militar.Grado.abreviatura = $("#cmbgrado option:selected").val();
	militar.Persona.CuentaBancaria.banco = $("#cmbinstfinanciera option:selected").val();
	militar.Persona.CuentaBancaria.tipocuenta = $("#cmbtipofinanciera option:selected").val();
	militar.Persona.CuentaBancaria.numerocuenta = $("#txtnrocuenta").val();
	militar.Persona.Direccion.estado = $("#cmbmestado option:selected").val();
	militar.Persona.Direccion.municipio = $("#cmbmmunicipio option:selected").val();
	militar.Persona.Direccion.parroquia = $("#cmbmparroquia option:selected").val();
	militar.Persona.Direccion.sector = $("#txtmciudad").val();
	militar.Persona.Direccion.calleavenida = $("#txtmcalle").val();
	militar.Persona.Direccion.casa = $("#txtmcasa").val();
	militar.Persona.Direccion.apartamento = $("#txtmapto").val();
	militar.Persona.Direccion.telefonofijo = $("#txtmtelefono").val();
	militar.Persona.Direccion.telefonomovil = $("#txtmcelular").val();
	militar.Persona.Direccion.correo = $("#txtmcorreo").val();
	/*militar.Persona.PartidaNacimiento.registrocivil= $("#txtpregistrocivil").val();
	militar.Persona.PartidaNacimiento.ano = $("#txtpano").val();
	militar.Persona.PartidaNacimiento.acta = $("#txtpacta").val();
	militar.Persona.PartidaNacimiento.folio = $("#txtpfolio").val();
	militar.Persona.PartidaNacimiento.libro = $("#txtplibro").val();*/
	militar.Persona.DatoFisico.peso = $("#txtmpeso").val();
	militar.Persona.DatoFisico.talla = $("#txtmtalla").val();
	militar.Persona.DatoFisionomico.coloropiel = $("#cmbmpiel option:selected").val();
	militar.Persona.DatoFisionomico.colorojos = $("#cmbmojos option:selected").val();
	militar.Persona.DatoFisionomico.colorcabello = $("#cmbmcolorcabello option:selected").val();
	militar.Persona.DatoFisionomico.estatura = $("#txtmestatura").val();
	militar.Persona.DatoFisionomico.senaParticular = $("#txtmsenaparticular").val();
	militar.Persona.DatoFisionomico.gruposanguineo = $("#txtmgruposanguineo").val();
	//militar.Grado.abreviatura = $("#cmbgrado option:selected").val();
	militar.Persona.RedSocial.twitter = $("#txtmtwitter").val();
	militar.Persona.RedSocial.facebook = $("#txtmfacebook").val();
	militar.Persona.RedSocial.instagram = $("#txtminstagran").val();
	militar.Persona.RedSocial.linkedin = $("#txtmlinkedin").val();
	//militar.Tim.huella = $('#_imghuella').val();
	//militar.Tim.firma = $('#_imgfirma').val();
	/*militar.Persona.DocumentoCivil.ActaMatrimonio.archivo = $('#_imgmatrimonio').val();
	militar.Persona.DocumentoCivil.ActaMatrimonio.registrocivil = $('#txtRegistroCivilM').val();
	militar.Persona.DocumentoCivil.ActaMatrimonio.ano = $('#txtAnoM').val();
	militar.Persona.DocumentoCivil.ActaMatrimonio.acta = $('#txtNumeroActaM').val();
	militar.Persona.DocumentoCivil.ActaMatrimonio.folio = $('#txtNumeroFolioM').val();
	militar.Persona.DocumentoCivil.ActaMatrimonio.libro = $('#txtLibroM').val();
	//militar.Persona.DocumentoCivil.libro = $('#txtRegistroCivilD').val();
	militar.Persona.DocumentoCivil.ActaDivorcio.archivo = $('#_imgdivorcio').val();
	militar.Persona.DocumentoCivil.ActaDivorcio.tribunal = $('#txttribunalD').val();
	militar.Persona.DocumentoCivil.ActaDivorcio.numerosentencia = $('#txtnumerosentenciaD').val();
	militar.Persona.DocumentoCivil.ActaDivorcio.fechasentencia = $('#txtfechasentenciaD').val();
	militar.Persona.DocumentoCivil.CartaSolteria.archivo = $('#_imgsolteria').val();
	militar.Persona.DocumentoCivil.CartaSolteria.registrocivil = $('#txtRegistroCivilS').val();
	militar.Persona.DocumentoCivil.CartaSolteria.fecha = $('#txtFechaS').val();
	militar.Persona.DocumentoCivil.ConstanciaViudez.archivo = $('#_imgviudez').val();
	militar.Persona.DocumentoCivil.ConstanciaViudez.registrocivil = $('#txtRegistroCivilV').val();
	militar.Persona.DocumentoCivil.ConstanciaViudez.fecha = $('#txtFechaV').val();
	militar.Persona.PartidaNacimiento.registrocivil= $("#txtpregistrocivil").val();
	militar.Persona.PartidaNacimiento.ano = $("#txtpano").val();
	militar.Persona.PartidaNacimiento.acta = $("#txtpacta").val();
	militar.Persona.PartidaNacimiento.folio = $("#txtpfolio").val();
	militar.Persona.PartidaNacimiento.libro = $("#txtplibro").val();*/
	//console.log(militar);
	return militar;

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
