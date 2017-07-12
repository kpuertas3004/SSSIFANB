/**
 Desarrollado por  :  Maria Elena Nuñez 
 Correo            :  marielen936@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos Basicos del Afiliado
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

/**
 Desarrollado por  :  Maria Elena Nuñez 
 Correo            :  marielen936@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos Fisicos del Afiliado
*/
class  DatoFisico{
	constructor(){
		this.peso = 0.0;
		this.talla = 0.0;
	}
}

/**
 Desarrollado por  :  Maria Elena Nuñez 
 Correo            :  marielen936@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos Fisionomicos del Afiliado
*/
class DatoFisionomico{
	constructor(){
		this.coloropiel = "";
		this.colorojos = "";
		this.colorcabello = "";
		this.estatura = "";
		this.senaParticular = "";
	}
}

/**
 Desarrollado por  :  Maria Elena Nuñez 
 Correo            :  marielen936@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos del Correl Electrónico del Afiliado
*/
class Correo{
	constructor(){
		this.correoprincipal = "";
		this.correoalternativo = "";
		this.correoinstitucional = "";
	}
}

/**
 Desarrollado por  :  Maria Elena Nuñez 
 Correo            :  marielen936@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Redes Sociales del Afiliado
 */
class RedSocial{
	constructor(){
		this.twitter = "";
		this.facebook = "";
		this.instagram = "";
		this.linkedin = "";
	}
}

/**
 Desarrollado por  :  Maria Elena Nuñez 
 Correo            :  marielen936@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Telefonos de Contacto del Afiliado
*/
class Telefono{
	constructor(){
		this.telefonomovil = "";
		this.telefonodomiciliario = "";
		this.telefonoemergencia = "";
	}
}

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Direccion Primaria del Afiliado
*/
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

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos del Carnet del Afiliado
*/
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

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos del Familiar
*/
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

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos del TIM del Afiliado
*/
class Tim{
	constructor(){
		this.fechacreacion = "";
		this.fechavencimiento = "";
		this.Componente = new Componente();
		this.Grado = new Grado();
	}
}

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Descripcion del Componente
*/
class Componente{
	constructor(){
		this.nombre = "";
		this.descripcion = "";
		this.abreviatura = "";
	}
}

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Descripcion del Grado
*/
class Grado{
	constructor(){

		this.nombre = "";
		this.descripcion = "";
		this.abreviatura = "";
	}
}

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos Basicos de Persona 
*/
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

/**
 Desarrollado por  :  Karina Puertas
 Correo            :  kpuertas30@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Datos Basicos del Militar
*/
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


/**
 Desarrollado por  :  Maria Elena Nuñez 
 Correo            :  marielen936@gmail.com
 Modifcado    por  :  
 Correo persona mod:  
 Fecha Creacion    :  11-07-2017  
 Fecha Modificacion:  11-07-2017  
 Descripcion       :  Funcion de Prueba
*/
function Obtener(){
	let militar = new Militar(); 
	console.log(JSON.stringify(militar.ObtenerFecha()));
	//let familiar = new Familiar();
	//familiar.Persona.DatoBasico.sexo="F";
	//familiar.parentesco="PD";
	//console.log(JSON.stringify(familiar.GenerarParentesco()));

}


/*
// @param string (string) : Fecha en formato YYYY-MM-DD
// @return (string)       : Fecha en formato DD/MM/YYYY
function convertDateFormat(string) {
  var info = string.split('-');
  return info[2] + '/' + info[1] + '/' + info[0];
}*/