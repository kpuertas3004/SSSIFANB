/*
Desarrollado por  :  Maria Elena Nuñez
Correo            : marielnu.job@gmail.com
Fecha Creacion    :  27-06-2017  
Fecha Modificacion:  27-06-2017  
Proposito       :  Desplegar el formulario Cambio de Situacion
*/

function f_cambioSituacion(){

    var html = "";
/* */

    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,5,50,30,"Cedula:",form_input_select("bootstrap",dataArray[0],"cmbTipnip","cmbTipnip",dataArray,"") ,form_input_text("bootstrap","txtCedula" ,"txtCedula" ,"","Cedula"),"" )
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,25,50,30,"NIT"   ,form_input_select("bootstrap",dataArray[0],"cmbCodigoNit","cmbCodigoNit",dataArray,""),form_input_text("bootstrap","txtNumeroNit" ,"txtNumeroNit" ,"","Nro. NIT"),"" )
    html = html + html_colum5(10,15,15,10,15,"Apellidos:",form_input_text("bootstrap","txtApellidoPrimero" ,"txtApellidoPrimero" ,"","Apellido Primero"),form_input_text("bootstrap","txtApellidoSegundo" ,"txtApellidoSegundo" ,"","Apellido Segundo"),"Apellido Casada:",form_input_text("bootstrap","txtApellidoCasada" ,"txtApellidoCasada" ,"","Apellido Casada") )
	html = html + html_colum5(10,15,15,10,15,"Nombres:",form_input_text("bootstrap","txtNombrePrimero" ,"txtNombrePrimero" ,"","Nombre Primero"),form_input_text("bootstrap","txtNombreSegundo" ,"txtNombreSegundo" ,"","Nombre Segundo"),"","" )
	html = html + html_colum5(10,15,15,10,15,"","Datos de Afiliacion",form_input_checkbox("bootstrap","chkDatosAfiliacion" ,"chkDatosAfiliacion" ,"",""),"","" )
	html = html + html_colum5(10,15,15,10,15,"","Historial Militar",form_input_checkbox("bootstrap","chkHistorialMilitar" ,"chkHistorialMilitar" ,"",""),"","" )
	html = html + html_colum5(10,15,15,10,15,"","Datos Militares",form_input_checkbox("bootstrap","chkDatosMilitares" ,"chkDatosMilitares" ,"",""),"","" )
	html = html + html_colum5(10,15,15,10,15,"","Cambio de Canal de Cobro de CXC",form_input_checkbox("bootstrap","chkCambioCanalCobroCXC" ,"chkCambioCanalCobroCXC" ,"",""),"","" )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));

    document.getElementById( "title_section" ).innerHTML = "Pensiones/Cambio de Situaci&oacute;n";
    document.getElementById( "js_content" ).innerHTML = html;
}

