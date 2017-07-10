/*
Desarrollado por  :  Edda A. Gonzalez G.
Correo            :  eddagoa@yahoo.com
Modifcado    por  :  
Correo persona mod:  
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de personas
*/


//Dynamic Menu System


/*MNU[count(MNU)] = "Persona|Persona#Persona:[Incluir*f_incluirPersona;Datos Laborales*f_datosLaboralesPersona;Relaciones*f_relacionesPersona; Idioma*f_idioma;Documentos*f_documentos;Titulos Obtenidos*f_titulosObtenidos;Direccion*f_direccion;Telefono*f_telefono;Anotacion*f_anotacion;Datos Variables*f_datosVariables] #Proveedores:[Incluir*f_incluirProveedor; Idioma*f_idioma;Direccion*f_direccion;Telefono*f_telefono;Anotacion*f_anotacion;Datos Variables*f_datosVariables]",*/
	

//MNU[count(MNU)] = "Persona|Persona#Incluir:f_incluirPersona";
/*
Desarrollado por  :  Edda A. Gonzalez G.
Correo            :  eddagoa@yahoo.com
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de personas
*/
function f_incluirPersona()
{
	var html = "";

	var dataArrayTipNip = new Array("V","E");
	html = html + html_colum4(10,25,0,25,"Ced&uacute;la",form_input_select("bootstrap","Seleccione un valor","cmbSexo","cmbSexo",dataArrayTipNip,""),"",form_input_text("bootstrap","txtcedula" ,"txtcedula" ,"","Cedula de Identidad") );

	html = html + html_colum2(10,25,"NIT"   ,form_input_text("bootstrap","txtnit"    ,"txtnit","","NIT") );

    html = html + html_colum4(10,25,0,25,"Apellidos",form_input_text("bootstrap","txtApellidoPri" ,"txtApellidoPri" ,"","Primer Apellido") ,"",form_input_text("bootstrap","txtApellidoSeg" ,"txtApellidoSeg" ,"","Segundo Apellido") )	
	
    html = html + html_colum4(10,25,1,25,"Nombres",form_input_text("bootstrap","txtNombrePri" ,"txtNombresPri" ,"","Primer Nombre") ,"",form_input_text("bootstrap","txtNombreSeg" ,"txtNombreSeg" ,"","Segundo Nombre") )	

	html = html + html_colum2(10,25,"Apellido Casada",form_input_text("bootstrap","txtApellidoCasada" ,"txtApellidoCasada" ,"","Apellido de Casada") );

	html = html + html_colum4(10,25,1,25,"Prefijo",form_input_text("bootstrap","txtPrefijo" ,"txtPrefijo" ,"","Prefijo") ,"Sufijo",form_input_text("bootstrap","txtSufijo" ,"txtSufijo" ,"","Sufijo") )	

	html = html + html_colum2(10,25,"Apodo",form_input_text("bootstrap","txtApodo" ,"txtApodo" ,"","Apodo") );

	var dataArraySexo = new Array("FEMENINO","MASCULINO");
	var dataArrayEdocivil = new Array("SOLTERO (A)","CASADO (A)","VIUDO (A)","DIVORCIADO (A)");
	
	html = html + html_colum4(10,25,10,25,"Sexo",form_input_select("bootstrap","Seleccione un valor","cmbSexo","cmbSexo",dataArraySexo,""),"Estado Civil",form_input_select("bootstrap","Seleccione un valor","cmbEstadocivil","cmbEstadocivil",dataArrayEdocivil,"") )	
	

	var dataArrayIdioma = new Array("IDIOMA1","IDIOMA2","IDIOMA3");
	var dataArrayOcupacion = new Array("OCUPACION1","OCUPACION2","OCUPACION3","OCUPACION3");
	
	html = html + html_colum4(10,25,10,25,"Idioma",form_input_select("bootstrap","Seleccione un valor","cmbIdioma","cmbIdioma",dataArrayIdioma,""),"Ocupacion",form_input_select("bootstrap","Seleccione un valor","cmbOcupacion","cmbOcupacion",dataArrayOcupacion,"") )	


	var dataArrayNacionalidad = new Array("NACIONALIDAD1","NACIONALIDAD2","NACIONALIDAD3");
	var dataArrayLugarNac = new Array("LUGAR NACIMIENTO 1","LUGAR NACIMIENTO 2","LUGAR NACIMIENTO 4","LUGAR NACIMIENTO 5");
	
	html = html + html_colum4(10,25,10,25,"Nacionalidad",form_input_select("bootstrap","Seleccione un valor","cmbNacionalidad","cmbNacionalidad",dataArrayNacionalidad,""),"Lugar Nacimiento",form_input_select("bootstrap","Seleccione un valor","cmbLugarNac","cmbLugarNac",dataArrayLugarNac,"") )		

	html = html + html_colum4(10,25,10,25,"Fecha Nac.",form_input_text("bootstrap","txtFechaNac" ,"txtFechaNac" ,"","Fecha Nac") ,"Fecha Defunción",form_input_text("bootstrap","txtFechaDef" ,"txtFechaDef" ,"","Fecha de Defunción") )
	

	var dataArrayTratamiento = new Array("TRATAMIENTO1","TRATAMIENTO2","TRATAMIENTO3");
	html = html + html_colum2(10,25,"Tratamiento",form_input_select("bootstrap","Seleccione un valor","cmbTratamiento","cmbTratamiento",dataArrayIdioma,""));



	html = html + html_colum2(10,40,"Email",form_input_text("bootstrap","txtEmail" ,"txtEmail" ,"","Email") );

	html = html + html_colum2(10,25,"Lugar de Nacimiento Texto",form_input_text("bootstrap","txtLugarNacText" ,"txtLugarNacText" ,"","Lugar de Nacimiento Texto") );

	




	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "INCLUIR";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f_datosLaboralesPersona()
{
	var html = "";

	html = html + html_colum2(10,40,"Empresa",form_input_text("bootstrap","txtempresa" ,"txtempresa" ,"","Empresa") );

	html = html + html_colum4(10,25,10,25,"Fecha Inicio",form_input_text("bootstrap","txtFechaInicio","txtFechaInicio","",""),"Fecha Fin",form_input_text("bootstrap","txtFechaFin","txtFechaFin","","") )		

	var dataArrayActEmpresa = new Array("EMPRESA1","EMPRESA2","EMPRESA3","EMPRESA4");
	html = html + html_colum2(10,80,"Act. Empresa",form_input_select("bootstrap","Seleccione un valor","cmbActEmpresa","cmbActEmpresa",dataArrayActEmpresa,"") );

	var dataArrayForma = new Array("PAGO1","PAGO2","PAGO3","PAGO4")
	html = html + html_colum4(10,25,10,25,"Ingreso Anual",form_input_text("bootstrap","txtIngresoAnual","txtIngresoAnual","",""),"Sueldo",form_input_text("bootstrap","txtSueldo","txtSueldo","","") )		

	var dataArrayFormaPago = new Array("PAGO1","PAGO2","PAGO3","PAGO4");
	html = html + html_colum2(10,25,"Forma de Pago",form_input_select("bootstrap","Seleccione un valor","cmbFormaPago","cmbFormaPago",dataArrayFormaPago,""));

	html = html + html_colum2(10,40,"Notas",form_input_text("bootstrap","txtnotas" ,"txtnotas" ,"","Notas") );




	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "DATOS LABORALES";
	document.getElementById( "js_content" ).innerHTML = html;
}


function f_relacionesPersona()
{
	var html = "";

 	var dataArrayPersona = new Array("PERSONA1","PERSONA2","PERSONA3","PERSONA4");
	html = html + html_colum2(10,80,"Persona",form_input_select("bootstrap","Seleccione un valor","cmbActPersona","cmbActPersona",dataArrayPersona,"") );
	
	var dataArrayRela = new Array("TIPO1","TIPO2","TIPO3","TIPO4");
	html = html + html_colum2(10,80,"Relaci&oacute;n",form_input_select("bootstrap","Seleccione un valor","cmbActRelacion","cmbActrelacion",dataArrayRela,"") );
	
	html = html + html_colum2(10,05,"Relaci&oacute;n Activa",form_input_text("bootstrap","txtRelacionActiva" ,"txtRelacionActiva" ,"","R") );
	
	html = html + html_colum4(10,25,10,25,"Fec. Ini de Relaci&oacute;n",form_input_text("bootstrap","txtFechaIniciodeRelacion","txtFechaIniciodeRelacion","",""),"Fch Fin de Relaci&oacute;n",form_input_text("bootstrap","txtFechaFinderelacion","txtFechaFinderelacion","","") )




	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	

	document.getElementById( "title_section" ).innerHTML = "RELACIONES";
	document.getElementById( "js_content" ).innerHTML = html;
}


function f_idioma()
{
	var html = "";

	var dataArrayidioma = new Array("IDIOMA1","IDIOMA2" ,"IDIOMA3");
	html = html + html_colum2(20,80,"Idioma",form_input_select("bootstrap","Seleccione un valor","cmbIdioma","cmbIdioma",dataArrayidioma,"")); 

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "IDIOMA ";
	document.getElementById( "js_content" ).innerHTML = html;

}

function f_documentos()
{
	var html = "";

	var dataArrayDocumento = new Array("DOCUMENTO1","DOCUMENTO2","DOCUMENTO3","DOCUMENTO4");
	html = html + html_colum2(10,80,"Documento",form_input_select("bootstrap","Seleccione un valor","cmbdocumento","cmbdocumento",dataArrayDocumento,"") );

	var dataArrayEstatus = new Array("ESTATUS1","ESTATUS2","ESTATUS3","ESTATUS4");
	html = html + html_colum2(10,80,"Estatus",form_input_select("bootstrap","Seleccione un valor","cmbEstatus","cmbEstatus",dataArrayEstatus,"") );
	
	html = html + html_colum4(10,25,10,25,"Fecha Recepci&oacute;n",form_input_text("bootstrap","txtFechaRecepcion","txtFechaRecepcion","",""),"Fecha Emisi&oacute;n",form_input_text("bootstrap","txtFechaEmision","txtFechaEmision","","") )

	html = html + html_colum4(10,25,10,25,"Fecha Validez",form_input_text("bootstrap","txtFechaValidez","txtFechaValidez","",""),"Fecha Devoluci&oacute;n",form_input_text("bootstrap","txtFechaDevolucion","txtFechaDevolucion","","") )

	html = html + html_colum2(10,25,"Fecha de Vencimiento",form_input_text("bootstrap","txtfechavencimiento" ,"txtfechavencimiento" ,"","") );





	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	

	document.getElementById( "title_section" ).innerHTML = "DOCUMENTOS";
	document.getElementById( "js_content" ).innerHTML = html;
}




function f_titulosObtenidos()
{
	

	var html = "";

	var dataArrayTitulo = new Array("TITULO1","TITULO2","TITULO3","TITULO4");
	var dataArrayTxt = new Array("Txt1","Txt2","Txt3","Txt4");
	
	html = html + html_colum6(10,15,9,15,4,15,"Titulo",form_input_select("bootstrap","Seleccione un valor","cmbTitulo","cmbTitulo",dataArrayTitulo,""),"Instituci&oacute;n Nivel",form_input_text("bootstrap","txtInstitucion","txtInstitucion","",""),"-",form_input_select("bootstrap","Seleccione un valor","cmbtxt" ,"cmbtxt" ,dataArrayTxt,""));

	html = html + html_colum6(10,15,9,15,4,15,"Nro Titulo",form_input_text("bootstrap","txtNumeroTitulo","txtNumeroTitulo","",""),"Fecha  Obtenci&oacute;n",form_input_text("bootstrap","txtFechaObtencion","txtFechaObtencion",""),"Fecha Egreso",form_input_text("bootstrap","txtFechaEgreso","txtFechaEgreso",""));

	html = html + html_colum6(10,15,9,15,4,15,"Fecha Notas Cert.",form_input_text("bootstrap","txtFechanotascert","txtFechanotascert",".",""),"Fecha Registro",form_input_text("bootstrap","txtFechaRegistro","txtFechaRegistro",""),"Folio",form_input_text("bootstrap","txtFolio","txtFolio",""));

	html = html + html_colum6(10,15,9,15,4,15,"Acta Min",form_input_text("bootstrap","txtActaMin","txtActaMin",".",""),"Fecha Acta Min",form_input_text("bootstrap","txtFechaActaMin","txtFechaActaMin",""),"Fecha &uacute;lt Nota",form_input_text("bootstrap","txtFechaUltimaNota","txtFechaUltimaNota",""));

	html = html + html_colum6(10,15,9,15,4,15,"Libro",form_input_text("bootstrap","txtLibro","txtLibro",".",""),"Tomo",form_input_text("bootstrap","txtTomo","txtTomo",""),"Notaria",form_input_text("bootstrap","txtNotaria","txtFechaUltimaNota",""));


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	

	document.getElementById( "title_section" ).innerHTML = "TITULOS OBTENIDOS";
	document.getElementById( "js_content" ).innerHTML = html;

function f_direccion()
{
	var html = "";

	var dataArrayTipoTelf = new Array("DIRECCION 1","DIRECCION 2","DIRECCION 3");
	
	html = html + html_colum2(10,60,"Tipo de Telefono",form_input_select("bootstrap","Seleccione un valor","cmbTipoTelf","cmbTipoTelf",dataArrayTipoTelf,""));

	html = html + html_colum2(10,60,"Línea Nro. 1"   ,form_input_text("bootstrap","txtLinea1"    ,"txtLinea1"    ,"","Linea Nro. 1") );

	html = html + html_colum2(10,60,"Línea Nro. 2"   ,form_input_text("bootstrap","txtLinea2"    ,"txtLinea2"    ,"","Linea Nro. 2") );

	html = html + html_colum2(10,60,"Línea Nro. 3"   ,form_input_text("bootstrap","txtLinea3"    ,"txtLinea3"    ,"","Linea Nro. 3") );

	html = html + html_colum2(10,60,"Línea Nro. 4"   ,form_input_text("bootstrap","txtLinea4"    ,"txtLinea4"    ,"","Linea Nro. 4") );


	var dataArrayLocalidad = new Array("LOCALIDAD 1","LOCALIDAD 2","LOCALIDAD 3");
	html = html + html_colum2(10,50,"Localidad",form_input_select("bootstrap","Seleccione un valor","cmbLocalidad","cmbLocalidad",dataArrayLocalidad,""));

	html = html + html_colum2(10,60,"Loc. Texto"   ,form_input_text("bootstrap","txtLocTexto"    ,"txtLocTexto"    ,"","txtLocTexto") );

	var dataArrayCodPostal = new Array("CODIGO 1","CODIGO 2","CODIGO 3");
	html = html + html_colum2(10,50,"Código Postal",form_input_select("bootstrap","Seleccione un valor","cmbCodPostal","cmbCodPostal",dataArrayCodPostal,""));


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "DIRECCIÓN ";
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_telefono()
{
	var html = "";

	var dataArrayTipoTelf = new Array("TELEFONO 1","TELEFONO 2","TELEFONO 3");
	html = html + html_colum2(10,30,"Tipo de Telefono",form_input_select("bootstrap","Seleccione un valor","cmbTipoTelf","cmbTipoTelf",dataArrayTipoTelf,""));

	html = html + html_colum2(10,30,"Cod. Pais"   ,form_input_text("bootstrap","txtCodPais"    ,"txtCodPais"    ,"","Código País") );

	html = html + html_colum2(10,30,"Cod. Area"   ,form_input_text("bootstrap","txtCodArea"    ,"txtCodArea"    ,"","Cod. Area") );

	html = html + html_colum2(10,30,"Nro. Telefono"   ,form_input_text("bootstrap","txtNroTelf"    ,"txLNroTelf"    ,"","Numero de Telefono") );

	html = html + html_colum2(10,30,"Contacto"   ,form_input_text("bootstrap","txtContacto"    ,"txtContacto"    ,"","Contacto") );

	html = html + html_colum2(10,40,"Referencia"   ,form_input_text("bootstrap","txtReferencia"    ,"txtReferencia"    ,"","Referencia") );




	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "TELÉFONO ";
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_anotacion()
{
	var html = "";


	var dataArrayTipoTelf = new Array("TELEFONO 1","TELEFONO 2","TELEFONO 3");
	html = html + html_colum2(10,30,"Tipo de Telefono",form_input_select("bootstrap","Seleccione un valor","cmbTipoTelf","cmbTipoTelf",dataArrayTipoTelf,""));

	html = html + html_colum4(10,25,10,25,"Usuario",form_input_text("bootstrap","txtUsuario","txtUsuario","",""),"Fecha",form_input_text("bootstrap","txtFecha","txtFecha","","") )		

	html = html + html_colum2(10,30,"Título"   ,form_input_text("bootstrap","txtTitulo"    ,"txtTitulo"    ,"","Titulo") );

	html = html + html_colum2(10,30,"Nota"   ,form_input_textarea("bootstrap","txtNota"    ,"txtNota"    ,"","Nota") );

	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "ANOTACIÓN ";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f_datosVariables()
{
	var html = "";


	var dataArrayGrupo = new Array("GRUPO 1","GRUPO 2","GRUPO 3");
	html = html + html_colum2(10,30,"Grupo",form_input_select("bootstrap","Seleccione un valor","cmbGrupo","cmbGrupo",dataArrayGrupo,""));

	html = html + html_colum2(10,30,"Otro"   ,form_input_text("bootstrap","txtOtro"    ,"txtOtro"    ,"","Otro") );

	html = html + html_colum2(10,30,"¿Que Deporte Practica?"   ,form_input_text("bootstrap","txtDeporte"    ,"txtDeporte"    ,"","Deporte") );

	html = html + html_colum2(10,30,"Indique Otro Deporte"   ,form_input_text("bootstrap","txtOtroDeporte"    ,"txtOtroDeporte"    ,""," Otro Deporte") );


	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "DATOS VARIABLES";
	document.getElementById( "js_content" ).innerHTML = html;
}


}

function f_incluirProveedor()
{
	var html = "";

	var dataArrayRif = new Array("V","G","J","M");
	html = html + html_colum4(10,25,0,25,"Rif",form_input_select("bootstrap","Seleccione un valor","cmbRifc","cmbRifc",dataArrayRif,""),"NIT",form_input_text("bootstrap","txtnit" ,"txtnit" ,"","NIT") );

	html = html + html_colum4(10,25,0,25,"Raz&oacute;n Social",form_input_text("bootstrap","txtRazonSocial" ,"txtRazonSocial" ,"","") ,"Capital",form_input_text("bootstrap","txtCapital" ,"txtCapital" ,"","") )	
	
    html = html + html_colum4(10,25,1,25,"Prefijo",form_input_text("bootstrap","txtPrefijo" ,"txtPrefijo" ,"","Prefijo") ,"Sufijo",form_input_text("bootstrap","txtSufijo" ,"txtSufijo" ,"","Sufijo") )	
	
	var dataArrayIdioma = new Array("IDIOMA1","IDIOMA2","IDIOMA3");
	html = html + html_colum4(10,25,10,25,"Apodo",form_input_text("bootstrap","txtApodo" ,"txtApodo" ,"","Apodo"),"Idioma",form_input_select("bootstrap","Seleccione un valor","cmbIdioma","cmbIdioma",dataArrayIdioma,""))

	var dataArrayOcupacion = new Array("OCUPACION1","OCUPACION2","OCUPACION3");
	var dataArrayNacionalidad = new Array("NACIONALIDAD1","NACIONALIDAD2","NACIONALIDAD3");
	html = html + html_colum4(10,25,10,25,"Ocupaci&oacute;n",form_input_select("bootstrap","Seleccione un valor","cmbOcupacion","cmbOcupacion",dataArrayOcupacion,""),"Nacionalidad",form_input_select("bootstrap","Seleccione un valor","cmbNacionalidad","cmbNacionalidad",dataArrayNacionalidad,"") )	
	

	html = html + html_colum4(10,25,10,25,"Lugar Registro",form_input_text("bootstrap","txtLugarRegistro" ,"txtLugarRegistro" ,"","") ,"Fecha Registro",form_input_text("bootstrap","txtFechaReg" ,"txtFechaReg" ,"","") )
	

	html = html + html_colum4(10,25,10,25,"Fecha Cierre",form_input_text("bootstrap","txtFechaCierre" ,"txtFechaCierre" ,"","") ,"Email",form_input_text("bootstrap","txtEmail" ,"txtEmail" ,"",""))

	html = html + html_colum2(10,25,"Contacto",form_input_text("bootstrap","txtContacto" ,"txtContacto" ,"","") );

	



	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "INCLUIR";
	document.getElementById( "js_content" ).innerHTML = html;

}

function f_Proveedores()
{
	var html = "";

	var dataArrayConcepto = new Array("CONCEPTO1","CONCEPTO2","CONCEPTO3","CONCEPTO4");
	html = html + html_colum4(10,25,0,25,"Concepto",form_input_select("bootstrap","Seleccione un valor","cmbConcepto","cmbConcepto",dataArrayConcepto,""),"Cod.Proveedor",form_input_text("bootstrap","txtProveedor" ,"txtProveedor" ,"","") );

	html = html + html_colum4(10,25,10,25,"Descp. Servicio",form_input_text("bootstrap","txtDescpServ" ,"txtDescpServ" ,"","") ,"Comisi&oacute;n por Def.",form_input_text("bootstrap","txtComision" ,"txtComision" ,"",""))

	html = html + html_colum4(10,25,10,25,"Fecha Corte",form_input_text("bootstrap","txtFechaCorte" ,"txtFechaCorte" ,"","") ,"Plazo por Def.",form_input_text("bootstrap","txtPlazo" ,"txtPlazo" ,"",""))



html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "INCLUIR";
	document.getElementById( "js_content" ).innerHTML = html;

}

//OTRAS OPERACIONES CAMBIO DE CEDULA
function f_nvacedula()
{
	var html = "";

	var dataArrayTipNip = new Array("V","E","M");;
	html = html + html_colum4(10,25,0,25,"Ced&uacute;la",form_input_select("bootstrap","Seleccione un valor","cmbced","cmbced",dataArrayTipNip,"")," ",form_input_text("bootstrap","txtcedula" ,"txtcedula" ,"","") )

	var dataArrayNuevacedula = new Array("V","E","M");;
	html = html + html_colum4(10,25,0,25,"Nueva Ced&uacute;la",form_input_select("bootstrap","Seleccione un valor","cmbnced","cmbnced",dataArrayNuevacedula,"")," ",form_input_text("bootstrap","txtNuevacedula" ,"txtNuevacedula" ,"","") )

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "CAMBIO DE CEDULA DE PERSONA";
	document.getElementById( "js_content" ).innerHTML = html;

}
