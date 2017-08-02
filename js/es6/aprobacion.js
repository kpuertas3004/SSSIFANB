
class LstCarnet{
  constructor() {

  }
  Crear(Json) {
      if (Json == null){
        return false
      }
      $("#_tblPendiente").html(PendienteHTML());
      var t = $('#tblPendientesBuzon').DataTable({
        'paging'      : false,
        'lengthChange': false,
        'searching'   : false,
        'ordering'    : false,
        'info'        : false,
        'autoWidth'   : false
      });
      t.clear().draw();
      var j = 0;

      Json.forEach(v => {
        var boton = `<div class="btn-group">
        <button type="button" class="btn btn-sm btn-info" onclick="verCarnet('${v.serial}')">
        <i class="fa fa-search"></i></button>
        <button type="button"  class="btn btn-sm btn-success" onclick="aprobarCarnet('${v.serial}')">
        Aprobado</button>
        <button type="button" class="btn btn-sm btn-danger" onclick="pendienteCarnet('${v.serial}')">
        Pendiente</button>
        </div>`;
        t.row.add ([
          j++, //0
          v.id, //1
          v.Grado.descripcion, //2
          v.nombre + " " + v.apellido, //3
          this.ObtenerMotivo(v.motivo), //v.motivo, //
          boton //5
        ]).draw(false);
      });
  }
  ObtenerMotivo(motivo){
    var cadena = "";
    switch (motivo){
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
/**
* Listar Carnet's
*
**/
function ListarCarnet(estatus){
  var ruta = Conn.URL + "carnet/listar/"+ estatus;
  CargarAPI(ruta, "GET", "", listaCarnet);


}

function PendienteHTML(){
  var html = `<table class="ui celled table " cellspacing="0" width="100%" id="tblPendientesBuzon" >
    <thead>
      <tr>
        <th style="width:50px">NRO.</th>
        <th style="width:100px">CÉDULA</th>
        <th style="width:180px">GRADO / PARENTESCO</th>
        <th>APELLIDOS Y NOMBRES</th>
        <th>MOTIVO </th>
        <th style="width:220px">ACCIONES </th>
      </tr>
    </thead >
    <tbody>
      <tr>
        <td>1</td>
        <td>10107698</td>
        <td>CORONEL</td>
        <td>RAMON ANTONIO PAREDES</td>
        <td>RENOVACION</td>
        <td>
           <div class="btn-group">
             <button type="button" id="btnModFamiliar" class="btn btn-sm btn-info" onclick="ModificarFamiliarPos">
               <i class="fa fa-search"></i></button>
              <button type="button" id="btnModFamiliar" class="btn btn-sm btn-success" onclick="ModificarFamiliarPos">
                Aprobado</button>
              <button type="button" id="btnModFamiliar" class="btn btn-sm btn-danger" onclick="ModificarFamiliarPos">
                Pendiente</button>
            </div>
        </td>
      </tr>

    </tbody>
  </table>`;
  return html;
}