/*
Desarrollado por  :  Victor Manuel Suarez
Correo            :  victormst@gmail.com
Fecha Creacion    :  22-06-2017  
Fecha Modificacion:  22-06-2017  
Proposito       :  Despliegar el formulario de asociados
*/
function f_calculoPensionRetiro(){

    var html = "";
/* */
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,5,50,30,"Cedula:",form_input_select("bootstrap",dataArray[0],"cmbTipnip","cmbTipnip",dataArray,"") ,form_input_text("bootstrap","txtCedula" ,"txtCedula" ,"","Cedula"),"" )
    html = html + html_colum5(20,25,5,20,25,"Grado:",form_input_text("bootstrap","txtGrado" ,"txtGrado" ,"","Grado") ,"","Componente:",form_input_text("bootstrap","txtComponente" ,"txtComponente" ,"","Componente") )
    html = html + html_colum5(20,25,5,20,25,"Situacion:",form_input_text("bootstrap","txtSituacion" ,"txtSituacion" ,"","Situacion") ,"","Categoria:",form_input_text("bootstrap","txtCategoría" ,"txtCategoría" ,"","Categoria") )
    html = html + html_colum5(20,25,5,20,25,"Clase:",form_input_text("bootstrap","txtClase" ,"txtClase" ,"","Clase") ,"","Fecha Promocion:",form_input_text("bootstrap","txtFechaPromocion" ,"txtFechaPromocion" ,"","Fecha Promocion") )
    html = html + html_colum5(20,25,5,20,25,"Fecha Ing. Comp:",form_input_text("bootstrap","txtFechaIngresoComponente" ,"txtFechaIngresoComponente" ,"","Fecha Ingreso Componente") ,"","Fecha Ultimo Ascenso:",form_input_text("bootstrap","txtFechaUltimoAscenso" ,"txtFechaUltimoAscenso" ,"","Fecha Ultimo Ascenso") )
    html = html + html_colum2(20,25,"Fecha Retiro:",form_input_text("bootstrap","txtFechaRetiro" ,"txtFechaRetiro" ,"","Fecha Retiro")  )
    html = html + html_colum2(20,25,"Tiempo Servicio: Años:",form_input_text("bootstrap","txtAnnosServicio" ,"txtAnnosServicio" ,"","A&ntilde;os Servicio") )
    html = html + html_colum5(20,25,5,20,25,"Dias Vacaciones",form_input_text("bootstrap","txtDiasVacaciones" ,"txtDiasVacaciones" ,"","Dias Vacaciones") ,"","Num. Hijos",form_input_text("bootstrap","txtNumeroHijos" ,"txtNumeroHijos" ,"","Numero Hijos") )
    html = html + html_colum3(20,25,30,"Inst.Financiera",form_input_text("bootstrap","cmbCodigoBanco" ,"cmbCodigoBanco" ,"","Institucion Financiera") ,"Nombre Banco" )
    html = html + html_colum3(20,25,30,"Tipo Cuenta",form_input_text("bootstrap","cmbCodigoCuenta" ,"cmbCodigoCuenta" ,"","Tipo Cuenta") ,"Tipo Cuenta" )
    html = html + html_colum2(20,25,"Nro. Cuenta",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta") )
    html = html + html_colum2(20,25,"Pension Asignada",form_input_text("bootstrap","txtPensionAsignada" ,"txtPensionAsignada" ,"","Pension Asignada") )
    var dataArray= new Array("ACT","INACT");
    html = html + html_colum3(20,5,17,"Estatus",form_input_select("bootstrap",dataArray[0],"cmbEstatus","cmbEstatus",dataArray,""),"ACTIVO" )
    var dataArray= new Array("INI","ECT");
    html = html + html_colum3(20,5,17,"Razon",form_input_select("bootstrap",dataArray[0],"cmbRazon","cmbRazon",dataArray,""),"INICIAL" )

    //html = html + html_colum2(20,80,""   ,"<br><br><br>");
    //html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
    //html = html + html_colum1( form_boton_guadar("GUARDAR") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/C&aacute;lculo Pensi&oacute;n Retiro";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_calculoPension_(){
        
    var html = "";
    /* */
    html = html + html_colum4(10,25,10,25,"Fecha Inicio Pension:",form_input_text("bootstrap","txtFechaInicioPension" ,"txtFechaInicioPension" ,"","Fecha Inicio Pension") ,"Sueldo Basico:",form_input_text("bootstrap","txtSueldoBasico" ,"txtSueldoBasico" ,"","Sueldo Basico") )
    html = html + html_colum4(10,25,10,25,"Remun. Vigente:",form_input_text("bootstrap","txtRemuneracionVigente" ,"txtRemuneracionVigente" ,"","Remun. Vigente") ,"Prima Transporte:",form_input_text("bootstrap","txtPrimaTransporte" ,"txtPrimaTransporte" ,"","Prima Transporte") )
    html = html + html_colum4(10,25,10,25,"% Prima No Ascenso:",form_input_text("bootstrap","txtPorcentajePrimaNoAscenso" ,"txtPorcentajePrimaNoAscenso" ,"","% Prima No Ascenso") ,"Prima Descendencia:",form_input_text("bootstrap","txtPrimaDescendencia" ,"txtPrimaDescendencia" ,"","Prima Descendencia") )
    html = html + html_colum4(10,25,10,25,"% Prima Profesional:",form_input_text("bootstrap","txtPorcentajePrimaProfesional" ,"txtPorcentajePrimaProfesional" ,"","% Prima Profesional") ,"Prima A&ntilde;o/Servicio:",form_input_text("bootstrap","txtPrimaAnnoServicio" ,"txtPrimaAnnoServicio" ,"","Prima A&ntilde;o/Servicio") )
    html = html + html_colum4(10,25,10,25,"Pension Vigente:",form_input_text("bootstrap","txtPensionVigente" ,"txtPensionVigente" ,"","Pension Vigente") ,"Prima No Ascenso:",form_input_text("bootstrap","txtPrimaNoAscenso" ,"txtPrimaNoAscenso" ,"","Prima No Ascenso") )
    html = html + html_colum4(10,25,10,25,"","" ,"Prima Especial:",form_input_text("bootstrap","txtPrimaEspecial" ,"txtPrimaEspecial" ,"","Prima Especial") )
    html = html + html_colum4(10,25,10,25,"","" ,"Prima Profesional:",form_input_text("bootstrap","txtPrimaProfesional" ,"txtPrimaProfesional" ,"","Prima Profesional") )
    html = html + html_colum4(10,25,10,25,"","" ,"SubTotal:",form_input_text("bootstrap","txtSubTotal" ,"txtSubTotal" ,"","SubTotal") )
    html = html + html_colum4(10,25,10,25,"","" ,"% Pension:",form_input_text("bootstrap","txtPorcentajePension" ,"txtPorcentajePension" ,"","% Pension") )
    html = html + html_colum4(10,25,10,25,"","" ,"Pension Asignada:",form_input_text("bootstrap","txtPensionAsignada" ,"txtPensionAsignada" ,"","Pension Asignada") )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
    //html = html + html_colum1( form_boton_guadar("GUARDAR") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Calculo Pensi&oacute;n Retiro/Calcula Pensi&oacute;n";
    document.getElementById( "js_content" ).innerHTML = html;

}

