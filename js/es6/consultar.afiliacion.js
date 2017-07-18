function Buscar( id ){
  if (id != undefined) {
    $("#_cedula").val(id);
  }
  if($("#_cedula").val() == ""){
    $("#_contenido").html("Debe introducir una cédula");
    $("#_botones").html('<button type="button" class="btn btn-default" data-dismiss="modal" id="_aceptar" onClick="IrCedula()">Aceptar</button>')
    $("#modMsj").modal("show");
    return false;
  }
  $("#_cargando").show()
  $("#_imgfamiliar").attr("src", "images/ndisponible.jpg");
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", Conn.URL + "/ipsfa/api/militar/crud/" + $("#_cedula").val());
  xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

        militar = JSON.parse(xhttp.responseText);
        if(militar.tipo != undefined){
          $("#_cedula").val("");
          $("#_contenido").html("El usuario no existe");
          $("#_botones").html('<button type="button" class="btn btn-default" data-dismiss="modal" id="_aceptar">Aceptar</button>')
          $("#modMsj").modal("show");
          $("#_aceptar").focus();

        }else{
          t =  $('#tblresultados').DataTable({
            'paging'      : false,
            'lengthChange': false,
            'searching'   : false,
            'ordering'    : false,
            'info'        : false,
            //'autoWidth'   : false
             'autoWidth'   : false
          });
          t.clear();
          var DB = militar.Persona.DatoBasico;
          $("#txtcedula").val(DB.cedula);
          url = "images/grados/" + militar.Grado.abreviatura + ".png";
          url = url.toLowerCase();
          $("#_imggrado").attr("src", url);
          url = "http://192.168.12.161/imagenes/" +  $("#txtcedula").val() + ".jpg";
          $("#_img").attr("src", url);
          $("#_imgcarnetmilitar").attr("src", url);
          $("#_objectPDF").html("<center><iframe src='tarjeta-afiliacion/militar.php?id=" + $('#txtcedula').val() + "' width='500' height='400'></iframe></center> ");
          $("#_objectFamiliar").html("<center><iframe src='tarjeta-afiliacion/afiliado.php?id=" + $('#txtcedula').val() + "' width='500' height='400'></iframe></center> ");

          $("#txtnombre").val(DB.nombreprimero + ' ' + DB.nombresegundo);
          $("#txtapellido").val(DB.apellidoprimero + ' ' + DB.apellidosegundo);
          $("#txtnacimiento").val(ConvertirFechaHumana(DB.fechanacimiento));
          $("#cmbsexo").val(DB.sexo);
          $("#cmbedocivil").val(DB.estadocivil);
          $("#cmbcomponente").val(militar.Componente.abreviatura);
          $("#cmbgrado").html('<option value="' + militar.Grado.abreviatura + '">' + militar.Grado.descripcion + '</option>');
          $("#_fingreso").html(ConvertirFechaHumana(militar.fingreso));
          $("#_fascenso").html(ConvertirFechaHumana(militar.fascenso));
          $("#cmbcategoria").val(militar.categoria);
          $("#cmbsituacion").val(militar.situacion);
          $("#cmbclase").val(militar.clase)
          $("#_categoria").html($("#cmbcategoria option:selected").text());
          $("#_situacion").html($("#cmbsituacion option:selected").text());
          $("#_clasificacion").html($("#cmbclase option:selected").text());
          $("#_tiemposervicio").html(militar.tiemposervicio);
          var DF = militar.Persona.DatoFinanciero;
          $("#txtnrocuenta").val(DF.cuenta);
          $("#cmbinstfinanciera").val(DF.institucion);
          $("#cmbtipofinanciera").val(DF.tipocuenta);
          let i = 1;
          $.each(militar.Familiar, function (c, v){
            let familiar = new Familiar();
            let DBF = v.Persona.DatoBasico;
            let cedula  = DBF.cedula;
            let nombre = DBF.apellidoprimero + ' ' + DBF.apellidosegundo + ' ' + DBF.nombreprimero + ' ' + DBF.nombresegundo;
            let parentesco = v.parentesco;
            familiar.Persona.DatoBasico.sexo = v.Persona.DatoBasico.sexo;
            familiar.parentesco = parentesco;

            mil = nombre;
            if (v.esmilitar == true){
              mil = nombre + '<font color="#0E6626"><i class="fa fa-fw fa-male"></i></font>&nbsp;'  ;
            }

            ok = '<font color="#blue"><i class="fa fa-fw fa-close"></i></font>';
            if (v.beneficio == true){
              ok = '<font color="#green"><i class="fa fa-fw fa-check"></i></font>';
            }

            t.row.add ([
              i++,
              cedula,
              mil,
              familiar.GenerarParentesco(),
              ok,
              DBF.fechanacimiento,
              v.esmilitar,
              DBF.sexo
            ]).draw(false);


          });

          t.column(5).visible(false);
          t.column(6).visible(false);
          $('#tblresultados tbody').on('click', 'tr', function () {
              var data = t.row(this).data();
              urlf = "http://192.168.12.161/imagenes/" +  data[1] + ".jpg";
              $("#_imgfamiliar").attr("src", urlf);
              $("#_ffnacimiento").html(ConvertirFechaHumana(data[5]));
              $("#_fcedula").html('C.I: V- ' + data[1]);
              if (data[6] == true){
                $("#_fcedula").html('<a href="#" onClick="Buscar(\'' + data[1] +  '\')">C.I: V- ' + data[1] + '</a>');
              }

          });

          $("#_cedula").val("");
          $("#_ficha").show();
          $("#_consultarbox").hide();
          $("#_search").show();
        }
        $("#_cargando").hide();
      }

  };

  xhttp.onerror = function() {
      if (this.readyState == 4 && this.status == 0) {
        $.notify("No se puede conectar al servidor");
        $("#_cargando").hide();
      }

  };
  xhttp.send();
}

