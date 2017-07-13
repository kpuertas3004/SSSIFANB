


_INTERFAZ = '';
_PRV = {};
_PRIVILEGIO = {};

 $(function () {

 	cargarMenu();
 	var t = $('#reporteUPP').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false
    });    
    t.clear().draw();
 });





function cUsers(){
	
	var url = sUrlP + 'obtenerMHijos/' + $("#cmbUsuarios option:selected").val();
	t = $('#reporteUPP').DataTable();
   	t.clear().draw();

	$("#cmbMenu").html('');
	$('#menu').val(0);
	$("#submenu").html('<option value=0>Seleccionar...</option>');
	$("#perfil").html('<option value=0>Seleccionar...</option>');
	$("#privilegio").html('<option value=0>Seleccionar...</option>');

	$.post(url).done(function (data){

		$.each(data, function (x,y){		
			$("#cmbMenu").append('<optgroup label="' + x + '">');

            $.each(y, function(c, v){ 
				$("#cmbMenu").append('<option value="' + v.oid + '|' + v.url + '">' + v.desc + '</option>');
			});    
            
		});

	});

}

function cargarMenu(){
	
	var url = sUrlP + 'listarMenu';
	
	$("#menu").html('<option value="0">Seleccionar...</option>');
	$("#submenu").html('<option value=0>Seleccionar...</option>');
	$("#perfil").html('<option value=0>Seleccionar...</option>');
	$("#privilegio").html('<option value=0>Seleccionar...</option>');
	$.post(url).done(function (data){
		$.each(data, function (x,y){			
			$("#menu").append('<option value="' + y.oid + '">' + y.nomb + '</option>');            
		});

	});	
}

function cargarSubMenu(){
	t = $('#reporteUPP').DataTable();
   	t.clear().draw();
	var url = sUrlP + 'listarSubMenu/' + $("#menu option:selected").val();
	$("#submenu").html('<option value=0>Seleccionar...</option>');
	$("#perfil").html('<option value=0>Seleccionar...</option>');
	$("#privilegio").html('<option value=0>Seleccionar...</option>');
	$.post(url).done(function (data){
		$.each(data, function (x,y){
			$("#submenu").append('<option value="' + y.oid + '|' + y.url + '">' + y.obse + '</option>');            
		});
	});	
}


/**
* Perfil
*
*/
function cargarPerfil(){
	t = $('#reporteUPP').DataTable();
   	t.clear().draw();
   	var uid = $("#cmbUsuarios option:selected").val();
	var id = $("#submenu option:selected").val();
	var u = id.split("|");
	var url = sUrlP + 'listarPerfilPrivilegios/' + u[1] + '/' + uid;	
	$("#perfil").html('<option value=0>Seleccionar...</option>');
	$("#privilegio").html('<option value=0>Seleccionar...</option>');
	$.post(url).done(function (data){
		console.log(data);

		_PRIVILEGIO = data;
		$.each(data, function (x,y){
			$("#perfil").append('<option value="' +  y[0].oidp + '">' + x + '</option>');            
		});
	});	

}

function cargarPP(){
	t = $('#reporteUPP').DataTable();
   	t.clear().draw();
	var id = $("#cmbMenu option:selected").val();
	var uid = $("#cmbUsuarios option:selected").val();
	
	var u = id.split("|");
	var url = sUrlP + 'listarPerfilPrivilegios/' + u[1] + '/' + uid;

	$.post(url).done(function (data){
		_PRIVILEGIO = data;
		cargarPrivilegios(1);
	});
}

/**
*	Privilegio	
*
*/
function cargarPrivilegios(id){
	t = $('#reporteUPP').DataTable();
   	t.clear().draw();
   	if ($("#perfil").val() == 0 ) return false;
   	//console.log(_PRIVILEGIO);
	$.each(_PRIVILEGIO, function (x,y){
		$.each(y, function(p, q){
			activar(q.cod, q.nomb, q.visi);
		});
		

	});
}

function removerMenu(){
	var id = $("#cmbMenu option:selected").val();
	var uid = $("#cmbUsuarios option:selected").val();

	var texto = $("#cmbMenu option:selected").text();
	var boton = '<button type="button" class="btn btn-danger pull-right" onclick="continuar()">';
            boton += '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;No</button>';
            boton += '<button type="button" class="btn btn-success" onclick="desactivar(' + uid +  ',' + id +  ')">';
            boton += '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;Si</button>';
    var msj = '¿Está seguro que desea desactivar ' + texto + '?';
    $("#divContinuar").html(boton);
    $("#txtMensaje").html(msj);
    $("#logMensaje").modal('show');
}

function desactivar(uid, idm){
	alert(uid + ' ->  ' + idm);
}

function agregarMenu(){
	var uid = $("#cmbUsuarios option:selected").val();
	var idm = $("#menu option:selected").val();
	var ids = $("#submenu option:selected").val();
	var idp = $("#perfil option:selected").val();
	var idpr = $("#privilegio option:selected").val();

	var texto = $("#submenu option:selected").text();
	var boton = '<button type="button" class="btn btn-danger pull-right" onclick="continuar()">';
            boton += '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;No</button>';
            boton += '<button type="button" class="btn btn-success" onclick="activar()">';
            boton += '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;Si</button>';
    var msj = '¿Está seguro que desea activar ' + texto + '?';
    $("#divContinuar").html(boton);
    $("#txtMensaje").html(msj);
    $("#logMensaje").modal('show');
}

