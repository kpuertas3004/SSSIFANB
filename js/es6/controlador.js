Number.prototype.zeroPadding = function(){
  var ret = "" + this.valueOf();
  return ret.length == 1 ? "0" + ret : ret;
};


let Frm = "";

class Conexion{
  constructor(){
      this.IP = "192.168.6.45";
      this.Puerto = ":8080";
      this.PuertoSSL = ":2608";
      this.API = "/ipsfa/api/";
      this.URL = "http://" + this.IP + this.Puerto + this.API;
      this.URLS = "http://" + this.IP + this.PuertoSSL + this.API;
  }
}

class Estado{
  constructor() {

  }
  Crear(Json) {
    if (sessionStorage.getItem('ipsfaEstado') == undefined ){
  		 sessionStorage.setItem('ipsfaEstado', JSON.stringify(Json));
  	}
  }
  ObtenerEstados(){
    let estado = JSON.parse(sessionStorage.getItem('ipsfaEstado'));

    $("#cmbmestado").html('<option value="S" selected="selected"></option>');
    $.each(estado, function (c, v){
      $("#cmbmestado").append('<option value="' + v.codigo + '">' + v.nombre + '</option>');
    });

  }
  ObtenerCiudadMunicipio(estado){
    var cm = JSON.parse(sessionStorage.getItem('ipsfaEstado')); //CiudadMunicipio
    $.each(cm, function(c, v){
      if (v.codigo == estado){

        let ciudad = v.ciudad;
        let municipio = v.municipio;
        $("#cmbmciudad").html('<option value="S" selected="selected"></option>');
        $("#cmbmmunicipio").html('<option value="S" selected="selected"></option>');
        $.each(ciudad, function (c,v){
          $("#cmbmciudad").append('<option value="' + v.nombre + '">' + v.nombre + '</option>');
        });
        $.each(municipio, function (c,v){
          $("#cmbmmunicipio").append('<option value="' + v.nombre + '">' + v.nombre + '</option>');
        });
      }
    });
  }
  ObtenerParroquia(estado, municipio){
    var cm = JSON.parse(sessionStorage.getItem('ipsfaEstado')); //CiudadMunicipio
    $.each(cm, function(c, v){
      if (v.codigo == estado){
        var mun = v.municipio;
        $.each(mun, function (c,v){
          if(v.nombre == municipio){
            $("#cmbmparroquia").html('<option value="S"></option>');
            $.each(v.parroquia, function(cl, vl){
              $("#cmbmparroquia").append('<option value="' + vl + '">' + vl + '</option>');
            });
          }
        });
      }
    });
  }
}


class Menu {
  constructor() {}
  ValidarPrivilegio(JsonObjArr){
    var Menu = JsonObjArr.perfil.privilegio;
  }
  //Crear Menu Dinamicamente
  Crear(JsonObjArr) {
      var Menu = JsonObjArr.perfil.menu;
			var menuStr = "<li class='header'>Menu</li>";
			for( var i=0; i<count(Menu) ; i++ )
				menuStr = menuStr + "<li ><a href='#' onclick='CargarUrl(\"_cuerpo\",\""+Menu[i].url+"\")' >\
        <i class='"+Menu[i].icono+"'></i><span>"+Menu[i].nombre+"</span></a></li> ";
			$('#_menu').html(menuStr);
  }
}

var Mnu = new Menu();
var Conn = new Conexion();
var Util = new Utilidad();
var Estados = new Estado();

