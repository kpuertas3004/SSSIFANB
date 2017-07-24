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
		this.nropersona = 0;
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
		this.colorpiel = "";
		this.colorojos = "";
		this.colorcabello = "";
		this.estatura = "";
		this.senaParticular = "";
		this.gruposanguineo = "";
	}
}

class Correo{
	constructor(){
		this.principal = "";
		this.alternativo = "";
		this.institucional = "";
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
		this.movil = "";
		this.domiciliario = "";
		this.emergencia = "";
	}
}


class Direccion{
	constructor(){
		this.tipo = 0;
		this.estado = "";
		this.ciudad = "";
		this.municipio = "";
		this.parroquia = "";
		this.calleavenida = "";
		this.casa = "";
		this.apartamento = "";
		this.numero = 0;


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

class DatoFinanciero{
	constructor(){
		this.tipo = "";
		this.institucion = "";
		this.cuenta = "";
	}
}

class Persona{
	constructor(){
		this.DatoBasico = new DatoBasico();
		this.CuentaBancaria = new CuentaBancaria();
		this.DatoFisico = new DatoFisico();
		this.Correo = new Correo();
		this.DatoFisionomico = new DatoFisionomico();
		this.Direccion = [];
		this.DatoFinanciero = [];
		this.Telefono = new Telefono();
		this.PartidaNacimiento = new PartidaNacimiento();
		this.Defuncion = new Defuncion();
		this.DocumentoCivil = new DocumentoCivil();
		this.RedSocial = new RedSocial();
		this.urlFoto = "1";
		this.urlHuella = "2";
		this.urlFirma = "3";
	}
}

class PartidaNacimiento{
	constructor(){
		this.registro = "";
		this.ano = "";
		this.acta = "";
		this.folio = "";
		this.libro = "";
	}
}

class Defuncion{
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
		this.id = "";
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
		this.fresuelto = "";
		this.nresuelto = 0;
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
		var fingreso = new Date(Util.ConvertirFechaUnix($("#txtfechagraduacion").val())).toISOString();
		var fnacimiento = new Date(Util.ConvertirFechaUnix($("#txtnacimiento").val())).toISOString();
		var fresuelto = new Date(Util.ConvertirFechaUnix($("#txtfechagraduacion").val())).toISOString();

		this.id = $("#txtcedula").val();
		this.Persona.DatoBasico.nacionalidad = "V";

		this.Persona.DatoBasico.cedula = $("#txtcedula").val();
		this.Persona.DatoBasico.nombreprimero = $("#txtnombre").val().toUpperCase();
		this.Persona.DatoBasico.apellidoprimero = $("#txtapellido").val().toUpperCase();
		this.Persona.DatoBasico.fechanacimiento = fnacimiento;
		this.Persona.DatoBasico.sexo = $("#cmbsexo option:selected").val();
		this.Persona.DatoBasico.estadocivil = $("#cmbedocivil").val();
		this.fingreso = fingreso;
		this.fascenso = fingreso;
		this.fresuelto = fresuelto;
		this.nresuelto = $("#txtnresuelto").val().toUpperCase()	;
		this.posicion = parseInt($("#txtposicion").val());
		this.situacion = $("#cmbsituacion option:selected").val();
		this.categoria = $("#cmbcategoria option:selected").val();
		this.clase = $("#cmbclase option:selected").val();
		this.Componente.descripcion = $("#cmbcomponente option:selected").text();
		this.Componente.abreviatura = $("#cmbcomponente option:selected").val();
		this.Grado.descripcion = $("#cmbgrado option:selected").text();
		this.Grado.abreviatura = $("#cmbgrado option:selected").val();
		this.Persona.CuentaBancaria.banco = $("#cmbinstfinanciera option:selected").val();
		this.Persona.CuentaBancaria.tipocuenta = $("#cmbtipofinanciera option:selected").val();
		this.Persona.CuentaBancaria.numerocuenta = $("#txtnrocuenta").val();

		var dir = new Direccion();
		dir.tipo = 0;
		dir.estado = $("#cmbmestado option:selected").val();
		dir.municipio = $("#cmbmmunicipio option:selected").val();
		dir.parroquia = $("#cmbmparroquia option:selected").val();
		dir.ciudad = $("#cmbmciudad").val();
		dir.calleavenida = $("#txtmcalle").val().toUpperCase();
		dir.casa = $("#txtmcasa").val().toUpperCase();
		dir.apartamento = $("#txtmapto").val().toUpperCase();
		this.Persona.Direccion[0] = dir;

		var banco = new DatoFinanciero();
		banco.tipo = $("#cmbmtipofinanciera option:selected").val();
		banco.cuenta = $("#txtmnrocuenta").val();
		banco.institucion = $("#cmbminstfinanciera option:selected").val();
		this.Persona.DatoFinanciero[0] = banco;

		this.Persona.Correo.principal = $("#txtmcorreo").val().toUpperCase();
		this.Persona.Telefono.domiciliario = $("#txtmtelefono").val();
		this.Persona.Telefono.movil = $("#txtmcelular").val();
		this.Persona.PartidaNacimiento.registro= $("#txtpregistrocivil").val();
		this.Persona.PartidaNacimiento.ano = $("#txtpano").val();
		this.Persona.PartidaNacimiento.acta = $("#txtpacta").val();
		this.Persona.PartidaNacimiento.folio = $("#txtpfolio").val();
		this.Persona.PartidaNacimiento.libro = $("#txtplibro").val();
		this.Persona.DatoFisico.peso = $("#txtmpeso").val();
		this.Persona.DatoFisico.talla = $("#txtmtalla").val();
		this.Persona.DatoFisionomico.colorpiel = $("#cmbmpiel option:selected").val();
		this.Persona.DatoFisionomico.colorojos = $("#cmbmojos option:selected").val();
		this.Persona.DatoFisionomico.colorcabello = $("#cmbmcolorcabello option:selected").val();
		this.Persona.DatoFisionomico.estatura = parseFloat($("#txtmestatura").val());
		this.Persona.DatoFisionomico.senaParticular = $("#txtmsenaparticular").val().toUpperCase();
		this.Persona.DatoFisionomico.gruposanguineo = $("#txtmgruposanguineo").val().toUpperCase();
		//this.Grado.abreviatura = $("#cmbgrado option:selected").val();
		this.Persona.RedSocial.twitter = $("#txtmtwitter").val().toUpperCase();
		this.Persona.RedSocial.facebook = $("#txtmfacebook").val().toUpperCase();
		this.Persona.RedSocial.instagram = $("#txtminstagran").val().toUpperCase();
		this.Persona.RedSocial.linkedin = $("#txtmlinkedin").val().toUpperCase();
		//this.Tim.huella = $('#_imghuella').val();
		//this.Tim.firma = $('#_imgfirma').val();
		/*this.Persona.DocumentoCivil.ActaMatrimonio.archivo = $('#_imgmatrimonio').val();
		this.Persona.DocumentoCivil.ActaMatrimonio.registrocivil = $('#txtRegistroCivilM').val();
		this.Persona.DocumentoCivil.ActaMatrimonio.ano = $('#txtAnoM').val();
		this.Persona.DocumentoCivil.ActaMatrimonio.acta = $('#txtNumeroActaM').val();
		this.Persona.DocumentoCivil.ActaMatrimonio.folio = $('#txtNumeroFolioM').val();
		this.Persona.DocumentoCivil.ActaMatrimonio.libro = $('#txtLibroM').val();
		//this.Persona.DocumentoCivil.libro = $('#txtRegistroCivilD').val();
		this.Persona.DocumentoCivil.ActaDivorcio.archivo = $('#_imgdivorcio').val();
		this.Persona.DocumentoCivil.ActaDivorcio.tribunal = $('#txttribunalD').val();
		this.Persona.DocumentoCivil.ActaDivorcio.numerosentencia = $('#txtnumerosentenciaD').val();
		this.Persona.DocumentoCivil.ActaDivorcio.fechasentencia = $('#txtfechasentenciaD').val();
		this.Persona.DocumentoCivil.CartaSolteria.archivo = $('#_imgsolteria').val();
		this.Persona.DocumentoCivil.CartaSolteria.registrocivil = $('#txtRegistroCivilS').val();
		this.Persona.DocumentoCivil.CartaSolteria.fecha = $('#txtFechaS').val();
		this.Persona.DocumentoCivil.ConstanciaViudez.archivo = $('#_imgviudez').val();
		this.Persona.DocumentoCivil.ConstanciaViudez.registrocivil = $('#txtRegistroCivilV').val();
		this.Persona.DocumentoCivil.ConstanciaViudez.fecha = $('#txtFechaV').val();
		this.Persona.PartidaNacimiento.registrocivil= $("#txtpregistrocivil").val();
		this.Persona.PartidaNacimiento.ano = $("#txtpano").val();
		this.Persona.PartidaNacimiento.acta = $("#txtpacta").val();
		this.Persona.PartidaNacimiento.folio = $("#txtpfolio").val();
		this.Persona.PartidaNacimiento.libro = $("#txtplibro").val();*/
		//console.log(this);
		return this;

	}
	Salvar(){
		$("#_bxFamiliar").show();
    $("#_bxFamiliarTarjeta").show();
    $("#_btnConstancia").show();
    $("#_btnTIM").show();
    $("#_btnModificar").show();
    $("#_btnSavlvar").hide();
    CargarAPI(Conn.URL + "militar/crud" , "POST", this.Obtener());
	}
	Actualizar(){
		$("#_bxFamiliar").show();
    $("#_bxFamiliarTarjeta").show();
    $("#_btnConstancia").show();
    $("#_btnTIM").show();
    $("#_btnModificar").show();
    $("#_btnSavlvar").hide();
    CargarAPI(Conn.URL + "militar/crud" , "PUT", this.Obtener());
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
	familiar.Persona.Direccion.calleavenida = $("#txtcallef").val();
	familiar.Persona.Direccion.casa = $("#txtcasaf").val();
	familiar.Persona.Direccion.apartamento = $("#txtaptof").val();
	familiar.Persona.Direccion.telefonofijo = $("#txttelefonof").val();
	familiar.Persona.Direccion.telefonomovil = $("#txtcelularf").val();
	familiar.Persona.Direccion.correo = $("#txtcorreof").val();
	familiar.Persona.PartidaNacimiento.registrocivil= $("#txtpregistrocivilf").val();
	familiar.Persona.PartidaNacimiento.ano = $("#txtpanof").val();
	familiar.Persona.PartidaNacimiento.acta = $("#txtpactaf").val();
	familiar.Persona.PartidaNacimiento.folio = $("#txtpfoliof").val();
	familiar.Persona.PartidaNacimiento.libro = $("#txtplibrof").val();
	familiar.Persona.DatoFisico.peso = $("#txtpesof").val();
	familiar.Persona.DatoFisico.talla = $("#txttallaf").val();
	familiar.Persona.DatoFisionomico.coloropiel = $("#cmbpielf").val();
	familiar.Persona.DatoFisionomico.colorojos = $("#cmbojosf").val();
	familiar.Persona.DatoFisionomico.colorcabello = $("#cmbcolorcabellof").val();
	familiar.Persona.DatoFisionomico.estatura = $("#txtestaturaf").val();
	familiar.Persona.DatoFisionomico.senaParticular = $("#txtsenaparticularf").val();
	familiar.Persona.DatoFisionomico.gruposanguineo = $("#txtgruposanguineof").val();
	familiar.Persona.RedSocial.twitter = $("#txttwitterf").val();
	familiar.Persona.RedSocial.facebook = $("#txtfacebookf").val();
	familiar.Persona.RedSocial.instagram = $("#txtinstagranf").val();
	familiar.Persona.RedSocial.linkedin = $("#txtlinkedinf").val();
	//familiar.Carnet.huella = $('#_imghuellaf').val();
	//familiar.Carnet.firma = $('#_imgfirmaf').val();

	console.log(familiar);
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