function continuar(){
    $("#logMensaje").modal('hide');
}

function activar(idpr, idprt, visi){
	
   	t = $('#reporteUPP').DataTable();
   
    var uid = $("#cmbUsuarios option:selected").val();
	var idm = $("#menu option:selected").val();
	var ids = $("#submenu option:selected").val();
	var idst = $("#submenu option:selected").text();
	var idp = $("#perfil option:selected").val();
	var idpt = $("#perfil option:selected").text();
	var s = ids.split("|"); 
	
    checked = "";
    if (visi == "1") checked = "checked";
   
    t.row.add( [
       '<input id="' + idpr +'" type="checkbox" value="' + idprt +'" ' + checked + '>',
       idprt,
       uid, //ID
       idm,
       s[0],
       idp,
       idpr
    ] ).draw( false );

    t.column(2).visible(false);
    t.column(3).visible(false);
    t.column(4).visible(false);
    t.column(5).visible(false);
    t.column(6).visible(false);
   
   	//check();
    //continuar();

}

function actualizarPrivilegios(){
	var uid = $("#cmbUsuarios option:selected").val();
	var idm = $("#menu option:selected").val();
	var ids = $("#submenu option:selected").val();	
	var idp = $("#perfil option:selected").val();
	var s = ids.split("|");
	var t = $('#reporteUPP').DataTable();
 	var privilegio = [];
 	var i = 0;

	t
    .column( 6 )
    .data()
    .each( function ( value, index ) {
    	check = 0;
    	if($("#" + value).is(':checked') == true)check = 1;	    	
    	privilegio[i] = {id:value, est: check};
    	i++;       
    } );

    var data = JSON.stringify({
    	uid : uid,
    	idm: idm,
    	ids: s[0],
    	idp: idp,
    	pri: privilegio
    });
    
   	t.clear().draw(false);
	var url = sUrlP + 'UpsertPerfilPrivilegios';
	$.post(url, {data: data})
	.done(function (data){
		console.log("Proceso exitoso");
	});

	$("#cmbUsuarios").val(0);
	cUsers();

}


function detallesUsuario(){
	//console.log("AQUI");
	var url = sUrlP + 'obtenerUsuario/' + $("#cmbListadoUsuario option:selected").val();
	$.post(url)
	.done(function (data){		
		$("#idUser").val($("#cmbListadoUsuario option:selected").val());
		$("#nombre").val(data[0].nombre + ' ' + data[0].apellido);
		$("#seudonimo").val( $("#cmbListadoUsuario option:selected").text());
		$("#correo").val(data[0].correo);
		$("#telefono").val(data[0].pregunta_secreta)
		$("#estatus").val(data[0].status_id);
		$("#fecha").val(data[0].f_ult_modificacion);
		$("#observacion").val(data.observ_ult_modificacion);

	});
	
}

function UpsertUsuario(){

	var nom = $("#nombre").val();
	var seu = $("#seudonimo").val();
	var cor = $("#correo").val();
	var cla = $("#clave").val();
	var rcl = $("#rclave").val();
	var obs = $("#observacion").val();

	if(nom == "" || seu == "" || cor == "" || cla == "" || rcl == ""){		
		msjErr ('Los datos para crear el usuario deben estar completos verifique e intente de nuevo');
	}else{
		if(cla != rcl) {
			msjErr('Las claves no son iguales intente de nuevo');
		}else{
			msjCrear(nom);
		}

	}


}

function msjCrear(msj){

	var boton = '<button type="button" class="btn btn-danger pull-right" onclick="continuar()">';
            boton += '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;No</button>';
            boton += '<button type="button" class="btn btn-success" onclick="salvarDatos()">';
            boton += '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;Si</button>';
    var msj = '¿Está seguro que desea crear el usuario ' + msj + '?';
    $("#divContinuar").html(boton);
    $("#txtMensaje").html(msj);
    $("#logMensaje").modal('show');
}

function msjErr(msj){	
	var boton = '<button type="button" class="btn btn-danger pull-right" onclick="continuar()">';
        boton += '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;Continuar</button>';
    
    $("#divContinuar").html(boton);
    $("#txtMensaje").html(msj);
    $("#logMensaje").modal('show');
}

function salvarDatos(){
	var data = JSON.stringify({
		id : $("#idUser").val(),
		nom : $("#nombre").val(),
		seu : $("#seudonimo").val(),
		tel : $("#telefono").val(),
	 	cor : $("#correo").val(),
	 	cla : $("#clave").val(),
	 	rcl : $("#rclave").val(),
	 	est : $("#estatus").val(),
	 	obs : $("#observacion").val()
	 });

	var url = sUrlP + 'UpsertUsuario';
	$.post(url, {data: data})
	.done(function (data){
		
		console.log("Proceso exitoso");
		var val = $("#id").val();
	    URL = sUrlP + "administrar";
	    $(location).attr('href', URL);
	});
	$("#logMensaje").modal('hide');
	

}