function f_calculoPension(){
        
    var html = "";
    /* */
    html = html + html_colum5(20,25,5,20,25,"","","","Sueldo Basico:",form_input_text("bootstrap","txtSueldoBasico" ,"txtSueldoBasico" ,"","Sueldo Basico") )
    html = html + html_colum5(20,25,5,20,25,"","","","Prima Transporte:",form_input_text("bootstrap","txtPrimaTransporte" ,"txtPrimaTransporte" ,"","Prima Transporte") )
    html = html + html_colum5(20,25,5,20,25,"Fecha Inicio Pension:",form_input_text("bootstrap","txtFechaInicioPension","txtFechaInicioPension" ,"","% Fecha Inicio Pension") ,"","Prima Descendencia:",form_input_text("bootstrap","txtPrimaDescendencia" ,"txtPrimaDescendencia" ,"","Prima Descendencia") )
    html = html + html_colum5(20,25,5,20,25,"Remun. Vigente:",form_input_text("bootstrap","txtRemuneracionVigente" ,"txtRemuneracionVigente" ,"","Remun. Vigente"),"","Prima A&ntilde;o/Servicio:",form_input_text("bootstrap","txtPrimaAnnoServicio" ,"txtPrimaAnnoServicio" ,"","Prima A&ntilde;o/Servicio") )
    html = html + html_colum5(20,25,5,20,25,"","","" ,"Prima No Ascenso:",form_input_text("bootstrap","txtPrimaNoAscenso" ,"txtPrimaNoAscenso" ,"","Prima No Ascenso") )
    html = html + html_colum5(20,25,5,20,25,"% Prima No Ascenso:",form_input_text("bootstrap","txtPorcentajePrimaNoAscenso" ,"txtPorcentajePrimaNoAscenso" ,"","% Prima No Ascenso"),"","Prima Especial:",form_input_text("bootstrap","txtPrimaEspecial" ,"txtPrimaEspecial" ,"","Prima Especial") )
    html = html + html_colum5(20,25,5,20,25,"% Prima Profesional",form_input_text("bootstrap","txtPorcentajePrimaProfesional" ,"txtPorcentajePrimaProfesional" ,"","% Prima Profesional"),"" ,"%Prima Profesional:",form_input_text("bootstrap","txtPrimaProfesional" ,"txtPrimaProfesional" ,"","Prima Profesional") )
    html = html + html_colum5(20,25,5,20,25,"Pension Vigente:",form_input_checkbox("bootstrap","chkPensionVigente" ,"chkPensionVigente" ,"",""),"","SubTotal:",form_input_text("bootstrap","txtSubTotal" ,"txtSubTotal" ,"","SubTotal") )
    html = html + html_colum5(20,25,5,20,25,"","","","% Pension:",form_input_text("bootstrap","txtPorcentajePension" ,"txtPorcentajePension" ,"","% Pension") )
    html = html + html_colum5(20,25,5,20,25,"","","","Pension Asignada:",form_input_text("bootstrap","txtPensionAsignada" ,"txtPensionAsignada" ,"","Pension Asignada") )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
    //html = html + html_colum1( form_boton_guadar("GUARDAR") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Calculo Pensi&oacute;n Retiro/Calcula Pensi&oacute;n";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_calculoRetroactivo(){
        
    var html = "";
    /* */
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum2(35,25,"Concepto Retroactivo:",form_input_select("bootstrap",dataArray[0],"cmbConceptoRetroactivo","cmbConceptoRetroactivo",dataArray,"") )
    html = html + html_colum2(35,25,"Nro. Meses:",form_input_text("bootstrap","txtNumeroMeses" ,"txtNumeroMeses" ,"","Nro. Meses") )
    html = html + html_colum2(35,25,"Monto Pension:",form_input_text("bootstrap","txtMontoPension" ,"txtMontoPension" ,"","Monto Pension") )
    html = html + html_colum2(35,25,"Retroactivo a Cancelar:",form_input_text("bootstrap","txtRetroactivoCancelar" ,"txtRetroactivoCancelar" ,"","Retroactivo a Cancelar") )
    html = html + html_colum2(35,25,"Fecha Aplicacion:",form_input_text("bootstrap","txtFechaAplicacion" ,"txtFechaAplicacion" ,"","Fecha Aplicacion") )
    html = html + html_colum2(35,25,"Fecha Proceso:",form_input_text("bootstrap","txtFechaProceso" ,"txtFechaProceso" ,"","Fecha Proceso") )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
    //html = html + html_colum1( form_boton_guadar("GUARDAR") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Calculo Pensi&oacute;n Retiro/C&acute;lculo de Retroactivo";
    document.getElementById( "js_content" ).innerHTML = html;

}

