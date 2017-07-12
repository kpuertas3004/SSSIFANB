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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  let usr = $("#usuario").val();
  let pwd = $("#clave").val();
  let login = new Login(usr, pwd);
  data = JSON.stringify( login.Login() );
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.6.45:8080/ipsfa/app/api/wusuario/login");
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        json = JSON.parse(xhttp.responseText);
=======
>>>>>>> 48dbace29b0d211be51c838f8f0b9c9e357faed2
  let login = new Login($("#usuario").val(), $("#clave").val());
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.6.45:8080/ipsfa/app/api/wusuario/login");
  xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

        json = JSON.parse(xhttp.responseText);

<<<<<<< HEAD
=======
>>>>>>> 3d2e52fdf907287097f83ac0fd268d5eef8e97e6
>>>>>>> 48dbace29b0d211be51c838f8f0b9c9e357faed2
        sessionStorage.setItem('ipsfaToken', json.token);
        $(location).attr("href","starter.html");
      }
  };
<<<<<<< HEAD
  console.log(JSON.stringify( login.Login() ));
  xhttp.send(JSON.stringify( login.Login() ));
=======
<<<<<<< HEAD
  xhttp.send(data);
=======
  console.log(JSON.stringify( login.Login() ));
  xhttp.send(JSON.stringify( login.Login() ));
>>>>>>> 3d2e52fdf907287097f83ac0fd268d5eef8e97e6
>>>>>>> 48dbace29b0d211be51c838f8f0b9c9e357faed2
}
