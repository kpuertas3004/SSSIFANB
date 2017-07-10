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
MNU[count(MNU)] = "Pensiones|Cambio de Situaci&oacute;n"
					+"#Calcula Pension Retiro:f_CalculoPensionRetiro"
					+"#Defici&oacute;n y Ajuste de Beneficiarios"
					+"#Medidas Judiciales"
					+"#Otras Operaciones de Pensi&oacute;n"
					+"#Reporte Pensi&oacute;n"
					+"#N&oacute;mina";




/*
Desarrollado por  :  Victor Manuel Suarez
Correo            :  victormst@gmail.com
Fecha Creacion    :  22-06-2017  
Fecha Modificacion:  22-06-2017  
Proposito       :  Despliegar el formulario de asociados
*/
function f_CalculoPensionRetiro(){

	var html = "";
/* */
	html = html + html_colum2(10,25,"Cedula",form_input_text("bootstrap","txtTipnip" ,"txtTipnip" ,"","Tipnip") )
	html = html + html_colum4(10,25,10,25,"Grado",form_input_text("bootstrap","txtGrado" ,"txtGrado" ,"","Grado") ,"Componente",form_input_text("bootstrap","txtComponente" ,"campo2" ,"","Componente") )
	html = html + html_colum4(10,25,10,25,"Situacion",form_input_text("bootstrap","txtSituacion" ,"txtSituacion" ,"","Situacion") ,"Categoria",form_input_text("bootstrap","txtCategoria" ,"txtCategoria" ,"","Categoria") )
	html = html + html_colum4(10,25,10,25,"Clase",form_input_text("bootstrap","txtClase" ,"txtClase" ,"","Clase") ,"Fecha Promocion",form_input_text("bootstrap","txtFechaPromocion" ,"txtFechaPromocion" ,"","Fecha Promocion") )
	html = html + html_colum4(10,25,10,25,"Fecha Ing. Componente",form_input_text("bootstrap","txtFechaIngresoComponente" ,"txtFechaIngresoComponente" ,"","Fecha Ingreso Componente") ,"Fecha Ultimo Ascenso",form_input_text("bootstrap","txtFechaUltimoAscenso" ,"txtFechaUltimoAscenso" ,"","Fecha Ultimo Ascenso") )
	html = html + html_colum2(10,25,"Fecha Retiro",form_input_text("bootstrap","txtFechaRetiro" ,"txtFechaRetiro" ,"","Fecha Retiro") )
	
	html = html + html_colum4(10,25,10,25,"Dias Vacaciones",form_input_text("bootstrap","txtDiasVacaciones" ,"txtDiasVacaciones" ,"","Dias Vacaciones") ,"Num. Hijos",form_input_text("bootstrap","txtNumeroHijos" ,"txtNumeroHijos" ,"","Numero Hijos") )
	html = html + html_colum4(10,25,10,25,"Inst.Financiera",form_input_text("bootstrap","txtCodigoInstitucionFinanciera" ,"txtCodigoInstitucionFinanciera" ,"","Institucion Financiera") ,"Nombre Banco","" )
	html = html + html_colum4(10,25,10,25,"Tipo Cuenta",form_input_text("bootstrap","txtCodigoTipoCuenta" ,"txtCodigoTipoCuenta" ,"","Tipo Cuenta") ,"Nombre Tipo Cuenta","" )
	html = html + html_colum2(10,25,"Pension Asignada",form_input_text("bootstrap","txtPensionAsignada" ,"txtPensionAsignada" ,"","Pension Asignada") )
	html = html + html_colum2(10,25,"Estatus",form_input_text("bootstrap","txtEstatus" ,"txtEstatus" ,"","Estatus") )
	html = html + html_colum2(10,25,"Razon",form_input_text("bootstrap","txtRazon" ,"txtRazon" ,"","Razon") )




	html = html + html_colum2(20,80,""   ,"<br><br><br>");
	html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );

	document.getElementById( "title_section" ).innerHTML = "Este es el titulo del Modulo 1";
	document.getElementById( "js_content" ).innerHTML = html;
}