function f_cuentasBancarias(){
        
    var html = "";
    /* */
    var dataArray = new Array("PRI","PERS","SEC");
    html = html + html_colum2(25,25,"Uso:",form_input_select("bootstrap",dataArray[0],"cmbUso","cmbUso",dataArray,"") )
    var dataArray = new Array("0102","0008","0177");
    html = html + html_colum2(25,20,"Inst. Financiera:",form_input_select("bootstrap",dataArray[0],"cmbCodigoBanco","cmbCodigoBanco",dataArray,"") )
    var dataArray = new Array("CC","CA");
    html = html + html_colum2(25,20,"Tipo de Cuenta:",form_input_select("bootstrap",dataArray[0],"cmbTipoCuenta","cmbTipoCuenta",dataArray,"") )
    html = html + html_colum5(25,20,5,20,24,"Nro. Cuenta:",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta"),"", "Fecha Vencimiento",form_input_text("bootstrap","txtFechaVencimiento" ,"txtFechaVencimiento" ,"","Fecha Vencimiento") )
    html = html + html_colum2(25,60,"Descripción:",form_input_textarea("bootstrap","txtDescripcion" ,"txtDescripcion" ,"","Descripcion") )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
    //html = html + html_colum1( form_boton_guadar("GUARDAR") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Calculo Pensi&oacute;n Retiro/Cuentas Bancarias";
    document.getElementById( "js_content" ).innerHTML = html;

}

function f_calculoPensionEspecial(){
    var html = "";
    /* */
    html = html + html_colum5(20,25,5,20,25,"","","","Sueldo Basico:",form_input_text("bootstrap","txtSueldoBasico" ,"txtSueldoBasico" ,"","Sueldo Basico") )
    html = html + html_colum5(20,25,5,20,25,"","","","Prima Transporte:",form_input_text("bootstrap","txtPrimaTransporte" ,"txtPrimaTransporte" ,"","Prima Transporte") )
    html = html + html_colum5(20,25,5,20,25,"Fecha Inicio Pension:",form_input_text("bootstrap","txtFechaInicioPension","txtFechaInicioPension" ,"","% Fecha Inicio Pension") ,"","Prima Descendencia:",form_input_text("bootstrap","txtPrimaDescendencia" ,"txtPrimaDescendencia" ,"","Prima Descendencia") )
    html = html + html_colum5(20,25,5,20,25,"Remun. Vigente:",form_input_text("bootstrap","txtRemuneracionVigente" ,"txtRemuneracionVigente" ,"","Remun. Vigente"),"","Prima A&ntilde;o/Servicio:",form_input_text("bootstrap","txtPrimaAnnoServicio" ,"txtPrimaAnnoServicio" ,"","Prima A&ntilde;o/Servicio") )
    html = html + html_colum5(20,25,5,20,25,"","","" ,"Prima No Ascenso:",form_input_text("bootstrap","txtPrimaNoAscenso" ,"txtPrimaNoAscenso" ,"","Prima No Ascenso") )
    html = html + html_colum5(20,25,5,20,25,"% Prima No Ascenso:",form_input_text("bootstrap","txtPorcentajePrimaNoAscenso" ,"txtPorcentajePrimaNoAscenso" ,"","% Prima No Ascenso"),"","Prima Especial:",form_input_text("bootstrap","txtPrimaEspecial" ,"txtPrimaEspecial" ,"","Prima Especial") )
    html = html + html_colum5(20,25,5,20,25,"% Prima Profesional",form_input_text("bootstrap","txtPorcentajePrimaProfesional" ,"txtPorcentajePrimaProfesional" ,"","% Prima Profesional"),"" ,"%Prima Profesional:",form_input_text("bootstrap","txtPrimaProfesional" ,"txtPrimaProfesional" ,"","Prima Profesional") )
    html = html + html_colum5(20,25,5,20,25,"Pension Vigente:",form_input_checkbox("bootstrap","chkPensionVigente" ,"chkPensionVigente" ,"",""),"","SubTotal:",form_input_text("bootstrap","txtSubTotal" ,"txtSubTotal" ,"","SubTotal") )
    html = html + html_colum5(20,25,5,20,25,"","","","% Pension:",form_input_text("bootstrap","txtPorcentajePension" ,"txtPorcentajePension" ,"","% Pension") )
    html = html + html_colum5(20,25,5,20,25,"","","","Pension Asignada:",form_input_text("bootstrap","txtPensionAsignada" ,"txtPensionAsignada" ,"","Pension Asignada") )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
    //html = html + html_colum1( form_boton_guadar("GUARDAR") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Calculo Pensi&oacute;n Retiro/Calcula Pensi&oacute;n Especial";
    document.getElementById( "js_content" ).innerHTML = html;        

}

function f_definicionAjusteBeneficiario(){
        
    var html = "";
    /* */
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,5,50,30,"Cedula:",form_input_select("bootstrap",dataArray[0],"cmbTipnip","cmbTipnip",dataArray,"") ,form_input_text("bootstrap","txtCedula" ,"txtCedula" ,"","Cedula"),"" )
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,25,50,30,"NIT"   ,form_input_select("bootstrap",dataArray[0],"cmbCodigoNit","cmbCodigoNit",dataArray,""),form_input_text("bootstrap","txtNumeroNit" ,"txtNumeroNit" ,"","Nro. NIT"),"" )
    html = html + html_colum5(10,25,25,10,25,"Apellidos:",form_input_text("bootstrap","txtApellidoPrimero" ,"txtApellidoPrimero" ,"","Apellido Primero"),form_input_text("bootstrap","txtApellidoSegundo" ,"txtApellidoSegundo" ,"","Apellido Segundo"),"Apellido Casada:",form_input_text("bootstrap","txtApellidoCasada" ,"txtApellidoCasada" ,"","Apellido Casada") )
    html = html + html_colum5(10,25,25,10,25,"Nombres:",form_input_text("bootstrap","txtNombrePrimero" ,"txtNombrePrimero" ,"","Nombre Primero"),form_input_text("bootstrap","txtNombreSegundo" ,"txtNombreSegundo" ,"","Nombre Segundo"),"","" )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));
    //html = html + html_colum1( form_boton_guadar("GUARDAR") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Definici&oacute;n y Ajuste de Beneficiario";
    document.getElementById( "js_content" ).innerHTML = html;

}


