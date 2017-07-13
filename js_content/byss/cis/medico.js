/*
Desarrollado por  :  Karina C. Puertas M.
Correo            :  kpuertas30@gmail.com
Modifcado    por  :  
Correo persona mod:  
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de cuidado Integral de la Salud
*/


//Dynamic Menu System


MNU[count(MNU)] = "Bienestar Social|Cuidado Integral#Medico:[Incluir*f_incluirMedico;Datos Medicos*f_datosMedicos;Especialidades Medicas*f_especialidadesMedicas;Unidades Medicas por Medico*f_unidadesMedicaporMedico;Idioma*f_idioma;Direccion*f_direccion;Telefono*f_telefono;Anotacion*f_anotacion;Datos Variables*f_datosVariables] #Unidad Medica:[Incluir*f_incluirUnidad;Datos Unidad Medica*f_datosUnidad;Especialidades Unidades*f_especialidadesUnidad;Unidades Medicas por Medico*f_unidadesMedicaporMedico;Idioma*f_idioma;Direccion*f_direccion;Telefono*f_telefono;Anotacion*f_anotacion;Datos Variables*f_datosVariables]  #Casos Medicos:[Incluir*f_incluirCasosMedicos;Actos Medicos*f_actosMedicos; Diagnostico - Tratamiento*f_diagnosticoTratamiento; Ciclo Tratamiento*f_cicloTratamiento;Detalle del Kit*f_kit] #Reembolso:[Opiniones*f_opiniones; Reembolso Detalle*f_ReembolsoDetalle] #Otras Operaciones C.I.:[Envio de Reembolso a Pagos*f_envioreembolso]  ";


					