function activarSalvar(){
  $("#_contenido").html("¿Está seguro que desea editar?");
  $('#modMsj').modal('show');
}
function editarDB(){
  FrmDatosBasicos(false);
  $('#modMsj').modal('hide');
  $("#salvar").show();
}

function desactivarSalvar(){
  $('#modMsj').modal('hide');
  $("#salvar").hide();
  FrmDatosBasicos(true);
}

function IrCedula(){

  $("#_cedula").focus();
}

function ConvertirFechaHumana(f){
  fe = f.substr(0,10);
  fa = fe.split("-");
  return fa[2] + "/" + fa[1] + "/" + fa[0];
}

function IncluirFamiliar(){
  $("#modFamiliar").modal('show');
}

function ActivarBuscar(){
  $("#_ficha").hide();
  $("#_consultarbox").show();
  $("#_search").hide();
}

function VisualizarCarnet(){
  $("#modCarnet").modal("show");
}

function VisualizarCarnetFamiliar(){
  $("#modCarnetFamiliar").modal("show");
}

function incluirAfiliado(){
  $("#_cedula").val("");
  $("#_ficha").show();
  $("#_consultarbox").hide();
  $("#_search").show();
  FrmDatosBasicos(false);
}

function FrmDatosBasicos(valor){
  $("#txtcedula").attr('disabled',valor);
  $("#txtnombre").attr('disabled', valor);
  $("#txtapellido").attr('disabled', valor);
  $("#txtnacimiento").attr('disabled', valor);
  $("#cmbsexo").attr('disabled', valor);
  $("#cmbedocivil").attr('disabled', valor);
}

function seleccionarActas(){
  edo = $("#cmbedocivil option:selected").val();
  switch (edo) {
    case "C":
      $("#_titulod").html("Cargar Acta de Matrimonio");
      CargarUrl("_contenidod", "afi/actamatrimonio");
      $('#modDocument').modal('show');
      break;
    case "D":
      $("#_titulod").html("Cargar Acta de Divorcio");
      CargarUrl("_contenidod", "afi/actadivorcio");
      $('#modDocument').modal('show');
      break;
    case "V":
      $("#_titulod").html("Cargar Constancia de Viudez");
      CargarUrl("_contenidod", "afi/constanciaviudez");
      $('#modDocument').modal('show');
      break;
    case "S":
      $("#_titulod").html("Cargar Carta de Solteria");
      CargarUrl("_contenidod", "afi/cartasolteria");
      $('#modDocument').modal('show');
      break;
    default:

  }

}