function f_listaBeneficiario(){
    var html = "";
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,5,50,30,"Beneficiario:",form_input_select("bootstrap",dataArray[0],"cmbTipnipBeneficiario","cmbTipnipBeneficiario",dataArray,"") ,form_input_text("bootstrap","txtCedulaBeneficiario" ,"txtCedulaBeneficiario" ,"","Cedula"),"NOMBRE BENEFICIARIO" )
    html = html + html_colum6(10,25,10,20,10,20,"Fecha Inicio:",form_input_text("bootstrap","txtFechaInicio" ,"txtFechaInicio" ,"","Fecha Inicio"),"Fecha Perdida:",form_input_text("bootstrap","TxtFechaPerdida" ,"TxtFechaPerdida" ,"","Fecha Perdida"),"Fecha Cambio:",form_input_text("bootstrap","txtFechaCambio" ,"txtFechaCambio" ,"","Fecha Cambio") )
    var dataArray= new Array("ACT","INACT");
    var dataArray1= new Array("INI","ECT");
    html = html + html_colum6(10,25,10,20,10,20,"Estatus",form_input_select("bootstrap",dataArray[0],"cmbEstatus","cmbEstatus",dataArray,""),"","Razon",form_input_select("bootstrap",dataArray1[0],"cmbRazon","cmbRazon",dataArray1,""),"" )
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,5,50,30,"Pers. Autorizada:",form_input_select("bootstrap",dataArray[0],"cmbTipnipAutorizado","cmbTipnipAutorizado",dataArray,"") ,form_input_text("bootstrap","txtCedulaAutorizado" ,"txtCedulaAutorizado" ,"","Cedula"),"" )
    html = html + html_colum2(10,20,"Descripción:",form_input_textarea("bootstrap","txtDescripcion" ,"txtDescripcion" ,"","Cedula") )
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum6(10,25,10,20,10,20,"Parentesco:",form_input_select("bootstrap",dataArray[0],"cmbParentesco","cmbParentesco",dataArray,""),"Fecha Defunción Militar:",form_input_text("bootstrap","txtFechaDefuncionMilitar" ,"txtFechaDefuncionMilitar" ,"","Fecha Defunción Militar"),"Fecha Venc. Carnet:",form_input_text("bootstrap","txtFechaVencimientoCarnet" ,"txtFechaVencimientoCarnet" ,"","Fecha Venc. Carnet") )
    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum4(10,40,10,40,"",form_boton_guadar("Distribucion de montos para Beneficiarios"),""   ,form_boton_guadar("Calcular Retroactivo para el Beneficiario") );

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Definicion y Ajuste de Beneficiario/Lista Beneficiario";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_montoBeneficiario(){
    var html = "";
    var dataArray = new Array("V","E","M","J");
    html = html + html_colum4(10,5,50,30,"Beneficiario:",form_input_select("bootstrap",dataArray[0],"cmbTipnipBeneficiario","cmbTipnipBeneficiario",dataArray,"") ,form_input_text("bootstrap","txtCedulaBeneficiario" ,"txtCedulaBeneficiario" ,"","Cedula"),"NOMBRE BENEFICIARIO" )
    var dataArray= new Array("PS","Otras");
    html = html + html_colum4(10,25,10,25,"Conceptos de Pago:", form_input_select("bootstrap",dataArray[0],"cmbCodigoConceptoPago","cmbCodigoConceptoPago",dataArray,"") ,"% Pension", form_input_text("bootstrap","txtPorcentajePension" ,"txtPorcentajePension" ,"","% Pension") )
        var dataArray= new Array("ACT","INACT");
    html = html + html_colum2(10,25,"Canal Liquidacion:",form_input_select("bootstrap",dataArray[0],"cmbCodigoCanalLiquidacion","cmbCodigoCanalLiquidacion",dataArray,"") )
    var dataArray= new Array("ACT","INACT");
    html = html + html_colum4(10,25,10,25,"Instrumento Pago:",form_input_select("bootstrap",dataArray[0],"cmbInstrumentoPago","cmbInstrumentoPago",dataArray,""),"Inst. Financiera",form_input_text("bootstrap","cmbInstitucionFinanciera" ,"cmbInstitucionFinanciera" ,"","Inst. Financiera") )
    var dataArray= new Array("ACT","INACT");
    html = html + html_colum4(10,25,10,25,"Tipo Cuenta:",form_input_select("bootstrap",dataArray[0],"txtEstatus","txtEstatus",dataArray,""),"Nro. Cuenta",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta") )
    html = html + html_colum4(10,25,10,25,"Monto:",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta"),"Nro. Instrumento",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta") )
    var dataArray= new Array("ACT","INACT");
    html = html + html_colum4(10,25,10,25,"Frecuencia Pago:",form_input_select("bootstrap",dataArray[0],"txtEstatus","txtEstatus",dataArray,""),"Estatus Pago",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta") )
    html = html + html_colum4(10,25,10,25,"Nº de Veces que aplica:",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta"),"Nº de Veces",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta") )
    html = html + html_colum4(10,25,10,25,"Fecha de Aplicacion:",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta"),"Fecha de Proceso",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta") )
    html = html + html_colum4(10,25,10,25,"Nº de Meses:",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta"),"Monte Mensual",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta") )
    html = html + html_colum2(10,30,"Nota:",form_input_text("bootstrap","txtNumeroCuenta" ,"txtNumeroCuenta" ,"","Numero Cuenta"),"Nota" )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Definicion y Ajuste de Beneficiario/Monto Beneficiario";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_datosAfiliacion(){
    var html = "";
    var dataArray= new Array("PS","Otras");
    var dataArray1= new Array("PS","Otras");
    html = html + html_colum4(10,25,10,25,"Tipo Afiliacion:", form_input_select("bootstrap",dataArray[0],"txtRazon","txtRazon",dataArray,"")+"Afiliado" ,"Fch. Inic. Afiliacion:", form_input_text("bootstrap","txtTipnip" ,"txtTipnip" ,"","Tipnip")  )
    html = html + html_colum4(10,10,10,25,"Titular Afiliacion:",form_input_text("bootstrap","txtTipnip" ,"txtTipnip" ,"","Tipnip") ,form_input_text("bootstrap","txtCedula" ,"txtCedula" ,"","Cedula"),"PEDRO PEREZ" )
    html = html + html_colum4(10,10,10,25,"Fecha Vcto. Afiliacion:",form_input_text("bootstrap","txtTipnip" ,"txtTipnip" ,"","Tipnip") ,"Relacion con titular",form_input_text("bootstrap","txtCedula" ,"txtCedula" ,"","Cedula") )
    var dataArray= new Array("ACT","INACT");
    html = html + html_colum6(10,20,10,20,10,20,"Fecha Cambio:",form_input_text("bootstrap","txtFechaInicio" ,"txtFechaInicio" ,"","Fecha Inicio"),"Estatus:",form_input_text("bootstrap","txtFechaPerdida" ,"txtFechaPerdida" ,"","Fecha Perdida"),"Razon:",form_input_text("bootstrap","txtFechaCambio" ,"txtFechaCambio" ,"","Fecha Cambio") )
    html = html + html_colum2(10,80,"Observacion:",form_input_text("bootstrap","txtFechaInicio" ,"txtFechaInicio" ,"","Fecha Inicio") )
    html = html + html_colum6(10,20,10,20,10,20,"N° Carnet:",form_input_text("bootstrap","txtFechaInicio" ,"txtFechaInicio" ,"","Fecha Inicio"),"Fecha Emision Carnet:",form_input_text("bootstrap","txtFechaPerdida" ,"txtFechaPerdida" ,"","Fecha Perdida"),"Fecha Vcto. Carnet:",form_input_text("bootstrap","txtFechaCambio" ,"txtFechaCambio" ,"","Fecha Cambio") )
    html = html + html_colum4(10,20,10,20,"Fecha Creacion:",form_input_text("bootstrap","txtFechaInicio" ,"txtFechaInicio" ,"","Fecha Inicio"),"Fecha Cambio:",form_input_text("bootstrap","txtFechaPerdida" ,"txtFechaPerdida" ,"","Fecha Perdida") )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("GUARDAR"));

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Definicion y Ajuste de Beneficiario/Datos de Afiliacion";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_recalculoPensionLote(){
    var html = "";
    var dataArray= new Array("DIRPLA2017","DIRPLA2017-I");
    html = html + html_colum2(10,25,"Directiva que se aplicara:", form_input_select("bootstrap",dataArray[0],"txtRazon","txtRazon",dataArray,"")  )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("Calcular Pension"));

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Definicion y Ajuste de Beneficiario/Recalculo de Pension en Lote";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_recalculoPensionBeneficiarioLote(){
    var html = "";
    html = html + html_colum2(10,25,"Distribucion de pension en lote para Beneficiarios:", "" )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("Distribuir Monto Para Beneficiarios"));

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Definicion y Ajuste de Beneficiario/Recalculo de Pension en Lote a Beneficiarios";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_cambioStatusBeneficiario(){
    var html = "";
    html = html + html_colum1("Cambio de Status a los Beneficiarios con Fe de Vida y Carnet Vencidos:" )
    var dataArray= new Array("DIRPLA2017","DIRPLA2017-I");
    html = html + html_colum2(30,25,"Indique la Razon a Bloquear:", form_input_select("bootstrap",dataArray[0],"txtRazon","txtRazon",dataArray,"")  )
    var dataArray= new Array("ENERO","FEBRERO");
    html = html + html_colum2(30,25,"Indique el Mes a Bloquear:", form_input_select("bootstrap",dataArray[0],"txtRazon","txtRazon",dataArray,"")  )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("Cambiar  Status"));

    document.getElementById( "title_section" ).innerHTML = "Bienestar Social/Pensiones/Definicion y Ajuste de Beneficiario/Cambio de Status de Beneficiario";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_juezTipo(){
    var html = "";
    var dataArray= new Array("DTP","F96MP","FAM","FMP","Otro");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbJuezTipo","cmbJuezTipo",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtJuezTipo","txtJuezTipo","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreTipoJuez","txtNombreTipoJuez","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Juez Tipo";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_tipoBenficiarios(){
    var html = "";
    var dataArray= new Array("EA","HJ","PD","VI");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoTipoBeneficiarios","cmbCodigoTipoBeneficiarios",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoTipoBeneficiarios","txtCodigoTipoBeneficiarios","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreTipoBeneficiarios","txtNombreTipoBeneficiarios","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Tipo Beneficiarios";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_estatusBenficiarios(){
	 var html = "";
    var dataArray= new Array("ACT","EXCL","INACT");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoEstatusBeneficiarios","cmbCodigoEstatusBeneficiarios",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoEstatusBeneficiarios","txtCodigoEstatusBeneficiarios","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreEstatusBeneficiarios","txtNombreEstatusBeneficiarios","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Estatus Beneficiarios";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_razonEstatusBenficiarios(){
	 var html = "";
    var dataArray= new Array("CAR","CE","DDA","FA","FSBEMF","INA","INI","MAT");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoRazonEstatusBeneficiarios","cmbCodigoRazonEstatusBeneficiarios",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoRazonEstatusBeneficiarios","txtCodigoRazonEstatusBeneficiarios","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreRazonEstatusBeneficiarios","txtNombreRazonEstatusBeneficiarios","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Razon Estatus Beneficiarios";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_estatusBenficiariosMonto(){
	 var html = "";
    var dataArray= new Array("ACT","INAC","SUS");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoEstatusBeneficiariosMonto","cmbCodigoEstatusBeneficiariosMonto",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoEstatusBeneficiariosMonto","txtCodigoEstatusBeneficiariosMonto","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreEstatusBeneficiariosMonto","txtNombreEstatusBeneficiariosMonto","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Estatus Beneficiarios Monto";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_conceptoMonto(){
	 var html = "";
    var dataArray= new Array("AGUI","IAGUI.FISCAL SOBR","BONO RECRE_PENS","BONO_RECRE INV");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoConceptoMonto","cmbCodigoConceptoMonto",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoConceptoMonto","txtCodigoConceptoMonto","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreCodigoConceptoMonto","txtNombreCodigoConceptoMonto","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Concepto  Monto";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_tipoMedidaJudicial(){
	 var html = "";
    var dataArray= new Array("PAGUI","PALIM","PBON","PEMBJ","PESTU","REPAGUI","REPALI");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoTipoMedidaJudicial","cmbCodigoTipoMedidaJudicial",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoTipoMedidaJudicial","txtCodigoTipoMedidaJudicial","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreTipoMedidaJudicial","txtNombreTipoMedidaJudicial","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Tipo Medida Judicial";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_medidaFormaCalculo(){
	 var html = "";
    var dataArray= new Array("MF","MFXB","PNC","PNCSRXB","PORAGUIN");
	html = html + html_colum2(20,25,"Codigo Medida Forma:", form_input_select("bootstrap","Seleccione","cmbCodigoMedidaFormaCalculo","cmbCodigoMedidaFormaCalculo",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo Medida Forma:", form_input_text("bootstrap","txtCodigoMedidaFormaCalculo","txtCodigoMedidaFormaCalculo","","") )
    html = html + html_colum2(20,80,"Nombre Medida Forma:", form_input_text("bootstrap","txtNombreMedidaFormaCalculo","txtNombreMedidaFormaCalculo","","") )
    html = html + html_colum2(20,80,"Monto Medida Forma:", form_input_text("bootstrap","txtMontoMedidaFormaCalculo","txtMontoMedidaFormaCalculo","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Medida Forma Calculo";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_tipoDirectiva(){
	 var html = "";
    var dataArray= new Array("ASE","BPD","ESP","SB","SB1","SB2","SB3","SB4");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoTipoDirectiva","cmbCodigoTipoDirectiva",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoTipoDirectiva","txtCodigoTipoDirectiva","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreTipoDirectiva","txtNombreTipoDirectiva","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Tipo Directiva";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_directivaSalario(){
	 var html = "";
    var dataArray= new Array("DIRPLA2004","DIRPLA2005","DIRPLA2006");
	html = html + html_colum2(20,25,"Codigo Directiva:", form_input_select("bootstrap","Seleccione","cmbCodigoDirectiva","cmbCodigoDirectiva",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo Directiva:", form_input_text("bootstrap","txtCodigoDirectiva","txtCodigoDirectiva","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreDirectiva","txtNombreDirectiva","","") )
    html = html + html_colum2(20,60,"Codigo Oficial:", form_input_text("bootstrap","txtCodigoOficialDirectiva","txtCodigoOficialDirectiva","","") )
    html = html + html_colum2(20,40,"Vigencia Desde:", form_input_text("bootstrap","txtVigenciaDirectiva","txtVigenciaDirectiva","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Tipo Directiva";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_detalleDirectivaSalario(){
	 var html = "";
    var dataArray= new Array("DIRPLA2004","DIRPLA2005","DIRPLA2006");
	html = html + html_colum2(30,30,"Codigo de Directiva de Salario:", form_input_select("bootstrap","Seleccione","cmbCodigoDirectiva","cmbCodigoDirectiva",dataArray,"") )
    //html = html + html_colum2(30,30,"Codigo de Directiva de Salario:", form_input_text("bootstrap","txtCodigoDirectiva","txtCodigoDirectiva","","") )
    var dataArray= new Array("Un Año","Bono Especial","Bono por Descendencia");
	html = html + html_colum2(30,25,"Tipo de Directiva:", form_input_select("bootstrap","Seleccione","cmbTipoDirectiva","cmbTipoDirectiva",dataArray,"") )
	//html = html + html_colum2(30,25,"Tipo de Directiva:", form_input_text("bootstrap","txtTipoDirectiva","txtTipoDirectiva","","") )
    var dataArray= new Array("1700","1000","1020");
	html = html + html_colum2(30,25,"Rango:", form_input_select("bootstrap","Seleccione","cmbRangoDirectiva","cmbRangoDirectiva",dataArray,"") )
    //html = html + html_colum2(30,25,"Rango:", form_input_text("bootstrap","txtRangoDirectiva","txtRangoDirectiva","","") )
	html = html + html_colum2(30,28,"Monto de Directiva:", form_input_text("bootstrap","txtMontoDirectiva","txtMontoDirectiva","","") )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Detalle de Directiva";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_copiarDirectivaSalario(){
	 var html = "";
    html = html + html_colum2(30,30,"Nuevo Codigo Directiva:", form_input_text("bootstrap","txtNuevoCodigoDirectiva","txtNuevoCodigoDirectiva","","") )
    var dataArray= new Array("DIRPLA2004","DIRPLA2005","DIRPLA2006");
	html = html + html_colum2(30,25,"Codigo Directiva a Copiar:", form_input_select("bootstrap","Seleccione","cmbTipoDirectiva","cmbTipoDirectiva",dataArray,"") )

    html = html + html_colum2(20,80,""   ,"<br><br><br>");
    html = html + html_colum2(20,80,""   ,form_boton_guadar("Copiar"));

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Copiar  Directiva Salario";
    document.getElementById( "js_content" ).innerHTML = html;
}

function f_porcentajePrestaciones(){
	var html = "";
    html = html + html_colum2(30,30,"Vigente Desde:", form_input_text("bootstrap","txtVigenteDesde","txtVigenteDesde","","") )
	html = html + html_colum2(33,30,form_input_checkbox("bootstrap","chkServicioContinuo","chkServicioContinuo","",""), "Servicio Continuo" )
	html = html + html_colum2(33,30,form_input_checkbox("bootstrap","chkAnulado","chkAnulado","",""), "Anulado" )
    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Porcentaje de Prestaciones";
    document.getElementById( "js_content" ).innerHTML = html;

}

function f_detallePorcentajePrestaciones(){
	var html = "";
	html = html + html_colum4(20,25,10,25,"Vigente Desde:",form_input_text("bootstrap","txtVigenteDesde" ,"txtVigenteDesde" ,"","") ,"Continuo:",form_input_checkbox("bootstrap","chkContinuo","chkContinuo","","") )
    html = html + html_colum2(20,30,"Año Servicio:", form_input_text("bootstrap","txtAnnoServicio","txtAnnoServicio","","") )
	html = html + html_colum2(20,30,"Para Calcular:", form_input_text("bootstrap","txtPorcentajeCalcular","txtPorcentajeCalcular","","") )
    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Dtalle d Porcentaje de Prestaciones";
    document.getElementById( "js_content" ).innerHTML = html;

}

function f_vacacionesRango(){
	var html = "";
	html = html + html_colum2(20,25,"Desde:",form_input_text("bootstrap","txtDesde" ,"txtDesde" ,"","") )
	html = html + html_colum2(20,25,"Hasta:",form_input_text("bootstrap","txtHasta" ,"txtHasta" ,"","") )
	html = html + html_colum2(20,25,"Dias Vacaciones:",form_input_text("bootstrap","txtDiasVacaciones" ,"txtDiasVacaciones" ,"","") )
    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Dtalle d Porcentaje de Prestaciones";
    document.getElementById( "js_content" ).innerHTML = html;

}

function f_conceptoRetroactivo(){
	 var html = "";
    var dataArray= new Array("AGUI FISCAL INVA","IAGUI.FISCAL SOBR","BONO RECRE_PENS","BONO_RECRE INV");
	html = html + html_colum2(20,25,"Codigo:", form_input_select("bootstrap","Seleccione","cmbCodigoConceptoRetroactivo","cmbCodigoConceptoRetroactivo",dataArray,"") )
    html = html + html_colum2(20,25,"Codigo:", form_input_text("bootstrap","txtCodigoConceptoRetroactivo","txtCodigoConceptoRetroactivo","","") )
    html = html + html_colum2(20,80,"Nombre:", form_input_text("bootstrap","txtNombreCodigoConceptoRetroactivo","txtNombreCodigoConceptoRetroactivo","","") )
	html = html + html_colum2(20,80,form_input_checkbox("bootstrap","chkValorDefecto","chkValorDefecto","",""), "Valor Por Defecto" )


    html = html + html_colum2(20,80,""   ,"<br><br><br>");

    document.getElementById( "title_section" ).innerHTML = "Manteniminto/Pensiones/Concepto  Retroactivo";
    document.getElementById( "js_content" ).innerHTML = html;
}
