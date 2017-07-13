/*
Desarrollado por  :  Karina Puertas
Correo            :  dsadsada@gmail.com
Fecha Creacion    :  23-06-2017  
Fecha Modificacion:  23-06-2017  
Descripcion       :  dfdfdd fdhfdsjhfdsf
*/


//Dynamic Menu System
MNU[count(MNU)] = "Gerencia 2|Medicos:f2__2_1()";


//registra los datos basicos de medico
function f2__2_1()
{
	var html = "";



var html = "";
var css1 = "width:40%;float:left;text-align:right;border:1px solid;height:40px;"; 
var css2 = "width:60%;float:left;border:1px solid;height:40px;"; 
var css3 = "clear:both;"; 

//Canal Liquidaci&oacuten
html = html +"<div style='"+css1+"' >Canal Liquidaci&oacuten</div>";
html = html +"<div style='"+css2+"' ><input name='txtCanalLiquidacionMedico' type='text' id='txtCanalLiquidacion' /></div>";
html = html +"<div style='"+css3+"' ></div>";



//N&uacute;mero de MSAS
html = html +"<div style='"+css1+"' >N&uacute;mero de MSAS</div>";
html = html +"<div style='"+css2+"' ><select name='cmbNitMedico' id='cmbNitMedico'><option value='MIL'>MILITAR</option><option value='PER'>PERSONAL</option></select></div>";
html = html +"<div style='"+css3+"' ></div>";






//Fecha Ing. Carnet
html = html +"<div style='"+css1+"' >Fecha Ing. Carnet</div>";
html = html +"<div style='"+css2+"' ><input name='txtFechaIngresoCarnetMedico' type='text' id='txtFechaIngCarnetMedico' /></div>";
html = html +"<div style='"+css3+"' ></div>";

//Fecha Venc. Carnet
html = html +"<div style='"+css1+"' >Fecha Venc. Carnet</div>";
html = html +"<div style='"+css2+"' ><input name='txtFechaVecimientoCarnetMedico' type='text' id='txtFechaVecimientoCarnetMedico' /></div>";
html = html +"<div style='"+css3+"' ></div>";

//N&uacute;mero de Carnet
html = html +"<div style='"+css1+"' >N&uacute;mero de Carnet</div>";
html = html +"<div style='"+css2+"' ><input name='txtNumeroCarnetMedico' type='text' id='txtNumeroCarnetMedico' /></div>";
html = html +"<div style='"+css3+"' ></div>";

//Int. Finaciero
html = html +"<div style='"+css1+"' >Int. Finaciero</div>";
html = html +"<div style='"+css2+"' ><select name='cmbInstitucionFinancieramedico' id='cmbInstitucionFinancieramedico'><option></option><option value='1'>INSTITUCION 1</option><option value='2'>INSTITUCION 2</option><option value='3'>INSTITUCION 3</option></select></div>";
html = html +"<div style='"+css3+"' ></div>";

//Tipo de Cuenta
html = html +"<div style='"+css1+"' >Tipo de Cuenta</div>";
html = html +"<div style='"+css2+"' ><select name='cmbTipoCuentaMedico' id='cmbTipoCuentaMedico'><option></option><option value='1'>AHORRO</option><option value='2'>CORRIENTE</option></select></div>";
html = html +"<div style='"+css3+"' ></div>";


//N&uacute;mero de Cuenta
html = html +"<div style='"+css1+"' >N&uacute;mero de Cuenta</div>";
html = html +"<div style='"+css2+"' ><input name='txtNumeroCuentaMedico' type='text' id='txtNumeroCuentaMedico' /></div>";
html = html +"<div style='"+css3+"' ></div>";


//Es Militar
html = html +"<div style='"+css1+"' >Es Militar</div>";
html = html +"<div style='"+css2+"' >SI <input type='checkbox' name='chkmilitarmedico' value='chkmilitarmedico' /> NO <input type='checkbox' name='chkactivomedico' value='chkactivomedico' /></div>";
html = html +"<div style='"+css3+"' ></div>";




document.getElementById( "js_content" ).innerHTML = html;


}


