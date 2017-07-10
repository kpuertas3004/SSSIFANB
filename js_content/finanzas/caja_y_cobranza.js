/*
Desarrollado por  :  Tte. Franklin Flores
Correo            :  franklinflores16@gmail.com  
Fecha Creacion    :  01-07-2017  
Fecha Modificacion:  01-07-2017  
*/
//Dynamic Menu System
//*MNU[count(MNU)] = " CAJA Y COBRANZA | Sesion de Caja, Caja, Otras Operciones Cobranza" ";

///SECCION DE CAJA 

function f_abrirsesionCaja()
{
	var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br><br><br>");

    html += html_colum2(30,20,"Canal de Pago",form_input_text("bootstrap","txttipocuenta" ,"txttipocuenta" ,""," Canal de pago"));

    html += html_colum2(30,20,"Monto de Apertura",form_input_text("bootstrap","txttipocuenta" ,"txttipocuenta" ,""," Monto de apertura"));

    html += html_colum2(30,40,"Nota"   ,form_input_textarea("bootstrap","txtNota"    ,"txtNota"    ,"","Nota") );

    html += html_colum2(20,80,""   ,"<br><br><br><br>");
    html += html_colum2(20,80,""   ,"<br><br><br><br>");

    html += html_colum2(30,20,"Instrumento de Pago",form_input_text("bootstrap","txtinstpago" ,"txtinstpago" ,""," instrumento de pago"));

    html += html_colum2(30,20,"Monto",form_input_text("bootstrap","txtmonto" ,"txtmonto" ,""," Monto"));


    html += html_colum2(32,20,""   ,form_boton_guadar("AGREGAR	"));

    html += html_colum2(20,80,""   ,"<br><br>");

    D = new Array("Mostrar Todos","Cogido Tipo de credito","Tipo de Credito");
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);

    html += html_colum4(15,15,15,20,"",input1 ,input2,form_boton_guadar("Mostrar"));

	$("#title_section").html("Abrir Sesion de Caja");
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_cerrarsesionCaja()
{
    var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br>");

    html += html_colum2(45,20,"Confirmar que desea Cerrar Sesion de Caja?","");
    
    html += html_colum4(20,7,5,20,""   ,form_boton_guadar("Aceptar"), "",form_boton_guadar("Cancelar"));

    
    $("#title_section").html("Cerrar Sesion de Caja");
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_reabrirsesionCaja()
{
    var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br>");

    html += html_colum2(20,20,"Usuario",form_input_text("bootstrap","txtusuario" ,"txtusuario" ,""," Usuario"));
    html += html_colum2(20,20,"Contraseña",form_input_text("bootstrap","txtcontraseña" ,"txtcontraseña" ,""," Contraseña"));

    html += html_colum2(20,80,""   ,"<br><br><br><br>");
    
    html += html_colum4(15,7,5,20,""   ,form_boton_guadar("Aceptar"), "",form_boton_guadar("Cancelar"));

    
    $("#title_section").html("Reabrir Sesion de Caja");
    document.getElementById( "js_content" ).innerHTML = html;
}


//"CAJA 

function f_intrpago()
{
	var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br><br><br>");

    html += html_colum4(20,25,8,25,"Instrumento Pago",form_input_text("bootstrap","txtpago","txtpago","",""),"Monto",form_input_text("bootstrap","txtmonto","txtmonto","","") );

    html += html_colum4(20,25,8,25,"Institucion financiera",form_input_text("bootstrap","txtinstfinanciera","txtinstfinanciera","",""),"Nro Cuenta",form_input_text("bootstrap","txtcuenta","txtcuenta","","") );

    html += html_colum4(20,25,8,25,"Tipo Cuenta",form_input_text("bootstrap","txttipocuenta","txttipocuenta","",""),"Nro.Ref./Instrum",form_input_text("bootstrap","txtnro","txtnro","","") );

    html += html_colum4(20,25,8,25,"Fecha Emision",form_input_text("bootstrap","txtemision","txtemision","",""),"Fecha Venc",form_input_text("bootstrap","txtvenc","txtvenc","","") );

    html += html_colum2(20,40,"Nota"   ,form_input_textarea("bootstrap","txtNota"    ,"txtNota"    ,"","Nota") );

    html += html_colum2(20,80,""   ,"<br><br><br><br>");
    html += html_colum2(20,80,""   ,"<br><br><br><br>");

    D = new Array("Mostrar Todos");
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);

    html += html_colum4(20,15,15,20,"",input1 ,input2,form_boton_guadar("Mostrar"));


	$("#title_section").html("Inst. Pago");
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_ctasxCobrar()
{
	var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br>");

    html += html_colum2(45,20,"Monto Capital Total","");
    D = new Array("Mostrar Todos");
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);
    html += html_colum4(20,15,15,10,"",input1 ,input2,form_boton_guadar("MOSTRAR"));

    html +=  html_colum2(20,20,""   ,"<br>");

    html += html_colum2(45,20,"Monto Interes Total","");
    D = new Array("Mostrar Todos");
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);
    html += html_colum4(20,15,15,10,"",input1 ,input2,form_boton_guadar("Mostrar"));

	$("#title_section").html("Busq.CtasXCobrar");
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_amortizacionCapital()
{
	var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br>");

    html += html_colum2(30,20,"Monto a Amortizar",form_input_text("bootstrap","txtamortizar" ,"txtamortizar" ,""," Monto a Amortizar"));
    html += html_colum2(30,20,"Credito de Amortizar",form_input_text("bootstrap","txtamortizar" ,"txtamortizar" ,""," Credito a Amortizar"));

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum4(25,8,1,10,""   ,form_boton_guadar("CALCULAR"),"",form_boton_guadar("ACEPTAR"));

    html +=  html_colum2(20,80,""   ,"<br><br>");

    html += html_colum2(30,20,"Monto Interes",form_input_text("bootstrap","txtainteres" ,"txtainteres" ,""," Monto Interes"));
    html += html_colum2(30,20,"Pago Capital",form_input_text("bootstrap","txtcapital" ,"txtcapital" ,""," Pago Capital"));
    html += html_colum2(30,20,"Monto Total",form_input_text("bootstrap","txttotal" ,"txttotal" ,""," Monto Total"));
    
    html +=  html_colum2(20,80,""   ,"<br><br>");

    D = new Array("Mostrar Todos",);
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);
    html += html_colum4(20,15,15,10,"",input1 ,input2,form_boton_guadar("Mostrar"));

	$("#title_section").html("Amortización a Capital");
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_amortizacionCapitalgiros()
{
	var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br>");

    html += html_colum2(30,20,"Monto a Amortizar",form_input_text("bootstrap","txtamortizar" ,"txtamortizar" ,""," Monto a Amortizar"));
    html += html_colum2(30,20,"Credito de Amortizar",form_input_text("bootstrap","txtamortizar" ,"txtamortizar" ,""," Credito a Amortizar"));
    html += html_colum2(30,20,"Giro de Amortizar",form_input_text("bootstrap","txtamortizar" ,"txtamortizar" ,""," Giro a Amortizar"));

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum4(22,10,8,10,"",form_boton_guadar("Calcular"),form_boton_guadar("Aceptar"),form_boton_guadar("Limpiar"));

    html +=  html_colum2(20,80,""   ,"<br><br>");

    html += html_colum2(30,20,"Monto Interes",form_input_text("bootstrap","txtainteres" ,"txtainteres" ,""," Monto Interes"));
    html += html_colum2(30,20,"Pago Capital",form_input_text("bootstrap","txtcapital" ,"txtcapital" ,""," Pago Capital"));
    html += html_colum2(30,20,"Monto Total",form_input_text("bootstrap","txttotal" ,"txttotal" ,""," Monto Total"));
    
    html +=  html_colum2(20,80,""   ,"<br><br>");

    D = new Array("Mostrar Todos",);
	input1 = form_input_select("-","-","VE","VE",D);
	input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);
    html += html_colum4(20,15,15,10,"",input1 ,input2,form_boton_guadar("Mostrar"));

	$("#title_section").html("Amortización a Capital (Giros)");
	document.getElementById( "js_content" ).innerHTML = html;
}

