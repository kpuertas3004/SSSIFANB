function GestionarUsuario() {
   var xhttp = new XMLHttpRequest();
   xhttp.open('GET', 'inc/usuario.html');
   xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           $('#_cuerpo').html(xhttp.responseText);
        }

    };
    xhttp.send();
}
