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
          //url = "http://192.168.12.161/imagenes/" +  $("#txtcedula").val() + ".jpg";
          url = "http://192.168.6.45/temp/" +  $("#txtcedula").val() + "/foto.jpg";
          $("#_img").attr("src", url);
          url = "http://192.168.6.45/temp/" +  $("#txtcedula").val() + "/huella.bmp";
          $("#_imghuella").attr("src", url);
          url = "http://192.168.6.45/temp/" +  $("#txtcedula").val() + "/firma.jpg";
          $("#_imgfirma").attr("src", url);
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
            let nombres = DBF.nombreprimero + ' ' + DBF.nombresegundo;
            let apellidos = DBF.apellidoprimero + ' ' + DBF.apellidosegundo;
            estadocivil= DBF.estadocivil;
            

            mil = nombre;
            if (v.esmilitar == true){
              mil = nombre + '<font color="#0E6626"><i class="fa fa-fw fa-male"></i></font>&nbsp;'  ;
            }

            //ok = '<font color="#blue"><i class="fa fa-fw fa-close"></i></font>';

            if (v.beneficio == true){
              situacion = "ACTIVO";
            }
                else {
                   situacion = "INACTIVO"
                }
               mod = '<font color="#red"><i class="fa fa-fw fa-pencil"></i></font>';
            t.row.add ([
              i++, //0
              cedula, //1
              mil, //2
              familiar.GenerarParentesco(), //3
              situacion, //4
              DBF.fechanacimiento, //5
              v.esmilitar, //6
              mod, //7
              nombres, //8
              DBF.sexo, //9
              apellidos, //10
              v.condicion, //11
              v.estudia //12
             

            ]).draw(false);


          });

          t.column(5).visible(false);
          t.column(6).visible(false);
          t.column(8).visible(false);
          t.column(9).visible(false);
          t.column(10).visible(false);
          t.column(11).visible(false);
          t.column(12).visible(false);
         
          


          $('#tblresultados tbody').on('click', 'tr', function () {
              var data = t.row(this).data();
              urlf = "http://192.168.12.161/imagenes/" +  data[1] + ".jpg";
              $("#_imgfamiliar").attr("src", urlf);
              $("#_ffnacimiento").html(ConvertirFechaHumana(data[5]));
              $("#_fcedula").html('C.I: V- ' + data[1]);
              if (data[6] == true){
              $("#_fcedula").html('<a href="#" onClick="Buscar(\'' + data[1] +  '\')">C.I: V- ' + data[1] + '</a>');
              $("#_ffnacimiento").html(ConvertirFechaHumana(data[5]));
              }

          });

           $('#tblresultados tbody').on('dblclick', 'tr', function () {
              var data = t.row(this).data();
              urlf = "http://192.168.12.161/imagenes/" +  data[1] + ".jpg";
              $("#modFamiliar").modal('show');
              $('#txtcedulaf').val(data[1]);
              $('#txtnacimientof').val(ConvertirFechaHumana(data[5]));
              $('#txtnombref').val(data[8]);
              $('#cmbsexof').val(data[9]);
              $('#txtapellidof').val(data[10]);
            
             
              if (data[11]==0){
                $("#cmbcondicionf").html('<option selected="selected" value=0>NO</option>\
                              <option value=1>SI</option> ');
              }
              $('#cmbcondicionf').val(data[11]);

              if (data[12]==0){
                $("#cmbestudiaf").html('<option selected="selected" value=0>NO</option>\
                              <option value=1>SI</option> ');
              }
              $('#cmbestudiaf').val(data[12]);
             
            
             

          });

          var th= $('#tblhistoricomilitar').DataTable({
            'paging'      : false,
            'lengthChange': false,
            'searching'   : false,
            'ordering'    : false,
            'info'        : false,
            //'autoWidth'   : false
             'autoWidth'   : false
          });

          th.clear();
          i = 0;
          $.each(militar.HistorialMilitar,function(c,v){
             th.row.add ([
              i++,
              v.categoria,
              v.clase,
              v.situacion,
              v.grado,
              v.fresuelto
            ]).draw(false);


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
  BlanquearFamiliar();
}

function BlanquearFamiliar(){
  $("#txtcedulaf").val("");
  $("#txtnombref").val("");
  $("#txtapellidof").val("");
  $("#txtnacimientof").val("");
  $("#cmbsexof").val("");
  $("#cmbedocivilf").val("");
  $("#cmbparentescof").val("");
  $("#cmbcondicionf").val("");
  $("#cmbestudiaf").val("");
  $("#cmbestadof").val("");
  $("#cmbmunicipiof").val("");
  $("#cmbparroquiaf").val("");
  $("#txtciudadf").val("");
  $("#txtcallef").val("");;
  $("#txtcasaf").val("");
  $("#txtaptof").val("");
  $("#txttelefonof").val("");
  $("#txtcelularf").val("");
  $("#txtcorreof").val("");
  $("#txtpregistrocivilf").val("");
  $("#txtpanof").val("");
  $("#txtpactaf").val("");
  $("#txtpfoliof").val("");
  $("#txtplibrof").val("");
  $("#txtestaturaf").val("");
  $("#txtpesof").val("");
  $("#txttallaf").val("");
  $("#txtgruposanguineof").val("");
  $("#cmbpielf").val("");
  $("#cmbojosf").val("");
  $("#cmbcolorcabellof").val("");
  $("#txtsenaparticularf").val("");
  $("#txttwitterf").val("");
  $("#txtfacebookf").val("");
  $("#txtinstagranf").val("");
  $("#txtlinkedinf").val("");

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
  FrmDatosMilitar(false);
  FrmCuentaBancaria(false);
  FrmDireccion(false);
  FrmPartidaNacimiento(false);
  FrmFisicoFisionomico(false);
  FrmRedSocial(false);
  FrmTim(false);
  ModDocumentoCivil(false);
}

function FrmDatosBasicos(valor){
  $("#txtcedula").attr('disabled',valor);
  $("#txtnombre").attr('disabled', valor);
  $("#txtapellido").attr('disabled', valor);
  $("#txtnacimiento").attr('disabled', valor);
  $("#cmbsexo").attr('disabled', valor);
  $("#cmbedocivil").attr('disabled', valor);
}

function FrmDatosMilitar(valor){
  $("#txtfechagraduacion").attr('disabled',valor);
  $("#cmbcomponente").attr('disabled',valor);
  $("#cmbgrado").attr('disabled',valor);
  $("#cmbsituacion").attr('disabled',valor);
  $("#cmbclase").attr('disabled',valor);
  $("#cmbcategoria").attr('disabled',valor);
}

function FrmCuentaBancaria(valor){
  $("#cmbinstfinanciera").attr('disabled',valor);
  $("#cmbtipofinanciera").attr('disabled',valor);
  $("#txtnrocuenta").attr('disabled',valor);
}

function FrmDireccion(valor){
  $("#cmbmestado").attr('disabled',valor);
  $("#cmbmmunicipio").attr('disabled',valor);
  $("#cmbmparroquia").attr('disabled',valor);
  $("#txtmciudad").attr('disabled',valor);
  $("#txtmcalle").attr('disabled',valor);
  $("#txtmcasa").attr('disabled',valor);
  $("#txtmapto").attr('disabled',valor);
  $("#txtmtelefono").attr('disabled',valor);
  $("#txtmcelular").attr('disabled',valor);
  $("#txtmcorreo").attr('disabled',valor);
}

function FrmPartidaNacimiento(valor){
  $("#txtpregistrocivil").attr('disabled',valor);
  $("#txtpano").attr('disabled',valor);
  $("#txtpacta").attr('disabled',valor);
  $("#txtpfolio").attr('disabled',valor);
  $("#txtplibro").attr('disabled',valor);
}

function FrmFisicoFisionomico(valor){
  $("#txtmestatura").attr('disabled',valor);
  $("#txtmpeso").attr('disabled',valor);
  $("#txtmtalla").attr('disabled',valor);
  $("#txtmgruposanguineo").attr('disabled',valor);
  $("#cmbmpiel").attr('disabled',valor);
  $("#cmbmojos").attr('disabled',valor);
  $("#cmbmcolorcabello").attr('disabled',valor);
  $("#txtmsenaparticular").attr('disabled',valor);
}

function FrmRedSocial(valor){
  $("#txtmtwitter").attr('disabled',valor); 
  $("#txtmfacebook").attr('disabled',valor); 
  $("#txtminstagran").attr('disabled',valor); 
  $("#txtmlinkedin").attr('disabled',valor); 
}

function FrmTim(valor){
  $("#_imghuella").attr('disabled',valor); 
  $("#_imgfirma").attr('disabled',valor); 
}

function ModDocumentoCivil(valor){
  doc = $("#cmbedocivil option:selected").val();
  switch (doc) {
    case "C":
      $("#txtRegistroCivilM").attr('disabled',valor);
      $("#txtAnoM").attr('disabled',valor);
      $("#txtNumeroActaM").attr('disabled',valor);
      $("#txtNumeroFolioM").attr('disabled',valor);
      $("#txtLibroM").attr('disabled',valor);
      break;
    case "D":
      $("#txttribunalD").attr('disabled',valor);
      $("#txtnumerosentenciaD").attr('disabled',valor);
      $("#txtfechasentenciaD").attr('disabled',valor);
      break;
    case "V":
      $("#txtRegistroCivilV").attr('disabled',valor);
      $("#txtFechaV").attr('disabled',valor);
      break;
    case "S":
      $("#txtRegistroCivilS").attr('disabled',valor);
      $("#txtFechaS").attr('disabled',valor);
      break;
    default:
  }

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

function cambiarGrado(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", Conn.URL + "/ipsfa/api/componente/" + $("#cmbcomponente option:selected").val());
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        componente = JSON.parse(xhttp.responseText);
        console.log(componente);
        $("#cmbgrado").html('<option selected="selected" value="S">--- SELECCIONE ---</option>');
        $.each(componente.Grado,function(c,v){
          $("#cmbgrado").append('<option selected="selected" value="'+v.codigo+'">'+v.descripcion+'</option>')
        });
        $("#cmbgrado").val('S');
      }
  }
  xhttp.onerror = function() {
      if (this.readyState == 4 && this.status == 0) {
        $.notify("No se puede conectar al servidor");
        $("#_cargando").hide();
      }

  };
  xhttp.send();
}