$(function () {
  CargarAPI("js/es6/esquema.menu.json", "GET","",Mnu);
  CargarAPI(Conn.URL + "estado", "GET", "", Estados);
  CargarUrl("_bxBuscar", "afi/buscar");
  CargarUrl("_bxTarjeta", "afi/tarjeta");
  CargarUrl("_bxDatoBasico", "afi/datobasico");
  CargarUrl("_bxDatosFamiliar", "afi/familiar");
  CargarUrl("_bxTarjetaFamiliar", "afi/tarjetafamiliar");
  CargarUrl("_boxModFamiliares", "afi/modalfamiliares");
  CargarUrl("_contenidoh", "afi/historicomilitar");
  CargarUrl("_contenidohc", "afi/historiaclinica");
  CargarUrl("_contenidorpt", "rpt/constancia");

  CargarUrl("_bxContenedores", "afi/contenedores");

  $("#salvar").hide();
  $('#modMsj').on('shown.bs.modal', function () {
    $('#_aceptar').focus();
  });

  var local = {
        "format": 'YYYY/MM/DD',
        "applyLabel": "Aceptar",
        "cancelLabel": "Cancelar",
        "customRangeLabel": 'Por Rango',
        "daysOfWeek": [
            "Do",
            "Lu",
            "Ma",
            "Mi",
            "Ju",
            "Vi",
            "Sa"
        ],
        "monthNames": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ],
    };

});

function Enter(e){
  if(e.keyCode == 13) {
      Buscar();
  }
}

function CiudadMunicipio(){
  Estados.ObtenerCiudadMunicipio($("#cmbmestado option:selected").val());
}
function SeleccionarParroquia(){
  Estados.ObtenerParroquia($("#cmbmestado option:selected").val(), $("#cmbmmunicipio option:selected").val());
}

function CargarUrl(id, url){
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'inc/' + url + '.html');
  xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
          $('#'+id).html(xhttp.responseText);
       }
   };
   xhttp.onerror = function() {
       if (this.readyState == 4 && this.status == 0) {
         $.notify("El archivo no ha sido encontrado");
       }

   };
   xhttp.send();
}

function GestionarUsuario() {
  CargarUrl("_cuerpo", "usuario")
}


function CConstanciaAfiliacion(){
  $('#modRpt').modal('show');
  $("#lblcedula").text($("#txtcedula").val());
  $("#lblnumerocuenta").text($("#txtnrocuenta").val());
  $("#lblinstitucionfinanciera").text($("#cmbinstfinanciera option:selected").text());
  $("#lbltipocuenta").text($("#cmbtipofinanciera option:selected").text());
}

function Editar(){
  $('#modMsj').modal('show');
}

function HistoricoMilitar(){
  $('#modHistoricoMilitar').modal('show');
}

function HistoriaClinica(){
  $('#modHistoriaClinica').modal('show');
}


function CargarAPI(sURL, metodo, valores, Objeto){
  var xhttp = new XMLHttpRequest();
  xhttp.open(metodo, sURL);
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(Objeto != undefined){
          Objeto.Crear(JSON.parse(xhttp.responseText));
        }else{
          respuesta = JSON.parse(xhttp.responseText);
          if (respuesta.tipo != 0){
            $.notify("Se ha Insertado correctamente", "success");
          }
        }
      }
  }
  xhttp.onerror = function() {
      if (this.readyState == 4 && this.status == 0) {
        $.notify("No se puede conectar al servidor");
        $("#_cargando").hide();
      }

  };
  if(valores != undefined){
    xhttp.send(JSON.stringify(valores));
  }else{
    xhttp.send();
  }


}





function readURL(input, id) {
 	var archivo = input.files[0];
	bFile = 0;
	type = 'image.*';
	if(archivo.size < 1000000){
    if (input.files && input.files[0]) {
    	if (!archivo.type.match(type)) {
    		$.notify('El formato de archivo debe ser: (' + type + ')');
    		limpiarObjetos(input, id);
    		return false;
    	}
    	$("#load" + id).show();
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#' + id).attr('src', e.target.result);
          bFile = 1;
        };
    reader.readAsDataURL(input.files[0]);
    $("#load" + id).hide();
    }
  }else{
   limpiarObjetos(input, id);
	 $.notify('No se puede subir un archivo mayor a 1 MB');
 }
}


function limpiarObjetos(input, id){
   input.value = "";
   $('#view-' + id).html('<img style="width: 140px;height: 140px; margin-left: 0px" class="file-path-wrapper-pre-view" id="pre-view-' + id + '" />');
 }
