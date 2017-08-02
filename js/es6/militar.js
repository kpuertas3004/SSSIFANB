'use strict';
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

    ObtenerCabello(){
        var cad = "";
        switch (this.colorcabello){
            case "NE":cad = "NEGRO";break;
            case "BA":cad = "BLANCO";break;
            case "CA":cad = "CASTAÑO";break;
			default: cad = "********";break;
        }
        return cad;
    }

    ObtenerPiel(){
        var cad = "";
        switch (this.colorpiel){
			case "NE":cad = "NEGRA";break;
            case "BL":cad = "BLANCA";break;
            case "CA":cad = "CANELA";break;
            case "MO":cad = "MORENA";break;

            default: cad = "********";break;
        }
        return cad;
    }

    ObtenerOjo(){
        var cad = "";
        switch (this.colorojos){
            case "AM":cad = "ÁMBAR";break;
            case "AV":cad = "AVELLANA";break;
            case "CA":cad = "CASTAÑO";break;
            case "VE":cad = "VERDE";break;

            case "AZ":cad = "AZUL";break;
            case "GR":cad = "GRIS";break;
            case "NE":cad = "NEGRO";break;
            case "MA":cad = "MARRON";break;

            default: cad = "********";break;
        }
        return cad;
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
		this.estudia = 0;
		this.beneficio = 1;
		this.documento = 0;
		this.documentopadre = "";
	}
	GenerarParentesco(){
		var parentesco= "";
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
	Obtener(){
		this.documentopadre = $("#txtcedula").val();
		this.Persona.DatoBasico.cedula = $("#txtcedulaf").val();
		this.Persona.DatoBasico.fechanacimiento = $("#txtnacimientof").val();
		this.Persona.DatoBasico.sexo = $("#cmbsexof").val();
		this.Persona.DatoBasico.nombreprimero = $("#txtnombref").val();
		this.Persona.DatoBasico.apellidoprimero = $("#txtapellidof").val();
		this.Persona.DatoBasico.estadocivil = $("#cmbedocivilf  option:selected").val();
		this.parentesco = $("#cmbparentescof").val();
		this.condicion = $("#cmbcondicionf").val();
		this.estudia = $("#cmbestudiaf").val();
		this.esmilitar = $("#cmbmilitarf option:selected").val()==0?false:true;

		this.Persona.Direccion.estado = $("#cmbestadof option:selected").val();
		this.Persona.Direccion.municipio = $("#cmbmunicipiof  option:selected").val();
		this.Persona.Direccion.parroquia = $("#cmbparroquiaf  option:selected").val();
		this.Persona.Direccion.ciudad = $("#cmbciudadf  option:selected").val();
		this.Persona.Direccion.calleavenida = $("#txtcallef").val();
		this.Persona.Direccion.casa = $("#txtcasaf").val();
		this.Persona.Direccion.apartamento = $("#txtaptof").val();
		this.Persona.Direccion.telefonofijo = $("#txttelefonof").val();
		this.Persona.Direccion.telefonomovil = $("#txtcelularf").val();
		this.Persona.Direccion.correo = $("#txtcorreof").val();
		this.Persona.PartidaNacimiento.registrocivil= $("#txtpregistrocivilf").val();
		this.Persona.PartidaNacimiento.ano = $("#txtpanof").val();
		this.Persona.PartidaNacimiento.acta = $("#txtpactaf").val();
		this.Persona.PartidaNacimiento.folio = $("#txtpfoliof").val();
		this.Persona.PartidaNacimiento.libro = $("#txtplibrof").val();
		this.Persona.DatoFisico.peso = $("#txtpesof").val();
		this.Persona.DatoFisico.talla = $("#txttallaf").val();
		this.Persona.DatoFisionomico.colorpiel = $("#cmbpielf").val();
		this.Persona.DatoFisionomico.colorojos = $("#cmbojosf").val();
		this.Persona.DatoFisionomico.colorcabello = $("#cmbcolorcabellof").val();
		this.Persona.DatoFisionomico.estatura = $("#txtestaturaf").val();
		this.Persona.DatoFisionomico.senaParticular = $("#txtsenaparticularf").val();
		this.Persona.DatoFisionomico.gruposanguineo = $("#txtgruposanguineof").val();
		this.Persona.RedSocial.twitter = $("#txttwitterf").val();
		this.Persona.RedSocial.facebook = $("#txtfacebookf").val();
		this.Persona.RedSocial.instagram = $("#txtinstagranf").val();
		// this.Persona.RedSocial.linkedin = $("#txtlinkedinf").val();
		console.log(this);
	}
	Salvar(){
		this.Obtener()
    //CargarAPI(Conn.URL + "familiar/crud" , "POST", this.Obtener());
	}
	Actualizar(){
		//CargarAPI(Conn.URL + "familiar/crud" , "PUT", this.Obtener());


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
		this.urlFoto = "";
		this.urlHuella = "";
		this.urlFirma = "";
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

class Recibo{
    constructor(){
        this.id = "";
        this.motivo = "";
        this.numero = 0;
        this.canal = "";
        this.fecha = "";
        this.monto = 0.0;
    }


	Verificar(){
        //alert($("#cmbMotivoCarnet").val());
        if($("#cmbMotivoCarnet").val() == 'S'){
            $("#cmbMotivoCarnet").notify("Indique El motivo");
            return false;
        }
        if($("#txtcedula").val() == ''){
            $("#txtcedula").notify("Ingrese Cedula");
            return false;
        }
        if($("#txtnumeroC").val() == ''){
            $("#txtnumeroC").notify("Ingrese Numero de Cuenta");
            return false;
        }
        if($("#cmbminstfinancieraC").val() == 'S'){
            $("#cmbminstfinancieraC").notify("Indique Institucion");
            return false;
        }
        if($("#txtmfechaC").val() == ''){
            $("#txtmfechaC").notify("Indique fecha");
            return false;
        }
        if($("#txtmontoC").val() == ''){
            $("#txtmontoC").notify("Indique monto");
            return false;
        }
        return true;
	}


    Obtener(){
    	this.id = $("#txtcedula").val();
    	this.motivo = $("#cmbMotivoCarnet").val();
    	this.numero = $("#txtnumeroC").val();
    	this.canal = $("#cmbminstfinancieraC").val();
    	this.fecha = new Date(Util.ConvertirFechaUnix($("#txtmfechaC").val())).toISOString();
    	this.monto = parseFloat($("#txtmontoC").val());
    	return this;
	}

	Salvar(){

        CargarAPI(Conn.URL + "recibo/crud" , "POST", this.Obtener());
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
		this.urlsimbolo = "";
		this.urlfirmaministro = "";
		this.urlpresidenteipsfa = "";
		this.urlfoto = "";
		this.urlhuella = "";
		this.urlfirma = "";
		this.urlcedula = "";
		this.codigocomponente = "";
        this.numerohistoria = "";
	}
    Cargar(militar){

        this.id = militar.id;
        this.tipodato = militar.tipodatoo;

        this.Persona.DatoBasico = militar.Persona.DatoBasico;
        var DFis = militar.Persona.DatoFisionomico;


        this.Persona.DatoFisionomico.colorojos = DFis.colorojos;
        this.Persona.DatoFisionomico.colorpiel = DFis.colorpiel;
        this.Persona.DatoFisionomico.colorcabello = DFis.colorcabello;
        this.Persona.DatoFisionomico.estatura = DFis.estatura;
        this.Persona.DatoFisionomico.gruposanguineo = DFis.gruposanguineo;

        this.categoria = militar.categoria;
        this.situacion = militar.situacion;
        this.clase = militar.clase;
        this.fingreso = militar.fingreso ;
        this.fascenso = militar.fascenso;
        this.areconocido = militar.areconocido;
        this.mreconocido = militar.mreconocido;
        this.dreconocido = militar.dreconocido;
        this.posicion = militar.posicion ;
        this.fresuelto = militar.fresuelto;
        this.nresuelto = militar.nresuelto;
        this.descripcionhistorica = militar.descripcionhistorica;
        this.Componente.abreviatura = militar.Componente.abreviatura;
        this.Componente.descripcion = militar.Componente.descripcion;
        this.Grado.abreviatura = militar.Grado.abreviatura;
        this.Grado.descripcion = militar.Grado.descripcion;
        this.urlsimbolo = "";
        this.urlfirmaministro = "";
        this.urlpresidenteipsfa = "";
        this.urlfoto = "";
        this.urlhuella = "";
        this.urlfirma = "";
        this.urlcedula = "";
        this.codigocomponente = militar.codigocomponente;
        this.numerohistoria = militar.numerohistoria;
    }
	Obtener(){
		var fingreso = new Date(Util.ConvertirFechaUnix($("#txtfechagraduacion").val())).toISOString();
		var fnacimiento = new Date(Util.ConvertirFechaUnix($("#txtnacimiento").val())).toISOString();
		var fresuelto = new Date(Util.ConvertirFechaUnix($("#txtmfecharesuelto").val())).toISOString();

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
		this.Persona.DatoFisionomico.gruposanguineo = $("#cmbmgruposanguineo").val().toUpperCase();
		//this.Grado.abreviatura = $("#cmbgrado option:selected").val();


		this.Persona.RedSocial.twitter = $("#txtmtwitter").val().toUpperCase();
		this.Persona.RedSocial.facebook = $("#txtmfacebook").val().toUpperCase();
		this.Persona.RedSocial.instagram = $("#txtminstagran").val().toUpperCase();

        this.codigocomponente = $("#txtcodigocomponente").val();
        this.numerohistoria =   $("#txtnumhistoriaclinica").val();

		//this.Persona.RedSocial.linkedin = $("#txtmlinkedin").val().toUpperCase();
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
		console.log(this);
		return this;

	}

    ObtenerCategoria(){
        var cad = "";
        switch (this.categoria){
            case "EFE":cad = "EFECTIVO";break;
            case "ASI":cad = "ASIMILADO";break;

            default: cad = "********";break;
        }
        return cad;
    }



	Salvar(){
		$("#_bxFamiliar").show();
    $("#_bxFamiliarTarjeta").show();
    $("#_btnConstancia").show();
    $("#_btnTIM").show();
    $("#_btnModificar").show();
    $("#_btnSavlvar").hide();
		console.log(this.Obtener());
    CargarAPI(Conn.URL + "militar/crud" , "POST", this.Obtener());
	}
	Actualizar(){
		$("#_bxFamiliar").show();
    $("#_bxFamiliarTarjeta").show();
    $("#_btnConstancia").show();
    $("#_btnTIM").show();
    $("#_btnModificar").show();
    $("#_btnSavlvar").hide();
		//console.log(this.Obtener());
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
