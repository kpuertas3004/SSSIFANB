/*
Desarrollado por  :  Jesuline K. Teran U.
Correo            :  katterine_170@hotmail.com
Modifcado    por  :  
Correo persona mod:  
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de Crédito
*/


//Dynamic Menu System


MNU[count(MNU)] = "Credito|Credito#Incluir:f_incluirCredito"
						+"#Datos Basicos:f_datosBasicos" 
						+"#Datos Particulares:f_datosParticulares"
						+"#CreditoPartes:f_creditoPartes"
						+"CreditoPartes (Aprobación):f_ CreditoPartesAprobacion"
						+"CreditoPartes (Liquidación):f_CreditoPartesLiquidacion"
						+"Fiadores:f_Fiadores"
						+"Anotaciones:f_Anotaciones"
						+"Generar Cuotas:f_GenerarCuotas"
						+"Proceso de Liquidación:f_ProcesoLiquidacion"
						+"Proceso de Liquidación (Otorgamiento):f_ProcesoOtorgamiento"
						+"Compromisos y Otorgamiento de Crédito:f_CompromisoOtorgamiento"
						+"Declinar Crédito:f_DeclinarCredito"
						+"Reabrir Crédito:f_ReabrirCredito"
						+"Cierre de Crédito (Cancelar):f_CierreCredito";



