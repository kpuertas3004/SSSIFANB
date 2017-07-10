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
MNU[count(MNU)] = "Deducciones| Retenciones:[Incluir*f_deducciones_retenciones#Carga Deducciones en lotes:f_deducciones_en_lotes";



/*
Desarrollado por  :  Carlos E. Montero C.
Correo            :  Carlosmontero1991@gmail.com
Fecha Creacion    :  26-06-2017 
Fecha Modificacion:  26-06-2017   
Proposito       :  Despliegar el formulario de asociados
*/
function f_deducciones_retenciones()
{
	var html = "";




	 html = html + html_colum2(10,25,"Persona",form_input_text("bootstrap","txtPersona" ,"txtPersona" ,""," V - Incluir Persona"));
     html = html + html_colum4(10,10,10,25,"Fecha de Retención",form_input_text("bootstrap","txtFechaRetencion" ,"txtFechaRetencion" ,""," Fecha de Retención") ,"Componente",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Introduzca el Componente") )		 

	
     html = html + html_colum4(10,10,10,25,"Codigo Concepto",form_input_text("bootstrap","txtCodigoConcepto" ,"txtCodigoConcepto" ,"","Codigo Concepto") ,"",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Introduzca el Codigo ") )		 

     html = html + html_colum4(10,10,10,25,"Monto Retención",form_input_text("bootstrap","txtMontoRetencion" ,"txtMontoRetencion" ,""," Monto Retención") ,"Origen",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Introduzca el Componente") )		 
    
	 html = html + html_colum2(10,25,"Descripción",form_input_text("bootstrap","textDescripcion" ,"textDescripcion" ,"","Descripción") );


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Este es el titulo del Modulo 1";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f_deducciones_en_lotes()
{
	var html = "";

    //html = html + html_colum2(20,80,""  ,"");

	html = html + html_colum2(30,25,"Fecha Retención",form_input_text("bootstrap","txtFechaRetencion" ,"txtFechaRetencion" ,""," Fecha de Retención"));


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum4(20,10,20,2,"",form_boton_guadar("Iniciar Subida") ,"",form_boton_guadar("Cancelar Subida"));         

	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Carga de Deducciones en lotes";
	document.getElementById( "js_content" ).innerHTML = html;
}


function f1__1_3()
{
	var html = "";

	html = html + html_colum2(20,80,"Cedula",form_input_text("bootstrap","cedula" ,"cedula" ,"","Cedula de Identidad") );

	html = html + html_colum2(20,80,"NIT"   ,form_input_text("bootstrap","nit"    ,"nit"    ,"","NIT") );

	html = html + html_colum2(20,80,"Nombre",form_input_text("bootstrap","nombre" ,"nombre" ,"","Nombre") );

	var dataArray = new Array("Civil","Militar","Religioso","Otro");

	html = html + html_colum2(20,80,"Tipo Persona",form_input_select("bootstrap","Seleccione un valor","nombre3","nombre3",dataArray,"-") );

	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	

	document.getElementById( "title_section" ).innerHTML = "Este es el titulo del Modulo 3";
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

