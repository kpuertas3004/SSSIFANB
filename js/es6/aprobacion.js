



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
function aprobarCarnet(serial, estatus) {
    CargarAPI(Conn.URL + "carnet/apro/" + estatus + "/" + serial, "GET");
    var tabla = "_tblPendiente";
    var buzon = "tblPendientesBuzon";
    if (Estatus != 0) {
        tabla = "_tblPendienteImp";
        buzon = "tblPendientesBuzonImp";
    }
    //alert(tabla);
    //$("#"+tabla).html(PendienteHTML());
    var table = $('#' + buzon).DataTable();

    $("#"+buzon+" tbody").on( 'click', 'button.desaparece', function () {
        table
            .row( $(this).parents('tr') )
            .remove()
            .draw();
    } );
}

function pendienteCarnet(serial, estatus) {
    CargarAPI(Conn.URL + "carnet/apro/2/" + serial, "GET");
}

function cerrarCarnet(serial) {
    CargarAPI(Conn.URL + "carnet/apro/3/" + serial, "GET");
}


function verCarnetFamiliar(serial, cedula, vence, estatus,idf) {

    CargarUrl("_objectPDF2", "rpt/carnetfamiliar");
    let ObjMilitar = new Militar();
    let OqMilitar = new Militar();
    var xhttp = new XMLHttpRequest();
    var url = Conn.URL + "militar/crud/" + cedula;
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('ipsfaToken'));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var militar = JSON.parse(xhttp.responseText);
            //console.log(militar.Familiar);
            var hasta = militar.Familiar.length;

            var pos = "";

            for(var i=0;i< hasta;i++){
                if(militar.Familiar[i].Persona.DatoBasico.cedula == idf ){
                    pos = i;
                    break;
                }
            }
            if(pos != ""){

            }

            var rutaimgfamiliar = Conn.URLTEMP;
            //console.log(militar);
            var url = rutaimgfamiliar + cedula + "/foto" + idf + ".jpg";
            $("#imgfotoCarnetf").attr("src", url);
            url = rutaimgfamiliar + cedula + "/firma" + idf+ ".jpg";

            $("#imgfirmaCarnetf").attr("src", url);
            var fecha vence = Util.ConvertirFechaHumana(vence).split("/");
            $("#divfechavencimiento").html("05/07/"+fecha_vence[2]);
            $("#lblnombref").html(militar.Familiar[pos].Persona.DatoBasico.nombreprimero);
            $("#lblapellidof").html(militar.Familiar[pos].Persona.DatoBasico.apellidoprimero);
            $("#lblcedulaf").html(idf);
            $("#lblparentescof").html(Util.ConvertirParentesco(militar.Familiar[pos].parentesco,militar.Familiar[pos].Persona.DatoBasico.sexo));
            $("#lblafiliadof").html(militar.Persona.DatoBasico.apellidoprimero+" "+militar.Persona.DatoBasico.nombreprimero+" CI:"+cedula);

            url = rutaimgfamiliar + cedula + "/huella" + idf + ".bmp";

            $("#imghuellaCarnetf").attr("src", url);

            $("#lblhistoriaf").html(militar.Familiar[pos].historiamedica);
            $("#lblgsanguineof").html(militar.Familiar[pos].Persona.DatoFisionomico.gruposanguineo);
            $("#lbldonantef").html(militar.Familiar[pos].donante);
            $("#lblfechanacf").html(Util.ConvertirFechaHumana(militar.Familiar[pos].Persona.DatoBasico.fechanacimiento));

            ImprimirCarnetFamiliar("_objectPDF2");
        }

    }
    xhttp.onerror = function () {
        if (this.readyState == 4 && this.status == 0) {
            $.notify("No se puede conectar al servidor");
            $("#_cargando").hide();
        }
    };

    xhttp.send();
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
