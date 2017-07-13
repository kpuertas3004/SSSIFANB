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
  xhttp.open("GET", "http://192.168.6.45:8080/ipsfa/api/militar/crud/" + $("#_cedula").val());
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
          t = $('#tblresultados').DataTable();
          t.clear();
          var DB = militar.Persona.DatoBasico;
          $("#txtcedula").val(DB.cedula);
          url = "http://192.168.12.198/imagenes/imagenes/" +  $("#txtcedula").val() + ".jpg";
          $("#_img").attr("src", url);
          $("#txtnombre").val(DB.nombreprimero + ' ' + DB.nombresegundo);
          $("#txtapellido").val(DB.apellidoprimero + ' ' + DB.apellidosegundo);
          $("#txtnacimiento").val(ConvertirFechaHumana(DB.fechanacimiento));
          $("#cmbsexo").val(DB.sexo);
          $("#cmbedocivil").val(DB.estadocivil);
          $("#cmbcomponente").val(militar.Componente.abreviatura);
          $("#_fingreso").html(ConvertirFechaHumana(militar.fingreso));
          $("#_fascenso").html(ConvertirFechaHumana(militar.fascenso));
          let i = 1;
          $.each(militar.Familiar, function (c, v){
            let DBF = v.Persona.DatoBasico;
            let cedula  = DBF.cedula;
            let nombre = DBF.apellidoprimero + ' ' + DBF.apellidosegundo + ' ' + DBF.nombreprimero + ' ' + DBF.nombresegundo;
            let parentesco = v.parentesco;
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
              parentesco,
              ok,
              DBF.fechanacimiento,
              v.esmilitar
            ]).draw(false);


          });

          t.column(5).visible(false);t.column(6).visible(false);
          $('#tblresultados tbody').on('click', 'tr', function () {
              var data = t.row(this).data();
              urlf = "http://192.168.12.198/imagenes/imagenes/" +  data[1] + ".jpg";
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
