/*
Desarrollado por  :  Victor Manuel Suarez
Correo            :  victormst@gmail.com
Modifcado    por  :  
Correo persona mod:  
Fecha Creacion    :  22-06-2017  
Fecha Modificacion:  22-06-2017  
Descripcion       :  Despliega los formularios del modulos de afiliacion
*/


//Dynamic Menu System
MNU[count(MNU)] = "Afiliación|Menu1:f1__1_1#Menu2:f1__1_2#Menu3:f1__1_3#Menu4:f1__1_4";



/*
Desarrollado por  :  Victor Manuel Suarez
Correo            :  victormst@gmail.com
Fecha Creacion    :  22-06-2017  
Fecha Modificacion:  22-06-2017  
Proposito       :  Despliegar el formulario de asociados
*/
function f1__1_1()
{
	var html = "";

	html = html + html_colum2(20,80,"Cedula",form_input_text("bootstrap","cedula" ,"cedula" ,"","Cedula de Identidad") );

	html = html + html_colum2(20,80,"NIT"   ,form_input_text("bootstrap","nit"    ,"nit"    ,"","NIT") );

	html = html + html_colum2(20,80,"Nombre",form_input_text("bootstrap","nombre" ,"nombre" ,"","Nombre") );

	var dataArray = new Array("Civil","Militar","Religioso","Otro");
	html = html + html_colum2(20,80,"Tipo Persona",form_input_select("bootstrap","Seleccione un valor","nombre1","nombre1",dataArray,"") );

	var dataArray = new Array("Teniente","Mayor","Coronel","General");
	html = html + html_colum2(20,80,"Grado",form_input_select("bootstrap","Seleccione un valor","grado1","grado1",dataArray,"-") );



	html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )
	html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )
	html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )
	html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )




	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Este es el titulo del Modulo 1";
	document.getElementById( "js_content" ).innerHTML = html;
}



function f1__1_2()
{
	var html = "";

	html = html + html_colum2(20,80,"Otro Campo 1",form_input_text("bootstrap","cedula" ,"cedula" ,"","Otro Campo 1") );

	html = html + html_colum2(20,80,"Otro Campo 2"   ,form_input_text("bootstrap","nit"    ,"nit"    ,"","Otro Campo 2") );

	html = html + html_colum2(20,80,"Otro Campo 3",form_input_text("bootstrap","nombre" ,"nombre" ,"","Otro Campo 3") );


	var dataArray = new Array("Civil 2","Militar 3","Religioso 4","Otro 5");
	html = html + html_colum2(20,80,"Tipo Persona",form_input_select("bootstrap","Seleccione un valor","nombre2","nombre2",dataArray,"-") );


	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Este es el titulo del Modulo 2";
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

