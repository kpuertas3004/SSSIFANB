class Login {
  constructor(usr, clv) {
    this.nombre = usr;
    this.clave = clv;
  }

  Login(){
    return this;
  }
}


function Ingresar(){
  let usr = $("#usuario").val();
  let pwd = $("#clave").val();
  let login = new Login(usr, pwd);
  data = JSON.stringify( login.Login() );
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.6.45:8080/ipsfa/app/api/wusuario/login");
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        json = JSON.parse(xhttp.responseText);
        sessionStorage.setItem('ipsfaToken', json.token);
        $(location).attr("href","starter.html");
      }
  };
  xhttp.send(data);
}