/*
Desarrollado por  :  Jesuline K. Teran U.
Correo            :  katterine_170@hotmail.com
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  Despliega los formularios del modulos de Crédito
*/
function f_incluirCredito()
{
	var html = "";

	html = html + html_colum4(10,15,0,25,"Solicitante:",form_input_text("bootstrap","txtSolicitante" ,"txtSolicitante" ,"","Solicitante") ,"Componente:",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Componente") );

	html = html + html_colum6(10,20,15,18,15,20,"Categoria:",form_input_text("bootstrap","txtCategoria" ,"txtCategoria" ,"","Categoria") ,"Grado:",form_input_text("bootstrap","txtGrado" ,"txtGrado" ,"","Grado"),"Situacion:",form_input_text("bootstrap","txtSituacion" ,"txtSituacion" ,"","Situacion"));

    html = html + html_colum4(10,25,10,25,"Fch. Ingr. Comp.",form_input_text("bootstrap","txtFchaIngresoComponente" ,"txtFchaIngresoComponente" ,"","Fecha Ingeso Componente",false) ,"Tiempo de Servicio:",form_input_text("bootstrap","txtTiempo de Servicio" ,"txtTiempo de Servicio" ,"","Tiempo de Servicio") );


    html = html + html_colum4(10,25,0,25,"", "" ,"","" );

	var dataArrayTipoCredito = new Array("PERSONAL","VEHICULO","VACACIONAL","COMPUTADORA");

	html = html + html_colum6(10,20,15,18,15,20,"Nro Solicitud:",form_input_text("bootstrap","txtSolicitud" ,"txtSolicitud" ,"","# Solicitud") ,"Tipo de Credito:",form_input_select("bootstrap","Seleccione un valor","cmbTipoCredito","cmbTipoCredito",dataArrayTipoCredito,""),"Feha:",form_input_text("bootstrap","txtFecha" ,"txtSFecha" ,"","Fecha"));

	html = html + html_colum6(10,20,15,18,15,20,"Monto:",form_input_text("bootstrap","txtMonto" ,"txtMonto" ,"","Monto") ,"Plazo (Meses):",form_input_text("bootstrap","txtPlazo(Meses)" ,"txtPlazo(Meses)" ,"","Plazo"),"Cuotas:",form_input_text("bootstrap","txtCuotas" ,"txtCuotas" ,"","Cuotas"));


 	html = html + html_colum4(10,25,0,25,"", "" ,"","" );

 	html = html + html_colum2(10,20,"Nro Credito",form_input_text("bootstrap","txtCredito" ,"txtCredito" ,"","Numero de Credito") );

 	html = html + html_colum6(10,20,15,18,15,20,"Fecha Apertura:",form_input_text("bootstrap","txtFecha Apertura" ,"txtFecha Apertura" ,"","Fecha Apertura") ,"Fecha Revision Junta:",form_input_text("bootstrap","txtFecha Revision Junta" ,"txtFecha Revision Junta" ,"","Fecha Revision Junta"),"Situacion:",form_input_text("bootstrap","txtSituacion" ,"txtSituacion" ,"","Situacion"));
	
	html = html + html_colum6(10,20,15,18,15,20,"Fecha Recomend:",form_input_text("bootstrap","txtFechaRecomend" ,"txtFechaRecomend" ,"","Fcha Recomendacion") ,"Fecha Aprobacion:",form_input_text("bootstrap","txtFechaAprobacion" ,"txtFcha.Aprob" ,"","Aprobado"),"Fecha por Liquidar:",form_input_text("bootstrap","txtFechaLiquidar" ,"txtFechaLiquidar" ,"","Fecha por Liquidar"));
	
	html = html + html_colum6(10,20,15,18,15,20,"Monto Recomend:",form_input_text("bootstrap","txtMonto Recomendado" ,"txtMonto Recomendado" ,"","Monto.Recomendado") ,"Monto Aprobado:",form_input_text("bootstrap","txtMontoAprobado" ,"txtMontoAprobado" ,"","Monto.Aprob"),"Monto por Liquidar:",form_input_text("bootstrap","txtMontoporLiquidar" ,"txtMontoporLiquidar" ,"","Monto. por Liquidar"));
	
	html = html + html_colum6(10,20,15,18,15,20,"Tipo Interes:",form_input_text("bootstrap","txtTipo Interes" ,"txtTipo Interes" ,"","Tipo Interes") ,"Interes:",form_input_text("bootstrap","txtInteres" ,"txtInteres" ,"","Interes"),"Fecha Liquidacion:",form_input_text("bootstrap","txtFecha Liquidacion" ,"txtFecha Liquidacion" ,"","Fecha.Liquidacion"));
     
	html = html + html_colum2(10,20,"Cuotas Aprobadas:",form_input_text("bootstrap","txtCuotasAprobadas" ,"txtCuotasAprobadas" ,"","Cuotas Aprobadas") );
	html = html + html_colum2(10,20,"Nro Proceso",form_input_text("bootstrap","txtNroProceso" ,"txtNroProceso" ,"","NroProceso") );
   
    html = html 


	document.getElementById( "title_section" ).innerHTML = "Datos Solicitante";
	document.getElementById( "js_content" ).innerHTML = html;



}

function f_datosBasicos()
{
	var html = "";

	html = html + html_colum4(20,25,0,25,"Sueldo/Pension:",form_input_text("bootstrap","txtSueldo/Pension" ,"txtSueldo/Pension" ,"","Sueldo/Pension",false) ,"Ingreso Adicionales:",form_input_text("bootstrap","txtIngreso Adicionales:" ,"txtIngreso Adicionales:" ,"","Ingreso Adicionales:") );

	html = html + html_colum2(20,70,"Justificacion Ingresos Adicionales:",form_input_text("bootstrap","txtJustificacion Ingresos Adicionales" ,"txtJustificacion Ingresos Adicionales","","Justificacion Ingresos Adicionales",false));
	
	html = html + html_colum4(15,20,0,20,"", "" ,"","" );

	var dataArray = new Array("PERSONAL","PROPIA","PROPIA");
	html = html + html_colum4(20,25,0,25,"Vivienda:", "","Situac.Vivienda:",form_input_select("bootstrap","txtSituac.Vivienda" ,"txtSituac.Vivienda", dataArray,""));


	html = html + html_colum4(15,20,0,20,"", "" ,"","" );

	html = html + html_colum4(20,25,0,25,"Unidad:",form_input_text("bootstrap","txtUnidad" ,"txtUnidad" ,"","Unidad",false) ,"Ubicacion:",form_input_text("bootstrap","txtUbicacion:" ,"txtUbicacion:" ,"","Ubicacion") );

	html = html + html_colum4(15,20,0,20,"", "" ,"","" );

	html = html + html_colum2(20,25,"Cedula:",form_input_text("bootstrap","txtCedula" ,"txtCedula","","Cedula",false));

	html = html + html_colum4(20,25,0,25,"Trabaja:",form_input_text("bootstrap","txtTrabaja" ,"txtTrabaja" ,"","Trabaja",false) ,"Ingresos:",form_input_text("bootstrap","txtIngresos:" ,"txtIngresos:" ,"","Ingresos") );

	html = html + html_colum4(20,25,0,25,"Fch.Ingresos:",form_input_text("bootstrap","txtFch.Ingresos" ,"txtFch.Ingresos" ,"","Fch.Ingresos",false) ,"Empleador:",form_input_text("bootstrap","txtEmpleador:" ,"txtEmpleador:" ,"","Empleador") );

	html = html + html_colum4(20,25,0,25,"Direccion de Empleador:",form_input_text("bootstrap","txtDireccion de Empleador" ,"txtDireccion de Empleador" ,"","Fch.Ingresos",false) ,"Telefono de Empleador:",form_input_text("bootstrap","txtTelefono de Empleador:" ,"txtTelefono de Empleador:" ,"","Telefono de Empleador") );
    
	html = html + html_colum4(20,25,0,25,"Ingreso Familiar:",form_input_text("bootstrap","txtIngreso Familiarr" ,"txtIngreso Familiar" ,"","Ingreso Familiar",false) ,"Gastos Familiar:",form_input_text("bootstrap","txtGastos Familiar:" ,"txtGastos Familiar:" ,"","Gastos Familiar") );



    //html = html + html_colum4(10,25,10,25,"Fch. Ingr. Comp.",form_input_text("bootstrap","txtFch. Ingr. Comp." ,"txtFch. Ingr. Comp." ,"","Fecha Ingeso Componente") ,"Tiempo de Servicio:",form_input_text("bootstrap","txtTiempo de Servicio" ,"txtTiempo de Servicio" ,"","Tiempo de Servicio") );

    //html = html 

	//html = html + html_colum2(10,25,"Apellido Casada",form_input_text("bootstrap","txtApellidoCasada" ,"txtApellidoCasada" ,"","Apellido de Casada") );

	//html = html + html_colum2(10,25,"Prefijo",form_input_text("bootstrap","txtPrefijo" ,"txtPrefijo" ,"","Prefijo") );

	//html = html + html_colum2(10,25,"Apodo",form_input_text("bootstrap","txtApodo" ,"txtApodo" ,"","Apodo") );

	//var dataArray = new Array("SOLTERO (A)","CASADO (A)","VIUDO (A)","DIVORCIADO (A)");
	//html = html + html_colum2(20,80,"Estado Civil",form_input_select("bootstrap","Seleccione un valor","nombre1","nombre1",dataArray,"") );
	
	//var dataArray = new Array("SOLTERO (A)","CASADO (A)","VIUDO (A)","DIVORCIADO (A)");
	//html = html + html_colum2(20,80,"Tipo Persona",form_input_select("bootstrap","Seleccione un valor","nombre1","nombre1",dataArray,"") );

	//var dataArray = new Array("Teniente","Mayor","Coronel","General");
	//html = html + html_colum2(20,80,"Grado",form_input_select("bootstrap","Seleccione un valor","grado1","grado1",dataArray,"-") );

	//html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )
	//html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )
	//html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )
	//html = html + html_colum4(10,25,10,25,"Campo 1",form_input_text("bootstrap","campo1" ,"campo1" ,"","Campo 1") ,"Campo 2",form_input_text("bootstrap","campo2" ,"campo2" ,"","Campo 2") )

	//html = html + html_colum2(20,80,""   ,"<br><br><br>");
	//html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
	//html = html + html_colum1( form_boton_guadar("GUARDAR") );


	document.getElementById( "title_section" ).innerHTML = "Datos Basicos";
	document.getElementById( "js_content" ).innerHTML = html;


}

function f_datosParticulares()
{
	var html = "";

    html = html + html_colum4(10,25,0,25,"", "" ,"","" );

 	html = html + html_colum2(10,15," Nro Credito:",form_input_text("bootstrap","txtNroCredito" ,"txtNroCredito" ,""," Numero de Credito") );

 	
	document.getElementById( "title_section" ).innerHTML = "Datos Particulares";
	document.getElementById( "js_content" ).innerHTML = html;

}




function f_creditoPartes()
{
	var html = "";


html = html + html_colum6(12,25,10,20,15,18,"Parte #:",form_input_text("bootstrap","txtParte #" ,"txtParte #" ,"","Parte #") ,"Monto Cuotas:",form_input_text("bootstrap","txtMonto Cuotas" ,"txtMonto Cuotas" ,"","Monto Cuotas"),"Frecuencias de Pagos:",form_input_text("bootstrap","txtFrecuencias de Pagos" ,"txtFrecuencias de Pagos" ,"","Frecuencias de Pagos"));
 
 html = html + html_colum6(12,25,10,20,15,18,"Fecha Solicitud:",form_input_text("bootstrap","txtFecha Solicitud" ,"txtFecha Solicitud" ,"","Fecha Solicitud") ,"Monto Solicitud:",form_input_text("bootstrap","txtMonto Solicitud" ,"txtMonto Solicitud" ,"","Monto Solicitud"),"Cuotas Solicitadas:",form_input_text("bootstrap","txtCuotas Solicitadass" ,"txtCuotas Solicitadas" ,"","Cuotas Solicitadas"));

 html = html + html_colum6(12,25,10,20,15,18,"Fch.Inicio de Pago:",form_input_text("bootstrap","txtFch.Inicio de Pago" ,"txtFch.Inicio de Pago" ,"","Fch.Inicio de Pago") ,"Interes:",form_input_text("bootstrap","txtInteres" ,"txtInteres" ,"","Interes"),"Tipo de Interes:",form_input_text("bootstrap","txtTipo de Interes" ,"txtTipo de Interes" ,"","Tipo de Interes"));
 	
html = html + html_colum4(12,25,10,16,"Tipo de Mora:.",form_input_text("bootstrap","txtTipo de Mora" ,"txtTipo de Mora" ,"","Tipo de Mora") ,"Interes de Mora:",form_input_text("bootstrap","txtInteres de Mora" ,"txtInteres de Mora" ,"","Interes de Mora") );

html = html + html_colum6(12,25,10,20,15,18,"Fch.Recomendada:",form_input_text("bootstrap","txtFch.Recomendada" ,"txtFch.Recomendada" ,"","Fch.Recomendada") ,"Monto Recomendada:",form_input_text("bootstrap","txtMonto Recomendada" ,"txtMonto Recomendada" ,"","Monto Recomendada"),"Cuotas Recomendadas:",form_input_text("bootstrap","txtCuotas Recomendadas" ,"txtCuotas Recomendadas" ,"","Cuotas Recomendadas"));


	document.getElementById( "title_section" ).innerHTML = "Credito Partes (Solicitudes y Recomendaciones)";
	document.getElementById( "js_content" ).innerHTML = html;

}




function f_CreditoPartesAprobacion()

{
	var html = "";


 html = html + html_colum6(12,25,10,20,15,18,"Parte #:",form_input_text("bootstrap","txtParte #" ,"txtParte #" ,"","Parte #") ,"Monto Cuotas:",form_input_text("bootstrap","txtMonto Cuotas" ,"txtMonto Cuotas" ,"","Monto Cuotas"),"Frecuencias de Pagos:",form_input_text("bootstrap","txtFrecuencias de Pagos" ,"txtFrecuencias de Pagos" ,"","Frecuencias de Pagos"));
 
 html = html + html_colum6(12,25,10,20,15,18,"Fecha Solicitud:",form_input_text("bootstrap","txtFecha Solicitud" ,"txtFecha Solicitud" ,"","Fecha Solicitud") ,"Monto Solicitud:",form_input_text("bootstrap","txtMonto Solicitud" ,"txtMonto Solicitud" ,"","Monto Solicitud"),"Cuotas Solicitadas:",form_input_text("bootstrap","txtCuotas Solicitadass" ,"txtCuotas Solicitadas" ,"","Cuotas Solicitadas"));

 html = html + html_colum6(12,25,10,20,15,18,"Fch.Inicio de Pago:",form_input_text("bootstrap","txtFch.Inicio de Pago" ,"txtFch.Inicio de Pago" ,"","Fch.Inicio de Pago") ,"Interes:",form_input_text("bootstrap","txtInteres" ,"txtInteres" ,"","Interes"),"Tipo de Interes:",form_input_text("bootstrap","txtTipo de Interes" ,"txtTipo de Interes" ,"","Tipo de Interes"));
 	
html = html + html_colum4(12,25,10,18,"Tipo de Mora:.",form_input_text("bootstrap","txtTipo de Mora" ,"txtTipo de Mora" ,"","Tipo de Mora") ,"Interes de Mora:",form_input_text("bootstrap","txtInteres de Mora" ,"txtInteres de Mora" ,"","Interes de Mora") );

html = html + html_colum6(12,25,10,20,15,18,"Fch.Recomendada:",form_input_text("bootstrap","txtFch.Recomendada" ,"txtFch.Recomendada" ,"","Fch.Recomendada") ,"Monto Recomendada:",form_input_text("bootstrap","txtMonto Recomendada" ,"txtMonto Recomendada" ,"","Monto Recomendada"),"Cuotas Recomendadas:",form_input_text("bootstrap","txtCuotas Recomendadas" ,"txtCuotas Recomendadas" ,"","Cuotas Recomendadas"));

html = html + html_colum6(15,25,15,18,20,15,"Recomendacion:",("bootstrap" ,"") ,"Aprobacion:",("bootstrap",""),"Liquidacion:",("bootstrap" ,""));

	document.getElementById( "title_section" ).innerHTML = "Credito Partes (Aprobacion)";
	document.getElementById( "js_content" ).innerHTML = html;

}


function f_CreditoPartesLiquidacion()

{
	var html = "";


 html = html + html_colum6(12,25,10,20,15,18,"Parte #:",form_input_text("bootstrap","txtParte #" ,"txtParte #" ,"","Parte #") ,"Monto Cuotas:",form_input_text("bootstrap","txtMonto Cuotas" ,"txtMonto Cuotas" ,"","Monto Cuotas"),"Frecuencias de Pagos:",form_input_text("bootstrap","txtFrecuencias de Pagos" ,"txtFrecuencias de Pagos" ,"","Frecuencias de Pagos"));
 
 html = html + html_colum6(12,25,10,20,15,18,"Fecha Solicitud:",form_input_text("bootstrap","txtFecha Solicitud" ,"txtFecha Solicitud" ,"","Fecha Solicitud") ,"Monto Solicitud:",form_input_text("bootstrap","txtMonto Solicitud" ,"txtMonto Solicitud" ,"","Monto Solicitud"),"Cuotas Solicitadas:",form_input_text("bootstrap","txtCuotas Solicitadass" ,"txtCuotas Solicitadas" ,"","Cuotas Solicitadas"));

 html = html + html_colum6(12,25,10,20,15,18,"Fch.Inicio de Pago:",form_input_text("bootstrap","txtFch.Inicio de Pago" ,"txtFch.Inicio de Pago" ,"","Fch.Inicio de Pago") ,"Interes:",form_input_text("bootstrap","txtInteres" ,"txtInteres" ,"","Interes"),"Tipo de Interes:",form_input_text("bootstrap","txtTipo de Interes" ,"txtTipo de Interes" ,"","Tipo de Interes"));
 	
html = html + html_colum4(12,25,10,18,"Tipo de Mora:.",form_input_text("bootstrap","txtTipo de Mora" ,"txtTipo de Mora" ,"","Tipo de Mora") ,"Interes de Mora:",form_input_text("bootstrap","txtInteres de Mora" ,"txtInteres de Mora" ,"","Interes de Mora") );

html = html + html_colum6(12,25,10,20,15,18,"Fch.Recomendada:",form_input_text("bootstrap","txtFch.Recomendada" ,"txtFch.Recomendada" ,"","Fch.Recomendada") ,"Monto Recomendada:",form_input_text("bootstrap","txtMonto Recomendada" ,"txtMonto Recomendada" ,"","Monto Recomendada"),"Cuotas Recomendadas:",form_input_text("bootstrap","txtCuotas Recomendadas" ,"txtCuotas Recomendadas" ,"","Cuotas Recomendadas"));

html = html + html_colum6(12,25,10,20,15,18,"Fch.Aprobacion:",form_input_text("bootstrap","txtFch.Aprobaciona" ,"txtFch.Aprobacion" ,"","Fch.Aprobacion") ,"Monto Aprobacion:",form_input_text("bootstrap","txtMonto Aprobacion" ,"txtMonto Aprobacion" ,"","Monto Aprobacion"),"Cuotas Aprobadas:",form_input_text("bootstrap","txtCuotas Aprobadas" ,"txtCuotas Aprobadas" ,"","Cuotas Aprobadas"));

html = html + html_colum6(12,25,10,20,15,18,"Fch.Dat.Liquid.:",form_input_text("bootstrap","txtFch.Recomendada" ,"txtFch.Recomendada" ,"","Fch.Recomendada") ,"Monto Recomendada:",form_input_text("bootstrap","txtMonto Recomendada" ,"txtMonto Recomendada" ,"","Monto Recomendada"),"Cuotas Recomendadas:",form_input_text("bootstrap","txtCuotas Recomendadas" ,"txtCuotas Recomendadas" ,"","Cuotas Recomendadas"));

html = html + html_colum4(12,25,15,18,"Fcha.Dato Liquid..",form_input_text("bootstrap","txtFcha.Dato Liquid" ,"txtFcha.Dato Liquid" ,"","Fcha.Dato Liquid") ,"Monto Liquidacion:",form_input_text("bootstrap","txtMonto Liquidacion" ,"txtMonto Liquidacion" ,"","Monto Liquidacion") );

html = html + html_colum4(12,25,10,18,"Canal Cobro:",form_input_text("bootstrap","txtCanal Cobro" ,"txtTipo de Mora" ,"","Canal Cobro") ,"Inst.Financiera Cobro:",form_input_text("bootstrap","txtInteres de Mora" ,"txtInteres de Mora" ,"","Interes de Mora") );

html = html + html_colum4(12,25,10,18,"Tipo Cuenta Cobro:",form_input_text("bootstrap","txtTipo Cuenta Cobro" ,"txtTipo Cuenta Cobro" ,"","Cuenta Cobro") ,"Interes de Mora:",form_input_text("bootstrap","txtCuenta Cobro" ,"txtCuenta Cobro" ,"","Cuenta Cobro") );

html = html + html_colum4(10,25,0,25,"", "" ,"","" );



html = html + html_colum6(15,25,15,18,20,15,"Recomendacion:",("bootstrap" ,"") ,"Aprobacion:",("bootstrap",""),"Liquidacion:",("bootstrap" ,""));



	document.getElementById( "title_section" ).innerHTML = "Credito Partes (Liquidacion)";
	document.getElementById( "js_content" ).innerHTML = html;

}








