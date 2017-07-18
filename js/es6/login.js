class Conexion{
  constructor(){
      this.IP = "192.168.6.45";
      this.Puerto = ":8080";
      this.PuertoSSL = ":2608";
      this.URL = "http://" + this.IP + this.Puerto;
      this.URLS = "http://" + this.IP + this.PuertoSSL;
      this.CDN = "http://192.168.12.161/imagenes";
  }
}


var Conn = new Conexion();
class Login {
  constructor(usr, clv) {
    this.nombre = usr;
    this.clave = clv;
  }
  Login(){
    return this;
  }
}


$(function (){
  $('#clave').keyup(function(e){
    if(e.keyCode == 13) {
        Ingresar();
    }
  });
});

function Ingresar(){
  let login = new Login($("#usuario").val(), $("#clave").val());
  var xhttp = new XMLHttpRequest();


  xhttp.open("POST", Conn.URL + "/ipsfa/app/api/wusuario/login");
  xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         json = JSON.parse(xhttp.responseText);
         sessionStorage.setItem('ipsfaToken', json.token);
         $(location).attr("href","starter.html");
       }
   };

   xhttp.onerror = function() {
       if (this.readyState == 4 && this.status == 0) {
         $.notify("No se puede conectar al servidor");
         $("#_cargando").hide();
       }

   };

  xhttp.send(JSON.stringify(login.Login()));

}
