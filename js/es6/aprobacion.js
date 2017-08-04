
class LstCarnet {
    constructor() {

    }

    Crear(Json) {
        if (Json == null) {
            return false
        }

        var tabla = "_tblPendiente";
        var buzon = "tblPendientesBuzon";
        if (Estatus != 0) {
            tabla = "_tblPendienteImp";
            buzon = "tblPendientesBuzonImp";
        }
        //alert(tabla);
        //$("#"+tabla).html(PendienteHTML());
        var t = $('#' + buzon).DataTable({
            'paging': false,
            'lengthChange': false,
            'searching': false,
            'ordering': false,
            'info': false,
            'autoWidth': false,

        });
        t.clear().draw();
        var j = 0;

        Json.forEach(v => {
            console.log(v);
            if(Estatus == 0 ){
            var boton = `<div class="btn-group">
        <button type="button" class="btn btn-sm btn-info" onclick="verCarnet('${v.serial}','${v.id}','${v.fechavencimiento}',1)">
        <i class="fa fa-search"></i></button>
        <button type="button"  class="btn btn-sm btn-success" onclick="aprobarCarnet('${v.serial}',1)">
        Aprobado</button>
        <button type="button" class="btn btn-sm btn-danger" onclick="pendienteCarnet('${v.serial}','${Estatus}')">
        Pendiente</button>
        </div>`;
        } else{
            var boton = `<div class="btn-group">
        <button type="button" class="btn btn-sm btn-primary" onclick="verCarnet('${v.serial}','${v.id}','${v.fechavencimiento}',0)">
        <i class="fa fa-print"></i></button>

        </div>`;
        }

        t.row.add([
            j++, //0
            v.id, //1
            v.Grado.descripcion, //2
            v.nombre + " " + v.apellido, //3
            this.ObtenerMotivo(v.motivo), //v.motivo, //
            boton //5
        ]).draw(false);
    });

    }

    ObtenerMotivo(motivo) {
        var cadena = "";
        switch (motivo) {
            case "I" :
                cadena = "INGRESO";
                break;
            case "C" :
                cadena = "ASCENSO";
                break;
            case "CS" :
                cadena = "CAMBIO SITUACION";
                break;
            case "V" :
                cadena = "VENCIMIENTO";
                break;
            case "D" :
                cadena = "DETERIORO";
                break;
            case "E" :
                cadena = "EXTRAVIO";
                break;
            default:
                cadena = "********";
                break;
        }
        return cadena;
    }
}

let listaCarnet = new LstCarnet();
let Estatus = 0;


/**
 * Listar Carnet's
 *
 **/
function ListarCarnet(estatus) {
    Estatus = estatus;
    var ruta = Conn.URL + "carnet/listar/" + estatus;
    CargarAPI(ruta, "GET", "", listaCarnet);
}

function aprobarCarnet(serial, estatus) {
    CargarAPI(Conn.URL + "carnet/apro/" + estatus + "/" + serial, "GET");
}

function pendienteCarnet(serial, estatus) {
    CargarAPI(Conn.URL + "carnet/apro/2/" + serial, "GET");
}

function verCarnet(serial, cedula,vence,estatus) {
    CargarAPI(Conn.URL + "carnet/apro/0/" + serial, "GET");
    CargarUrl("_objectPDF", "rpt/carnet");
    let ObjMilitar = new Militar();
    let OqMilitar = new Militar();
    var xhttp = new XMLHttpRequest();
    var url = Conn.URL + "militar/crud/" + cedula;
    xhttp.open("GET", url);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          OqMilitar.Cargar(JSON.parse(xhttp.responseText));
          var militar = OqMilitar;
          url = "images/grados/" + militar.Grado.abreviatura + ".png";
          url = url.toLowerCase();
          $("#imggradoCarnet").attr("src", url);
          //url = "http://192.168.12.161/imagenes/" + cedula + ".jpg";

          url = "temp/" + cedula + "/huella.bmp";
          $("#imghuellaCarnet").attr("src", url);

          url = "temp/" + cedula + "/foto.jpg";
          $("#imgfotoCarnet").attr("src", url);
          $("#lblgrado").html(militar.Grado.descripcion);
          $("#lblnombre").html(militar.Persona.DatoBasico.nombreprimero);
          $("#lblapellido").html(militar.Persona.DatoBasico.apellidoprimero);
          $("#lblcedula").html("C.I. " + militar.Persona.DatoBasico.cedula);
          $("#divserial").html(serial);
          $("#divvencimiento").html("VENCE " + Util.ConvertirFechaHumana(vence));

          $("#divcategoria").html(militar.ObtenerCategoria());
          $("#divsiglas").html(militar.Componente.abreviatura);
          url = "images/firma.png";
          $("#imgfirmaCarnet").attr("src", url);

          if (militar.clase == "TPROF"){
            $("#notapie").html('AUTORIZADO PARA PORTAR ARMAS DE FUEGO EN COMISIÓN DE SERVICIO, EN ACTOS DEL SERVICIO O EN OCASIÓN DE ESTE');
          } else{
            $("#notapie").html('AUTORIZADO PARA PORTAR ARMAS DE FUEGO ASIGNADAS POR LA FANB');
          }

          $("#lblcodigo").html(militar.codigocomponente);
          $("#lblhistoria").html(militar.numerohistoria);
          $("#lblcabello").html(militar.Persona.DatoFisionomico.ObtenerCabello());
          $("#lblgrupo").html(militar.Persona.DatoFisionomico.gruposanguineo);
          $("#lblestatura").html(militar.Persona.DatoFisionomico.estatura);
          $("#lblojos").html(militar.Persona.DatoFisionomico.ObtenerOjo());
          $("#lblcolor").html(militar.Persona.DatoFisionomico.ObtenerPiel());

          ImprimirCarnet("_objectPDF");
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