/*
Desarrollado por  :  Karina C. Puertas M.
Correo            :  kpuertas30@gmail.com
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de cuidado Integral de la Salud
*/
function f_incluirMedico()
{
	var html = "";

	var dataArrayTipNip = new Array("V","E");
	html = html + html_colum4(10,25,0,25,"Ced&uacute;la",form_input_select("bootstrap","Seleccione un valor","cmbSexo","cmbSexo",dataArrayTipNip,""),"",form_input_text("bootstrap","txtcedula" ,"txtcedula" ,"","Cedula de Identidad") );

	html = html + html_colum2(10,25,"NIT"   ,form_input_text("bootstrap","txtnit"    ,"txtnit","","NIT") );

    html = html + html_colum4(10,25,0,25,"Apellidos",form_input_text("bootstrap","txtApellidoPri" ,"txtApellidoPri" ,"","Primer Apellido") ,"",form_input_text("bootstrap","txtApellidoSeg" ,"txtApellidoSeg" ,"","Segundo Apellido") )	
	
    html = html + html_colum4(10,25,1,25,"Nombres",form_input_text("bootstrap","txtNombrePri" ,"txtNombresPri" ,"","Primer Nombre") ,"",form_input_text("bootstrap","txtNombreSeg" ,"txtNombreSeg" ,"","Segundo Nombre") )	

	html = html + html_colum2(10,25,"Apellido Casada",form_input_text("bootstrap","txtApellidoCasada" ,"txtApellidoCasada" ,"","Apellido de Casada") );

	//html = html + html_colum2(10,25,"CHECKBOX",form_input_checkbox("bootstrap","txtApellidoCasada" ,"txtApellidoCasada" ,"","") );

	html = html + html_colum2(10,25,"Prefijo",form_input_text("bootstrap","txtPrefijo" ,"txtPrefijo" ,"","Prefijo") ,"Sufijo",form_input_text("bootstrap","txtSufijo" ,"txtSufijo" ,"","Sufijo") )	

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

	html = html + html_colum4(10,25,10,25,"Fecha Nac.",form_date("bootstrap","datepicker" ,"datepicker" ,"","Fecha Nac") ,"Fecha Defunción",form_input_text("bootstrap","txtFechaDef" ,"txtFechaDef" ,"","Fecha de Defunción") )
	

	var dataArrayTratamiento = new Array("TRATAMIENTO1","TRATAMIENTO2","TRATAMIENTO3");
	html = html + html_colum2(10,25,"Tratamiento",form_input_select("bootstrap","Seleccione un valor","cmbTratamiento","cmbTratamiento",dataArrayTratamiento,""));



	html = html + html_colum2(10,40,"Email",form_input_text("bootstrap","txtEmail" ,"txtEmail" ,"","Email") );

	html = html + html_colum2(10,25,"Lugar de Nacimiento Texto",form_input_text("bootstrap","txtLugarNacText" ,"txtLugarNacText" ,"","Lugar de Nacimiento Texto") );

	

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "INCLUIR";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f_datosMedicos()
{
	var html = "";

	var dataArrayTipoUnidad = new Array("TIPO UNIDAD 1","TIPO UNIDAD 2","TIPO UNIDAD 3");
	html = html + html_colum2(10,80,"Tipo de Unidad Medica",form_input_select("bootstrap","Seleccione un valor","cmbTipoUnidad","cmbTipoUnidad",dataArrayTipoUnidad,""));

	html = html + html_colum2(10,80,"Cuota Mensual"   ,form_input_text("bootstrap","txtCuotaMensual"    ,"txtCuotaMensual"    ,"","txtCuotaMensual") );

	

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	

	document.getElementById( "title_section" ).innerHTML = "DATOS MEDICOS";
	document.getElementById( "js_content" ).innerHTML = html;
}


function f_especialidadesMedicas()
{
	var html = "";

	var dataArrayEspecialidad = new Array("ESPECIALIDAD1","ESPECIALIDAD2","ESPECIALIDAD3");
	html = html + html_colum2(20,80,"Código Especialidad Médica",form_input_select("bootstrap","Seleccione un valor","cmbEspMedico","cmbEspMedico",dataArrayEspecialidad,""));

	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "ESPECIALIDADES MEDICAS ";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f_unidadesMedicaporMedico()
{
	var html = "";

	var dataArrayunidad = new Array("UNIDADES 1","UNIDADES 1");
	html = html + html_colum4(20,25,0,25,"Nro. de Identificación",form_input_select("bootstrap","Seleccione un valor","cmbUnidad","cmbUnidad",dataArrayunidad,""),"",form_input_text("bootstrap","txtunidad" ,"txtunidad" ,"","") );


	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "UNIDADES MEDICAS POR MEDICO";
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_idioma()
{
	var html = "";

	var dataArrayidioma = new Array("IDIOMA1","IDIOMA2" ,"IDIOMA3");
	html = html + html_colum2(20,80,"Idioma",form_input_select("bootstrap","Seleccione un valor","cmbIdioma","cmbIdioma",dataArrayidioma,"")); 

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "IDIOMA ";
	document.getElementById( "js_content" ).innerHTML = html;
}

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

/*
Desarrollado por  :  Karina C. Puertas M.
Correo            :  kpuertas30@gmail.com
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de cuidado Integral de la Salud
*/
function f_incluirUnidad()
{
	var html = "";

	var dataArrayTipNip = new Array("V","E");
	html = html + html_colum4(10,25,0,25,"Ced&uacute;la",form_input_select("bootstrap","Seleccione un valor","cmbSexo","cmbSexo",dataArrayTipNip,""),"",form_input_text("bootstrap","txtcedula" ,"txtcedula" ,"","Cedula de Identidad") );

	html = html + html_colum2(10,25,"NIT"   ,form_input_text("bootstrap","txtnit"    ,"txtnit","","NIT") );

    html = html + html_colum4(10,25,0,25,"Apellidos",form_input_text("bootstrap","txtApellidoPri" ,"txtApellidoPri" ,"","Primer Apellido") ,"",form_input_text("bootstrap","txtApellidoSeg" ,"txtApellidoSeg" ,"","Segundo Apellido") )	
	
    html = html + html_colum4(10,25,1,25,"Nombres",form_input_text("bootstrap","txtNombrePri" ,"txtNombresPri" ,"","Primer Nombre") ,"",form_input_text("bootstrap","txtNombreSeg" ,"txtNombreSeg" ,"","Segundo Nombre") )	

	html = html + html_colum2(10,25,"Apellido Casada",form_input_text("bootstrap","txtApellidoCasada" ,"txtApellidoCasada" ,"","Apellido de Casada") );

	html = html + html_colum2(10,25,"Prefijo",form_input_text("bootstrap","txtPrefijo" ,"txtPrefijo" ,"","Prefijo") ,"Sufijo",form_input_text("bootstrap","txtSufijo" ,"txtSufijo" ,"","Sufijo") )	

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



function f_datosUnidad()
{
	var html = "";

	var dataArrayCanalLiq = new Array("CANAL1","CANAL2","CANAL3");
	html = html + html_colum2(10,80,"Canal de Liquidacion",form_input_select("bootstrap","Seleccione un valor","cmbCanalLiq","cmbCanalLiq",dataArrayCanalLiq,""));

	html = html + html_colum2(10,80,"N&uacutemero de MSAS"   ,form_input_text("bootstrap","txtNumMSAS"    ,"txtNumMSAS"    ,"","Numero de MSAS") );

	html = html + html_colum4(10,25,10,25,"Fecha Ing. Carnet",form_input_text("bootstrap","txtFechaIngCarnet","txtFechaIngCarnet","",""),"Fecha Venc. Carnet",form_input_text("bootstrap","txtFechaVenCarnet","txtFechaVenCarnet","","") )		

	html = html + html_colum2(10,80,"N&uacutemero de Carnet"   ,form_input_text("bootstrap","txtNumCarnet"    ,"txtNumCarnet"    ,"","Numero de Carnet") );

	var dataArrayIntFinanciera = new Array("INSTITUCION1","INSTITUCION2","INSTITUCION3");
	html = html + html_colum2(10,50,"Int. Financiera",form_input_select("bootstrap","Seleccione un valor","cmbIntFinanciera","cmbIntFinanciera",dataArrayIntFinanciera,""));

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "DATOS MEDICOS";
	document.getElementById( "js_content" ).innerHTML = html;
}


function f_especialidadesUnidad()
{
	var html = "";

	var dataArrayEspecialidad = new Array("ESPECIALIDAD1","ESPECIALIDAD2","ESPECIALIDAD3");
	html = html + html_colum2(20,80,"Código Especialidad Médica",form_input_select("bootstrap","Seleccione un valor","cmbEspMedico","cmbEspMedico",dataArrayEspecialidad,""));

	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "ESPECIALIDADES MEDICAS ";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f_unidadesMedicaporMedico()
{
	var html = "";

	var dataArrayunidad = new Array("UNIDADES 1","UNIDADES 1");
	html = html + html_colum4(20,25,0,25,"Nro. de Identificación",form_input_select("bootstrap","Seleccione un valor","cmbUnidad","cmbUnidad",dataArrayunidad,""),"",form_input_text("bootstrap","txtunidad" ,"txtunidad" ,"","") );


	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "UNIDADES MEDICAS POR MEDICO";
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_unidadesMedicaporMedico()
{
	var html = "";

	var dataArrayunidad = new Array("UNIDADES 1","UNIDADES 1");
	html = html + html_colum4(20,25,0,25,"Nro. de Identificación",form_input_select("bootstrap","Seleccione un valor","cmbUnidad","cmbUnidad",dataArrayunidad,""),"",form_input_text("bootstrap","txtunidad" ,"txtunidad" ,"","") );


	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "UNIDADES MEDICAS POR MEDICO";
	document.getElementById( "js_content" ).innerHTML = html;
}






/*
Desarrollado por  :  Karina C. Puertas M.
Correo            :  kpuertas30@gmail.com
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de cuidado Integral de la Salud_ CASOS MEDICOS
*/
function f_incluirCasosMedicos()
{
	var html = "";

	

	html = html + html_colum2(10,25,"Nro. Caso Médico"   ,form_input_text("bootstrap","txtNroCasoMedicos"    ,"txtNroCasoMedicos","","Nro. Caso Médico") );

    html = html + html_colum4(10,25,0,25,"Paciente",form_input_text("bootstrap","txtTipNipPaciente" ,"txtTipNipPaciente" ,"","") ,"",form_input_text("bootstrap","txtCedulaPaciente" ,"txtCedulaPaciente" ,"","Paciente") );
	
    html = html + html_colum4(10,25,1,25,"Titular Afil.:",form_input_text("bootstrap","txtTipNipAfiliado" ,"txtTipNipAfiliado" ,"","") ,"",form_input_text("bootstrap","txtCedulaTitAfil" ,"txtCedulaTitAfil" ,"","") );

    html = html + html_colum4(10,25,1,25,"Médico/ Pers. que Avala:",form_input_text("bootstrap","txtPersAvala" ,"txtPersAvala" ,"","") ,"",form_input_text("bootstrap","txtCedulaPersAvala" ,"txtCedulaPersAvala" ,"","") );

	var dataArrayUnidad = new Array("UNIDADES 1","UNIDADES 2");
	html = html + html_colum4(10,25,0,25,"Nro. de Identificación",form_input_select("bootstrap","Seleccione un valor","cmbUnidad","cmbUnidad",dataArrayUnidad,""),"",form_input_text("bootstrap","txtunidad" ,"txtunidad" ,"","") );
    

	html = html + html_colum2(10,25,"Descripción Diagnostico"   ,form_input_text("bootstrap","txtDescripDiagnostico"    ,"txtDescripDiagnostico","","Descripción Diagnostico"));

	html = html + html_colum2(10,25,"Fecha Inic. Caso"   ,form_input_text("bootstrap","txtFechaIniCaso"    ,"txtFechaIniCaso","","Fecha Inic. Caso"));
	

	var dataArrayDiagnostico = new Array("DIAGNOSTICO 1","DIAGNOSTICO 2");
	var dataArrayTratamiento = new Array("TRATAMIENTO 1","TRATAMIENTO 2");
	
	html = html + html_colum4(10,25,0,25,"Diagnostico",form_input_select("bootstrap","Seleccione un valor","cmbDiagnostico","cmbDiagnostico",dataArrayDiagnostico,""),"Tratamiento",form_input_select("bootstrap","Seleccione un valor","cmbTratamiento","cmbTratamiento",dataArrayTratamiento,"") );
	
	html = html + html_colum4(10,25,0,25,"Peso",form_input_text("bootstrap","txtpeso","txtpeso","","Peso"),"Estatura",form_input_text("bootstrap","txtEstatura" ,"txtEstatura" ,"","Estatura") );
    

		var dataArrayTipoSangre = new Array("A+","A-","B+","B-","AB+","AB-","O+","O-");
	html = html + html_colum4(10,25,0,25,"Tipo de Sangre",form_input_select("bootstrap","Seleccione un valor","cmbTipoSangre","cmbTipoSangre",dataArrayTipoSangre,""),"Fecha Inic. Tratamiento",form_input_text("bootstrap","txtFchIncTratamiento" ,"txtFchIncTratamiento" ,"","") );

	html = html + html_colum4(10,25,0,25,"Fch.Informe Médico",form_input_text("bootstrap","txtFchInfMedico","txtFchInfMedico",""),"Fecha Vcto. Informe Med.:",form_input_text("bootstrap","txtFchVctoInfMed" ,"txtFchVctoInfMed" ,"","") );

	var dataArrayCausaEgreso = new Array("DEFUNCION","CAMBIO DE TRATAMIENTO","MEJORIA","CONVERSION","PERDIDA DEL BENEFICIO");
	html = html + html_colum4(10,25,0,25,"Fch. Egreso",form_input_text("bootstrap","txtFchEgreso","txtFchEgreso",""),"Causa Egreso",form_input_select("bootstrap","Seleccione un valor","cmbCausaEgreso","cmbCausaEgreso",dataArrayCausaEgreso,"") );


	var dataArrayPrograma = new Array("DIALISIS","ONCOLOGIA", "PROLONGADO", "CONVENCIONAL");
	 html = html + html_colum2(10,25,"Programa",form_input_select("bootstrap","Seleccione un valor","cmbPrograma","cmbPrograma",dataArrayPrograma,"") );


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	document.getElementById( "title_section" ).innerHTML = "INCLUIR CASOS MEDICOS ";
	document.getElementById( "js_content" ).innerHTML = html;

}



function f_actosMedicos()
{
	var html = "";

	

	html = html + html_colum2(10,25,"Nro. Acto Medico"   ,form_input_text("bootstrap","txtNroActoMedico"    ,"txtNroActoMedico","","Nro. Acto Medico") );

   html = html + html_colum2(10,25,"Nro. Caso Medico"   ,form_input_text("bootstrap","txtNroCasoMedico"    ,"txtNroCasoMedico","","Nro. Caso Medico") );


   var dataArrayMedico = new Array("MEDICO 1","MEDICO 2","MEDICO 3");
    html = html + html_colum4(10,25,1,25,"Médico:",form_input_text("bootstrap","txtTipNipMedico" ,"txtTipNipMedico" ,"","") ,"",form_input_select("bootstrap","Seleccione un valor","cmbMedico","cmbMedico",dataArrayMedico,"") );

    html = html + html_colum2(10,25,"Fecha Acto Medico"   ,form_input_text("bootstrap","txtFchActoMedico"    ,"txtFchActoMedico","","Fecha Acto Medico"));
	
	html = html + html_colum4(10,25,0,25,"Peso",form_input_text("bootstrap","txtpeso","txtpeso","","Peso"),"Estatura",form_input_text("bootstrap","txtEstatura" ,"txtEstatura" ,"","Estatura") );
    
    html = html + html_colum2(10,25,"Fecha Venc. Informe"   ,form_input_text("bootstrap","txtFchVencInforme"    ,"txtFchVencInforme","","Fecha Venc. Informe"));

    html = html + html_colum2(10,25,"Diagnostico"   ,form_input_text("bootstrap","txtDiagnostico"    ,"txtDiagnostico","","Diagnostico") );


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	document.getElementById( "title_section" ).innerHTML = "ACTOS MEDICOS ";
	document.getElementById( "js_content" ).innerHTML = html;

}



function f_diagnosticoTratamiento()
{
	var html = "";

	

	html = html + html_colum2(10,25,"Nro. Diag. Tratam"   ,form_input_text("bootstrap","txtDiagTratamiento"    ,"txtDiagTratamiento","","Nro. Diag. Tratam") );

   
	var dataArrayActoMedico = new Array("ACTO MEDICO 1","ACTO MEDICO 2","ACTO MEDICO 3");
    html = html + html_colum4(10,25,1,25,"Médico:",form_input_text("bootstrap","txtTipNipMedico" ,"txtTipNipMedico" ,"","") ,"",form_input_select("bootstrap","Seleccione un valor","cmbMedico","cmbMedico",dataArrayMedico,""));


    var dataArrayMedico = new Array("MEDICO 1","MEDICO 2","MEDICO 3");
    html = html + html_colum4(10,25,1,25,"Médico:",form_input_text("bootstrap","txtTipNipMedico" ,"txtTipNipMedico" ,"","") ,"",form_input_select("bootstrap","Seleccione un valor","cmbMedico","cmbMedico",dataArrayMedico,""));

    var dataArrayUnidad = new Array("UNIDADES 1","UNIDADES 2");
	html = html + html_colum4(10,25,0,25,"Nro. de Identificación",form_input_select("bootstrap","Seleccione un valor","cmbUnidad","cmbUnidad",dataArrayUnidad,""),"",form_input_text("bootstrap","txtunidad" ,"txtunidad" ,"",""));


   html = html + html_colum2(10,25,"Nota Diagnostico Trat.:"   ,form_input_text("bootstrap","txtNotaDiagTrat"    ,"txtNotaDiagTrat","","Nota Diagnostico Trat."));


   var dataArrayDiagnostico = new Array("DIAGNOSTICO 1","DIAGNOSTICO 2");
	html = html + html_colum4(10,25,0,25,"Diagnostico",form_input_select("bootstrap","Seleccione un valor","cmbDiagnostico","cmbDiagnostico",dataArrayDiagnostico,""));
	
	
	var dataArrayTratamiento = new Array("TRATAMIENTO 1","TRATAMIENTO 2");
	html = html + html_colum4(10,25,0,25,"Tratamiento",form_input_select("bootstrap","Seleccione un valor","cmbTratamiento","cmbTratamiento",dataArrayTratamiento,""));


	var dataArrayCausaEgreso = new Array("DEFUNCION","CAMBIO DE TRATAMIENTO","MEJORIA","CONVERSION","PERDIDA DEL BENEFICIO");
	html = html + html_colum4(10,25,0,25,"Fch. Egreso",form_input_text("bootstrap","txtFchEgreso","txtFchEgreso",""),"Causa Egreso",form_input_select("bootstrap","Seleccione un valor","cmbCausaEgreso","cmbCausaEgreso",dataArrayCausaEgreso,""));


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	document.getElementById( "title_section" ).innerHTML = "DIAGNOSTICO-TRATAMIENTO ";
	document.getElementById( "js_content" ).innerHTML = html;

}


function f_cicloTratamiento()
{
	var html = "";

	

	html = html + html_colum2(10,25,"Nro. Caso Medico"   ,form_input_text("bootstrap","txtCasoMedico"    ,"txtCasoMedico","","Nro. Caso Medico") );

   	html = html + html_colum2(10,25,"Nro. Acto Medico"   ,form_input_text("bootstrap","txtNroActoMedico"    ,"txtNroActoMedico","","Nro. Acto Medico") );
	
	var dataArrayTipoUnidad = new Array("TIPO UNIDAD 1","TIPO UNIDAD 2","TIPO UNIDAD 3");
		html = html + html_colum2(10,80,"Prestador Servicio (U.M.)",form_input_select("bootstrap","Seleccione un valor","cmbTipoUnidad","cmbTipoUnidad",dataArrayTipoUnidad,""));

	var dataArrayFrecTratamiento = new Array("MENSUAL");
	html = html + html_colum2(10,80,"Frecuencia Tratamiento",form_input_select("bootstrap","Seleccione un valor","cmbFrecTratamiento","cmbFrecTratamiento",dataArrayFrecTratamiento,""));


	var dataArrayZonaDistr = new Array("ZONA 1","ZONA 2","ZONA 3");
	html = html + html_colum2(10,80,"Zona Distribución Médica",form_input_select("bootstrap","Seleccione un valor","cmbZonaDist","cmbZonaDist",dataArrayZonaDistr,""));

	 html = html + html_colum2(10,25,"Fecha Inclusion Programa"   ,form_input_text("bootstrap","txtFchInclPrograma"    ,"txtFchInclPrograma","","Fecha Inclusion Programa"));


	 html = html + html_colum4(10,25,0,25,"Fecha Inicio Tratamiento",form_input_text("bootstrap","txtFchInicTrat","txtFchInicTrat",""),"Fecha Fin de Tratamiento",form_input_text("bootstrap","txtFchFinTrat","txtFchFinTrat",""));

	html = html + html_colum6(10,15,15,20,10,20,"Unidades Frec. Tratamiento",form_input_text("bootstrap","txtUnidadFrecTrat","txtUnidadFrecTrat",""),"Cantidad Sesiones",form_input_text("bootstrap","txtCantSesiones","txtCantSesiones","") ,"Duración sesión",form_input_text("bootstrap","txtDuraSesion","txtDuraSesion",""));


	 html = html + html_colum2(10,25,"Instrucciones del Tratamiento"   ,form_input_text("bootstrap","txtInstTratamiento"    ,"txtInstTratamiento","","Instrucciones del Tratamiento"));

	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	document.getElementById( "title_section" ).innerHTML = "CICLO TRATAMIENTO";
	document.getElementById( "js_content" ).innerHTML = html;

}





function f_kit()
{
	var html = "";

	
	var dataArrayCicloTratamiento = new Array("CICLO 1","CICLO 2","CICLO 3");
		html = html + html_colum2(10,80,"N° Ciclo Tratamiento",form_input_select("bootstrap","Seleccione un valor","cmbCicloTrat","cmbCicloTrat",dataArrayCicloTratamiento,""));
	
		html = html + html_colum2(10,25,"Nro. Acto Medico"   ,form_input_text("bootstrap","txtNroActoMedico"    ,"txtNroActoMedico","","Nro. Acto Medico") );

	var dataArraySuministro = new Array("SUMINISTRO 1","SUMINISTRO 2","SUMINISTRO 3");
		html = html + html_colum2(10,80,"Suministro",form_input_select("bootstrap","Seleccione un valor","cmbSuministro","cmbSuministro",dataArraySuministro,""));

	var dataArraySuministroPres = new Array("SUMINISTRO PRESENTACION 1","SUMINISTRO PRESENTACION 2","SUMINISTRO PRESENTACION 3");
		html = html + html_colum2(10,80,"Suministro Presentacion:",form_input_select("bootstrap","Seleccione un valor","cmbSuministroPre","cmbSuministroPre",dataArraySuministroPres,""));


	 html = html + html_colum4(10,25,0,25,"Cantidad",form_input_text("bootstrap","txtCantidad","txtCantidad",""),"Dosis Total Ciclo",form_input_text("bootstrap","txtDosisTotCiclo","txtDosisTotCiclo",""));

	html = html + html_colum2(10,25,"Días Tratamiento"   ,form_input_text("bootstrap","txtDiasTratamiento"    ,"txtDiasTratamiento","","Días Tratamiento") );

	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	document.getElementById( "title_section" ).innerHTML = "DETALLE DEL KIT";
	document.getElementById( "js_content" ).innerHTML = html;

}




function f_opiniones()
{
	var html = "";

	
	html = html + html_colum2(10,25,"Nro. Solicitud"   ,form_input_text("bootstrap","txtNroSolicitud"    ,"txtNroSolicitud","","Nro. Solicitud") );

	html = html + html_colum2(10,25,"Afiliado"   ,form_input_text("bootstrap","txtAfiliado"    ,"txtAfiliado","","Afiliado") );

	html = html + html_colum4(10,25,0,25,"Componente",form_input_text("bootstrap","txtComponente","txtComponente",""),"Grado",form_input_text("bootstrap","txtGrado","txtGrado",""));

	html = html + html_colum4(10,25,0,25,"Categoria",form_input_text("bootstrap","txtCategoria","txtCategoria",""),"Situación",form_input_text("bootstrap","txtSituacion","txtSituacion",""));



	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	document.getElementById( "title_section" ).innerHTML = "INCLUIR REEMBOLSO";
	document.getElementById( "js_content" ).innerHTML = html;

}