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


var Conn = new Conexion();

$(function () {
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

});

function Enter(e){
  if(e.keyCode == 13) {
      Buscar();
  }
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


function CargarAPI(sURL, funcion){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", Conn.URL + sURL);
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        json = JSON.parse(xhttp.responseText);
        if(funcion != undefined){
          function(json);
        }
        return false;
      }
  }
  xhttp.onerror = function() {
      if (this.readyState == 4 && this.status == 0) {
        $.notify("No se puede conectar al servidor");
        $("#_cargando").hide();
      }

  };
  xhttp.send();

}
