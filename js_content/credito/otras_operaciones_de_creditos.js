/*
Desarrollado por  :  Carlos E. Montero C.
Correo            :  Carlosmontero1991@gmail.com
Modifcado    por  :  
Correo persona mod:  
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  espliega los formularios del modulos de cuidado Integral de la Salud, deducciones
*/


//Dynamic Menu System
MNU[count(MNU)] = "Otras Operaciones | Liquidar Credito:f_liquidarCred#Liquidación Masiva:f_liquidacionMasiva#Parcelas de Cementerio:[Incluir*f_parcelasCementerios";



/*
Desarrollado por  :  Carlos E. Montero C.
Correo            :  Carlosmontero1991@gmail.com
Fecha Creacion    :  26-06-2017 
Fecha Modificacion:  26-06-2017   
Proposito       :  Despliegar el formulario de asociados
*/
function f_liquidarCred()
{
	var html = "";


    var dataArrayTipNip = new Array("-------------","Mostrar Todos","Archivos","SEP","Estatus","Mensajes","Selección");
	html = html + html_colum4(10,25,0,25,"",form_input_select("bootstrap","Seleccione un Valor","cmb_liquidarCredito","cmb_liquidarCredito",dataArrayTipNip,""),"",form_input_text("bootstrap","txtliquidar_Credito" ,"txtliquidarCredito" ,"Liquidar credito") );


	 html = html + html_colum2(10,25,"Persona",form_input_text("bootstrap","txtPersona" ,"txtPersona" ,""," V - Incluir Persona"));
     html = html + html_colum4(10,10,10,25,"Fecha de Retención",form_input_text("bootstrap","txtFechaRetencion" ,"txtFechaRetencion" ,""," Fecha de Retención") ,"Componente",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Introduzca el Componente") )		 

	
     html = html + html_colum4(10,10,10,25,"Codigo Concepto",form_input_text("bootstrap","txtCodigoConcepto" ,"txtCodigoConcepto" ,"","Codigo Concepto") ,"",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Introduzca el Codigo ") )		 

     html = html + html_colum4(10,10,10,25,"Monto Retención",form_input_text("bootstrap","txtMontoRetencion" ,"txtMontoRetencion" ,""," Monto Retención") ,"Origen",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Introduzca el Componente") )		 
    
	 html = html + html_colum2(10,25,"Descripción",form_input_text("bootstrap","textDescripcion" ,"textDescripcion" ,"","Descripción") );


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Liquidar Crédito";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f_liquidacionMasiva()
{
	var html = "";

    html = html + html_colum2(20,80,""   ,"<br><br><br>");

         html = html + html_colum6(10,15,10,15,10,15,"Fecha Inicial ",form_input_text("bootstrap","txtFechaInicial" ,"txtFechaInicial" ,""," Fecha Inicial") ,"Fecha Final",form_input_text("bootstrap","txtFechaFinal" ,"txtFechaFinal" ,"","Fecha Final") ,"Tipo de Credito",form_input_text("bootstrap","txtTipoCredito" ,"txtTipoCredito" ,"","Tipo Credito") );         


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

	html = html + html_colum2(30,25,"Número de Proceso",form_input_text("bootstrap","txtNumeroProceso" ,"txtNumeroProceso" ,""," Número de Proceso"));
    
    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    html = html + html_colum4(15,20,15,20,"Créditos Seleccionados",form_input_text("bootstrap","txtCreditosSelec" ,"txtCreditosSelec" ,""," Creditos Seleccionados") ,"Monto a Liquidar",form_input_text("bootstrap","txtMontoLiquidar" ,"txtMontoLiquidar" ,"","Monto a liqudar") )         

    html = html + html_colum4(15,20,15,20,"Total Créditos",form_input_text("bootstrap","txtTotalCredotos" ,"txtTotalCreditos" ,""," Total Creditos Seleccionados") ,"Monto a Liquidar",form_input_text("bootstrap","txtMontoLiquidar" ,"txtMontoLiquidar" ,"","Monto a liqudar") )         

//COMBOX
html = html + html_colum2(20,80,""   ,"<br><br><br>");
	
    html = html + html_colum6(10,20,10,20,10,20,"",form_input_text("bootstrap","txtCoboLiquidacion" ,"txtCoboLiquidacion" ,"","Mostrar Todos") ,"",form_input_text("bootstrap","txtMostrar" ,"txtMostrar" ,"","Consulta"),"",form_boton_guadar("Iniciar Subida"));       

      

	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Liquidación Masivas";
	document.getElementById( "js_content" ).innerHTML = html;
}


function f_parcelasCementerios()
{
	var html = "";
    
    html = html + html_colum2(20,80,""   ,"<br><br><br>");


    html = html + html_colum4(15,20,15,20,"Cementerio",form_input_text("bootstrap","txtCementerio" ,"txtCementerio" ,""," Cementerio") ,"Parcela",form_input_text("bootstrap","txtParcela" ,"txtParcela" ,"","Parcela") );         

    html = html + html_colum2(20,80,""   ,"<br><br><br>");

	html = html + html_colum2(30,25,"Tipo de Parcela",form_input_text("bootstrap","testTipoParcela" ,"txtTipoParcela" ,"","Tipo de Parcela") );

    html = html + html_colum2(20,80,""   ,"<br><br><br>");

	html = html + html_colum2(20,40,"Ente Vendedor" ,form_input_text("bootstrap","txtVendedor"    ,"TxtVendedor"    ,"","Ente Vendedor"));

    
    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    
    html = html + html_colum4(15,20,15,20,"Valor de Adquisición",form_input_text("bootstrap","txtValorAquisicion" ,"txtValorAquisicion" ,"","Valor de Adquisición") ,"Valor de Asignación",form_input_text("bootstrap","txtValorAsignacion" ,"txtValorAsignacion" ,"","Valor de Asignación"));         

    html = html + html_colum4(15,20,15,20,"Fecha de Adquisición",form_input_text("bootstrap","txtFechaAquisicion" ,"txtFechaAquisicion" ,"","Fecha de Adquisición") ,"Fecha de Asignación",form_input_text("bootstrap","txtFechaAsignacion" ,"txtFechaAsignacion" ,"","Fecha de Asignación"));         



    html = html + html_colum4(15,20,15,20,"Operaciones de Contado",form_input_text("bootstrap","txtOperacionesContado" ,"txtOperacionesContado" ,"","Operaciones de Contado") ,"Exonerada",form_input_text("bootstrap","txtExonerada" ,"txtExonerada" ,"","Exonerada"));         
    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    html = html + html_colum4(20,20,10,20,"Solicitante",form_input_text("bootstrap","txtSolicitante" ,"txtSolicitante" ,"","Solicitante") ,"",form_input_text("bootstrap","txtSoli" ,"txtSoli" ,"","Solicitante"));         
    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,25,"Nº Crédito",form_input_text("bootstrap","txtNcredito" ,"txtNCredito" ,"","Nº Crédito") );


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	

	document.getElementById( "title_section" ).innerHTML = "Parcelas de Cementerio";
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_Banavih()
{
	var html = "";
    
    html = html + html_colum2(20,80,""   ,"<br><br><br>"); 
    
    html = html + html_colum2(25,30,"Rango de Fecha"   ,"");
	
	html = html + html_colum4(15,20,15,20,"Fecha Inicio",form_input_text("bootstrap","txtFechaInicio" ,"txtFechaInicio" ,"","Fecha de Inicio") ,"Fecha Fin",form_input_text("bootstrap","txtFechaFinal" , "txtFechaFinal" ,"","Fecha de Fin"));         
	
	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	
	html = html + html_colum2(32,20,""   ,form_boton_guadar("GENERAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Proceso Generar Archivo Credito Banavih";
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_Asignaciondepermisos()
{
	var html = "";
    
    html += html_colum2(20,80,""   ,"<br><br>"); 
    
	html += html_colum2(30,20,"Login Usuario",form_input_text("bootstrap","txtLoginusuario" ,"txtLoginusuario" ,""," Usuario"));

	html += html_colum2(30,20,"Tipo de credito",form_input_text("bootstrap","txtTipoCredito" ,"txtTipoCredito" ,""," Tipo de credito"));

    html += html_colum2(20,80,""   ,"<br><br>");

D = new Array("Mostrar Todos","Cogido Tipo de credito","Tipo de Credito");
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);

    html += html_colum4(20,15,15,20,"",input1 ,input2,form_boton_guadar("MOSTRAR"));
	
	$("#title_section").html("Asignacion de Permisos");
	document.getElementById( "js_content" ).innerHTML = html;
} 


function f_Cambiodecuentacxp()
{
	var html = "";
    
    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    css1 = "width:20%;text-align:right;";
	css2 = "width:45%;";
	css3 = "width:45%;";

	html = html + "<table border='0' style='width:100%;'  >";


	D = new Array("...","V","E")
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);

   html += html_colum4(30,5,10,20,"Persona",input1 ,input2,"");         

   html += html_colum2(30,20,"Tipo de credito",form_input_text("bootstrap","txtTipoCredito" ,"txtTipoCredito" ,""," Tipo de credito"));

   html += html_colum2(30,20,"Inst Financiera",form_input_text("bootstrap","txtinstfinanciera" ,"txtinstfinanciera" ,""," Inst Financiera"));

   html += html_colum2(30,20,"Tipo de Cuenta",form_input_text("bootstrap","txttipocuenta" ,"txttipocuenta" ,""," Tipo de Cuenta"));

   html += html_colum2(30,35,"Nro de Cuenta",form_input_text("bootstrap","txtnrodecuenta" ,"txtnrodecuenta" ,""," Número de Cuenta"));

	html += html_colum2(20,80,""   ,"<br><br>");

	html += html_colum6(25,10,10,1.5,10,10,"",form_boton_guadar("CAMBIAR"),form_boton_guadar("MOSTRAR"),form_input_checkbox("bootstrap","chkDatostodos" ,"chkDatostodos" ,"",""),"Seleccionar Todos","");


	D = new Array("Mostrar Todos","Nro.Pago","Fecha de Pago","Monto","Inst.Financiera","Tipo de Cuenta");
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);

    html += html_colum4(25,15,10,20,"",input1 ,input2,form_boton_guadar("MOSTRAR"));

	$("#title_section").html("Cambio de Nro de Cuenta CXP");
	document.getElementById( "js_content" ).innerHTML = html;
}


function f1__1_4()
{
	var html = "";

	html = html + html_colum2(20,80,"Cedula",form_input_text("bootstrap","cedula" ,"cedula" ,"","Cedula de Identidad") );

	html = html + html_colum2(20,80,"NIT"   ,form_input_text("bootstrap","nit"    ,"nit"    ,"","NIT") );

	html = html + html_colum2(20,80,"Nombre",form_input_text("bootstrap","nombre" ,"nombre" ,"","Nombre") );

	var dataArray = new Array("Civil","Militar","Religioso","Otro");

	html = html + html_colum2(20,80,"Tipo Persona",form_input_select("bootstrap","Seleccione un valor","nombre4","nombre4",dataArray,"-") );

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	

	document.getElementById( "title_section" ).innerHTML = "Este es el titulo del Modulo 4";
	document.getElementById( "js_content" ).innerHTML = html;
}

