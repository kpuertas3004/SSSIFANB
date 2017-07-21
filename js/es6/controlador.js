Number.prototype.zeroPadding = function(){
  var ret = "" + this.valueOf();
  return ret.length == 1 ? "0" + ret : ret;
};

class Conexion{
  constructor(){
      this.IP = "192.168.6.45";
      this.Puerto = ":8080";
      this.PuertoSSL = ":2608";
      this.URL = "http://" + this.IP + this.Puerto;
      this.URLS = "http://" + this.IP + this.PuertoSSL;
  }
}


class Menu {
  constructor() {

  }
  ValidarPrivilegio(JsonObjArr){
    var Menu = JsonObjArr.perfil.privilegio;
  }
  //Crear Menu Dinamicamente
  CrearMenu(JsonObjArr) {
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
$(function () {
  CargarAPI("js/es6/esquema.menu.json", "GET","",Mnu);
  CargarUrl("_bxBuscar", "afi/buscar");
  CargarUrl("_bxTarjeta", "afi/tarjeta");
  CargarUrl("_bxDatoBasico", "afi/datobasico");
  CargarUrl("_bxDatosFamiliar", "afi/familiar");
  CargarUrl("_bxTarjetaFamiliar", "afi/tarjetafamiliar");
  CargarUrl("_contenidoh", "afi/historicomilitar");
  CargarUrl("_contenidohc", "afi/historiaclinica");
  CargarUrl("_contenidorpt", "rpt/constancia");

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


function CargarUrl(id, url){
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'inc/' + url + '.html', false);
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
          Objeto.CrearMenu(JSON.parse(xhttp.responseText));
        }else{
          respuesta = JSON.parse(xhttp.responseText);
          if (respuesta.tipo != 0){
            $.notify("Se ha Insertado correctamente");
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