function f_generacionCuentacobrar()
{
    var html = "";
    
    html +=  html_colum2(20,80,""   ,"<br>");

    html += html_colum4(15,20,8,25,"Nro.Cta Cobrar",form_input_text("bootstrap","txtcobrar","txtcobrar","","Nro cuenta"),"Monto Total de Regiones",form_input_text("bootstrap","txtregiones","txtcregiones","","Monto de Regiones") );
    html += html_colum4(15,20,8,25,"Fecha Emision",form_input_text("bootstrap","txtemision","txtemision","","fecha Emision"),"Fecha Vencimiento",form_input_text("bootstrap","txtvenc","txtvenc","","Fecha de Vencimiento") );

    html += html_colum2(20,80,""   ,"<br><br><br>");

    html += html_colum4(15,20,8,25,"Concepto",form_input_text("bootstrap","txtconcepto","txtconcepto","","Concepto"),"Subconcepto",form_input_text("bootstrap","txtconcepto","txtconcepto","","Subconcepto") );
    html += html_colum6(15,9,9,20,10,20,"Monto",form_input_text("bootstrap","txtmonto","txtmonto","","Monto"),"Cantidad",form_input_text("bootstrap","txtcantidad","txtFechaRegistro","","Cantidad"),"Monto Total",form_input_text("bootstrap","txttotal","txttotal","","Monto Total"));

    html += html_colum2(20,80,""   ,"<br><br>");
    html += html_colum4(20,7,5,20,""   ,form_boton_guadar("Adicionar Region"), "",form_boton_guadar("Eliminar Region"));

    html += html_colum2(20,80,""   ,"<br><br><br>");
    html += html_colum2(25,8,""   ,form_boton_guadar("Cerrar cuenta por Cobrar"));

    html +=  html_colum2(20,80,""   ,"<br><br>");

    D = new Array("Mostrar Todos",);
    input1 = form_input_select("-","-","VE","VE",D);
    input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);
    html += html_colum4(15,15,15,10,"",input1 ,input2,form_boton_guadar("Mostrar"));

    $("#title_section").html("Generacion De Cuentas Por Cobrar");
    document.getElementById( "js_content" ).innerHTML = html;
}

// Otras Operaciones Cobranza

