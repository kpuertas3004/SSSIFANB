



// function verCarnet(serial, cedula, vence, estatus,idf) {
//
//     // CargarUrl("_objectPDF", "rpt/carnet");
//     // var ObjMilitar = new Militar();
//     // var OqMilitar = new Militar();
//     // var xhttp = new XMLHttpRequest();
//     // var url = Conn.URL + "militar/crud/" + cedula;
//     alert("HOLA");
//     // xhttp.open("GET", url, true);
//     // xhttp.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('ipsfaToken'));
//     // xhttp.onreadystatechange = function () {
//     //     if (this.readyState == 4 && this.status == 200) {
//     //       OqMilitar.Cargar(JSON.parse(xhttp.responseText));
//     //       var militar = OqMilitar;
//     //       url = "images/grados/" + militar.Grado.abreviatura + ".png";
//     //       url = url.toLowerCase();
//     //
//     //       rutaimg = Conn.URLTEMP;
//     //
//     //       $("#imggradoCarnet").attr("src", url);
//     //       alert(url);
//     //       //url = "http://192.168.12.150/imagenes/" + cedula + ".jpg";
//     //
//     //       url = rutaimg + cedula + "/huella.bmp";
//     //       $("#imghuellaCarnet").attr("src", url);
//     //       // alert(url);
//     //
//     //       url = rutaimg + cedula + "/foto.jpg";
//     //       $("#imgfotoCarnet").attr("src", url);
//     //       //alert(url);
//     //       $("#lblgrado").html(militar.Grado.descripcion);
//     //       $("#lblnombre").html(militar.Persona.DatoBasico.nombreprimero);
//     //       $("#lblapellido").html(militar.Persona.DatoBasico.apellidoprimero);
//     //       $("#lblcedula").html("C.I. " + militar.Persona.DatoBasico.cedula);
//     //       $("#divserial").html(serial);
//     //       $("#divvencimiento").html("VENCE " + Util.ConvertirFechaHumana(vence));
//     //
//     //       $("#divcategoria").html(militar.ObtenerCategoria());
//     //       var comp = militar.Componente.abreviatura;
//     //       if(militar.Componente.abreviatura == "AV"){
//     //           comp = "AN"
//     //       }
//     //       $("#divsiglas").html(comp+"B");
//     //       url = "images/firma.png";
//     //       $("#imgfirmaCarnet").attr("src", url);
//     //
//     //       if (militar.clase == "TPROF"){
//     //         $("#notapie").html('AUTORIZADO PARA PORTAR ARMAS DE FUEGO EN COMISIÓN DE SERVICIO, EN ACTOS DEL SERVICIO O EN OCASIÓN DE ESTE');
//     //       } else{
//     //         $("#notapie").html('AUTORIZADO PARA PORTAR ARMAS DE FUEGO ASIGNADAS POR LA FANB');
//     //       }
//     //
//     //       $("#lblcodigo").html(militar.codigocomponente);
//     //       $("#lblhistoria").html(militar.numerohistoria);
//     //       $("#lblcabello").html(militar.Persona.DatoFisionomico.ObtenerCabello());
//     //       $("#lblgrupo").html(militar.Persona.DatoFisionomico.gruposanguineo);
//     //       $("#lblestatura").html(militar.Persona.DatoFisionomico.estatura);
//     //       $("#lblojos").html(militar.Persona.DatoFisionomico.ObtenerOjo());
//     //       $("#lblcolor").html(militar.Persona.DatoFisionomico.ObtenerPiel());
//     //       $("#divserial").html('CCS' + serial);
//     //       $("#divvencimiento").html("VENCE " + Util.ConvertirFechaHumana(vence));
//     //       ImprimirCarnet("_objectPDF");
//     //   }
//     //
//     // }
//     // xhttp.onerror = function () {
//     //     if (this.readyState == 4 && this.status == 0) {
//     //         $.notify("No se puede conectar al servidor");
//     //         $("#_cargando").hide();
//     //     }
//     // };
//     //
//     // xhttp.send();
// }


let listaCarnet = new LstCarnet();
let Estatus = 0;


function pendienteCarnet(serial, estatus) {
    CargarAPI(Conn.URL + "carnet/apro/2/" + serial, "GET");
}

function cerrarCarnet(serial) {
    CargarAPI(Conn.URL + "carnet/apro/3/" + serial, "GET");
}




function ImprimirCarnet2(nombre) {
    var html = $("#" + nombre).html();
    console.log(html);
    var ventana = window.open("", "_blank");
    ventana.document.write(html);
    //ventana.document.head.innerHTML = ;
    ventana.print();
    ventana.close();
}
