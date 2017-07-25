let ObjMilitar = new Militar();

function Buscar( id ){
  if (id != undefined) {
    $("#_cedula").val(id);
  }
  if($("#_cedula").val() == ""){
    $("#_contenido").html("Debe introducir una cédula");
    $("#_botonesmsj").html('<button type="button" class="btn btn-default" data-dismiss="modal" id="_aceptar" onClick="IrCedula()">Aceptar</button>');
    $("#modMsj").modal("show");
    return false;
  }
  $("#_cargando").show();
  $("#_imgfamiliar").attr("src", "images/ndisponible.jpg");
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", Conn.URL + "militar/crud/" + $("#_cedula").val());
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        militar = JSON.parse(xhttp.responseText);
        ObjMilitar = militar;

        if(militar.tipo != undefined){
          $("#_cedula").val("");
          if (id != undefined) { return false}
          $("#_contenido").html("La cédula no existe en el sistema. ¿Desea Realizar un nuevo ingreso?");
          var botones = '<button type="button" class="btn btn-success" data-dismiss="modal" id="_aceptar" onClick="incluirAfiliado()">Si</button>\
            <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>';
          $("#_botonesmsj").html(botones);
          $("#modMsj").modal("show");
          $("#_aceptar").focus();

        }else{
          ActivarFormulario(true);
          $("#_btnModificar").show();
          $("#_btnConstancia").show();
          $("#_btnTIM").show();
          $("#_btnActualizar").hide();
          $("#_btnSavlvar").hide();

          $("#_tblConstFamiliares").html(ConstanciaFamiliaresHTML());
          var fam = $('#tblConstFamiliares').DataTable({
            'paging'      : false,
            'lengthChange': false,
            'searching'   : false,
            'ordering'    : false,
            'info'        : false,
            'autoWidth'   : false
          });



          $("#_bxFamiliar").show();
          $("#_tblFamiliares").html(FamiliaresHTML());
          var t = $('#tblFamiliares').DataTable({
            'paging'      : false,
            'lengthChange': false,
            'searching'   : false,
            'ordering'    : false,
            'info'        : false,
            'autoWidth'   : false
          });
          t.clear().draw();
          var DB = militar.Persona.DatoBasico;
          $("#_divfechadefuncion").show();
          $("#txtcedula").val(DB.cedula);
          url = "images/grados/" + militar.Grado.abreviatura + ".png";
          url = url.toLowerCase();
          $("#_imggrado").attr("src", url);
          url = "http://192.168.12.161/imagenes/" +  $("#txtcedula").val() + ".jpg";
          //url = "http://192.168.6.45/temp/" +  $("#txtcedula").val() + "/foto.jpg";
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
          SeleccionarPorSexo(DB.sexo);
          $("#cmbedocivil").val(DB.estadocivil);
          $("#cmbcomponente").val(militar.Componente.abreviatura);
          $("#cmbgrado").html('<option value="' + militar.Grado.abreviatura + '">' + militar.Grado.descripcion + '</option>');
          $("#txtnresuelto").val(militar.nresuelto);
          $("#txtmfecharesuelto").val(ConvertirFechaHumana(militar.fresuelto));
          $("#txtposicion").val(militar.posicion);
          $("#txtfechagraduacion").val(ConvertirFechaHumana(militar.fingreso));
          $("#_fingreso").html(ConvertirFechaHumana(militar.fingreso));
          $("#_fascenso").html(ConvertirFechaHumana(militar.fascenso));
          $("#cmbcategoria").val(militar.categoria);
          $("#cmbsituacion").val(militar.situacion);
          $("#cmbclase").val(militar.clase)
          $("#_categoria").html($("#cmbcategoria option:selected").text());
          $("#_situacion").html($("#cmbsituacion option:selected").text());
          $("#_clasificacion").html($("#cmbclase option:selected").text());
          $("#_tiemposervicio").html(militar.tiemposervicio);

          $("#_tblBancos").html(BancariosHTML());
          var thbanco = $('#tblBanco').DataTable({
            'paging'      : false,
            'lengthChange': false,
            'searching'   : false,
            'ordering'    : false,
            'info'        : false,
            //'autoWidth'   : false
             'autoWidth'   : false
          });
          if (militar.Persona.DatoFinanciero != undefined){

            var DF = militar.Persona.DatoFinanciero[0];
            $("#txtmnrocuenta").val(DF.cuenta);
            $("#cmbminstfinanciera").val(DF.institucion);
            $("#cmbmtipofinanciera").val(DF.tipo);
            thbanco.clear().draw();
            i = 0;
            $.each(militar.Persona.DatoFinanciero,function(c,v){
               thbanco.row.add ([
                i++,
                v.institucion,
                v.tipo,
                v.cuenta
              ]).draw(false);


            });
          }
          if (militar.Persona.Direccion != undefined){

            var DIR = militar.Persona.Direccion[0];
            Estados.ObtenerEstados();
            $("#cmbmestado").val(DIR.estado);
            $("#cmbmmunicipio").html('<option selected="selected" value="' + DIR.municipio + '">' + DIR.municipio + '</option>');
            $("#cmbmparroquia").html('<option selected="selected" value="' + DIR.parroquia + '">' + DIR.parroquia + '</option>');
            $("#cmbmciudad").html('<option selected="selected" value="' + DIR.ciudad + '">' + DIR.ciudad + '</option>');
            $("#txtmcalle").val(DIR.calleavenida);
            $("#txtmcasa").val(DIR.casa);
            $("#txtmapto").val(DIR.apartamento);

          }
          if (militar.Persona.Correo != undefined){
            $("#txtmtelefono").val(militar.Persona.Telefono.domiciliario);
            $("#txtmcelular").val(militar.Persona.Telefono.movil);
            $("#txtmcorreo").val(militar.Persona.Correo.principal);
          }

          if(militar.Persona.PartidaNacimiento != undefined){
            $("#txtpregistrocivil").val(militar.Persona.PartidaNacimiento.registro);
        		$("#txtpano").val(militar.Persona.PartidaNacimiento.ano);
        		$("#txtpacta").val(militar.Persona.PartidaNacimiento.acta);
        		$("#txtpfolio").val(militar.Persona.PartidaNacimiento.folio);
        		$("#txtplibro").val(militar.Persona.PartidaNacimiento.libro);
          }

          if(militar.Persona.DatoFisionomico != undefined){

            var df = militar.Persona.DatoFisico;
            var dfi = militar.Persona.DatoFisionomico;
            $("#txtmpeso").val(df.peso);
        		$("#txtmtalla").val(df.talla);
        		$("#cmbmpiel").val(dfi.colorpiel);
        		$("#cmbmojos").val(dfi.colorojos);
        		$("#cmbmcolorcabello").val(dfi.colorcabello);
        		$("#txtmestatura").val(dfi.estatura);
        		$("#txtmsenaparticular").val(dfi.senaParticular);
        		$("#cmbmgruposanguineo").val(dfi.gruposanguineo);
          }

          let j = 1, x = 1;
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
            let nombreCompleto = apellidos + ' ' + nombres;
            let estadocivil= familiar.Persona.DatoBasico.estadocivil;

            var modificar = '<button type="button" id="btnModFamiliar' + j + '" \
            class="btn btn-xs btn-info" onclick="ModificarFamiliarPos(' + j + ')">\
              <i class="fa fa-pencil"></i></button>'
            mil = nombre;
            if (v.esmilitar == true){
              mil = nombre + '<font color="#0E6626"><i class="fa fa-fw fa-male"></i></font>&nbsp;'  ;
            }

            //ok = '<font color="#blue"><i class="fa fa-fw fa-close"></i></font>';
            fechavencimiento = "";
            // if (v.fechavencimiento != undefined){
            //   fechavencimiento = v.fechavencimiento;
            // }
            if (v.beneficio == true){
              situacion = "ACTIVO";
            }else {
               situacion = "INACTIVO"
            }
            mod = '<font color="#red"><i class="fa fa-fw fa-pencil"></i></font>';
            edocivil = "";
            if (DBF.estadocivil != undefined ){
              edocivil = DBF.estadocivil;
            }
            fam.row.add([
              nombreCompleto, //1
              cedula, //2
              familiar.GenerarParentesco(), //3
              DBF.fechanacimiento, //4
              edocivil,//5
              situacion, //6
              fechavencimiento //7
            ]).draw(false);

            t.row.add ([
              j++, //0
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
              v.estudia, //12
              fechavencimiento, //13
              modificar
            ]).draw(false);

          });

          t.column(5).visible(false);
          t.column(6).visible(false);
          t.column(7).visible(false);
          t.column(8).visible(false);
          t.column(9).visible(false);
          t.column(10).visible(false);
          t.column(11).visible(false);
          t.column(12).visible(false);
          t.column(13).visible(false);




          $('#tblFamiliares tbody').on('click', 'tr', function () {
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

          $('#tblFamiliares tbody').on('dblclick', 'tr', function () {
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

          $("#_tblHistorialMilitar").html(HistoricoMilitarHTML());
          var th= $('#tblhistoricomilitar').DataTable({
            'paging'      : false,
            'lengthChange': false,
            'searching'   : false,
            'ordering'    : false,
            'info'        : false,
            //'autoWidth'   : false
             'autoWidth'   : false
          });

          th.clear().draw();
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
function BuscarInsert(){
  Buscar($("#txtcedula").val());
}
function activarSalvar(){
  $("#_contenido").html("¿Está seguro que desea editar?");
  var botones = '<button type="button" class="btn btn-success" data-dismiss="modal" id="_aceptar" onClick="activarActualizar()">Si</button>\
    <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>';
  $("#_botonesmsj").html(botones);
  $('#modMsj').modal('show');
}
function activarActualizar(){
  $("#_btnModificar").hide();
  $("#_btnConstancia").hide();
  $("#_btnTIM").hide();
  var estado = $("#cmbmestado").val();
  ActivarFormulario(false);
  Estados.ObtenerEstados();
  ActivarCalendarios();
  $("#cmbmestado").val(estado);
  $("#txtcedula").attr("disabled", true);
  $("#_btnActualizar").show();
}
function Salvar(){
  Frm = "S";
}
function Actualizar(){
  if(Util.ValidarFormulario("_frmDatoBasico") == false){
    Util.ModalValidar("Favor completar todos los campos");
  }else{
    var militar = new Militar();
    militar.Actualizar();
    $("#_btnModificar").show();
    $("#_btnActualizar").hide();
    ActivarFormulario(true);
  }
}
function editarDB(){
  FrmDatosBasicos(false);
  $('#modMsj').modal('hide');
  $("#salvar").show();
}

function retornarFecha(){

}

function desactivarSalvar(){
  $('#modMsj').modal('hide');
  $("#salvar").hide();
  FrmDatosBasicos(true);
}

function SeleccionarPorSexo(sexo){
  if(sexo == undefined){
    gen = ($("#cmbsexo").val() == 'F')?"A":"O";
  }else{
    gen = (sexo == 'F')?"A":"O";
  }
  $("#cmbedocivil").html('<option value=""></option><option value="S">SOLTER' + gen + '</option>\
  <option value="C">CASAD' + gen + '</option> \
  <option value="D">DIVORCIAD' + gen + '</option>\
  <option value="V">VIUD' + gen + '</option>');
}

function SeleccionarPorSexoFamiliar(sexo){
  if(sexo == undefined){
    gen = ($("#cmbsexof").val() == 'F')?"A":"O";
  }else{
    gen = (sexo == 'F')?"A":"O";
  }
  $("#cmbedocivilf").html('<option value=""></option><option value="S">SOLTER' + gen + '</option>\
  <option value="C">CASAD' + gen + '</option> \
  <option value="D">DIVORCIAD' + gen + '</option>\
  <option value="V">VIUD' + gen + '</option>');

  if(gen == "A"){
    $("#cmbparentescof").html('<option value="HJ">HIJ' + gen + '</option>\
    <option value="PD">MADRE</option>\
    <option value="EA">ESPOSA</option>\
    <option value="HN">HERMANA</option>\
    ');
  }else {
    $("#cmbparentescof").html('<option value="HJ">HIJ' + gen + '</option>\
    <option value="PD">PADRE</option>\
    <option value="EA">ESPOSO</option>');
  }

}

function BancariosHTML(){
  var html = '<table class="ui celled table" cellspacing="0" width="100%" id="tblBanco" >\
    <thead>\
      <tr>\
        <th>Nro.</th>\
        <th>Institución Financiera</th>\
        <th>Tipo de Cuenta</th>\
        <th>Nro. de Cuenta</th>\
      </tr>\
    </thead>\
    <tbody>\
    </tbody>\
  </table>';
  return html;
}

function FamiliaresHTML(){
  var html = '<table class="ui celled table " cellspacing="0" width="100%" id="tblFamiliares" >\
    <thead class="familiares">\
      <tr>\
        <th>NRO.</th>\
        <th>CÉDULA</th>\
        <th>APELLIDOS Y NOMBRES</th>\
        <th>RELACIÓN</th>\
        <th>SITUACIÓN</th>\
        <th>FECHA</th>\
        <th>TIPO</th>\
        <th>MODIFICAR</th>\
        <th>NOMBRES</th>\
        <th>SEXO</th>\
        <th>APELLIDOS</th>\
        <th>CONDICION ESPECIAL</th>\
        <th>ESTUDIA</th>\
        <th>FECHA VCTO. CARNET</th>\
        <th>ACTUALIZAR</th>\
      </tr>\
    </thead >\
    <tbody>\
    </tbody>\
  </table>';
  return html;

}

function ConstanciaFamiliaresHTML(){
  var html = '<table class="ui celled table" cellspacing="0" width="100%" id="tblConstFamiliares" >\
    <thead>\
      <tr>\
        <th>APELLIDOS Y NOMBRES</th>\
        <th>CÉDULA</th>\
        <th>PARENTESCO</th>\
        <th>FECHA NAC.</th>\
        <th>EDO CIVIL</th>\
        <th>SITUACIÓN</th>\
        <th>FECHA VCTO. CARNET</th>\
      </tr>\
    </thead >\
    <tbody>\
    </tbody>\
  </table>';
  return html;

}

function HistoricoMilitarHTML(){
  var html = '<table id="tblhistoricomilitar" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">\
    <thead>\
      <tr>\
        <th>#</th>\
        <th>CATEGORIA</th>\
        <th>CLASIFICACIÓN</th>\
        <th>SITUACIÓN</th>\
        <th>GRADO</th>\
        <th>FECHA RESUELTO</th>\
      </tr>\
    </thead>\
    <tbody>\
    </tbody>\
  </table>';
  return html;
}

function IrCedula(){

  $("#_cedula").focus();
}

function ConvertirFechaHumana(f){
  fe = f.substr(0,10);
  fa = fe.split("-");
  if(fa[0] != "0001"){
    return fa[2] + "/" + fa[1] + "/" + fa[0];
  }else {
    return "";
  }

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
  if(Util.ValidarFormulario("_frmDatoBasico") == false){
    Util.ModalValidar("Favor actualizar afiliado");
  }else{

    $("#modCarnetValidar").modal("show");
    //$("#modCarnet").modal("show");
  }

}
function ContinuarTIM(){
    $("#modCarnet").modal("show");
}

function VisualizarCarnetFamiliar(){
  $("#modCarnetFamiliar").modal("show");
}


function ActivarCalendarios(){
  $('#txtnacimiento').datepicker({
    autoclose: true,
    format:"dd/mm/yyyy",
    language: 'es'
  });
  $('#txtfechagraduacion').datepicker({
    autoclose: true,
    format:"dd/mm/yyyy",
    language: 'es'
  });
  $('#txtdefuncion').datepicker({
    autoclose: true,
    format:"dd/mm/yyyy",
    language: 'es'
  });
  $('#txtmfecharesuelto').datepicker({
    autoclose: true,
    format:"dd/mm/yyyy",
    language: 'es'
  });
  $('#txtmfechaC').datepicker({
    autoclose: true,
    format:"dd/mm/yyyy",
    language: 'es'
  });

}
function incluirAfiliado(){

  ActivarCalendarios();

  $('#txtcedula').keyup(function (){
    this.value = (this.value + '').replace(/[^0-9]/g, '');
  });

  $("#_divfechadefuncion").hide();
  $("#_cedula").val("");
  $("#_ficha").show();
  $("#_consultarbox").hide();
  $("#_search").show();
  $("#_bxFamiliar").hide();
  $("#_bxFamiliarTarjeta").hide();
  $("#_btnConstancia").hide();
  $("#_btnTIM").hide();
  $("#_btnModificar").hide();
  $("#_btnSavlvar").show();
  Util.ValidarFormulario("_frmDatoBasico");
  ActivarFormulario(false);
  LimpiarFrmDatosBasicos();
  LimpiarFrmDatosMilitar();
  LimpiarFrmCuentaBancaria();
  LimpiarFrmDireccion();
  LimpiarFrmPartidaNacimiento();
  LimpiarFrmFisicoFisionomico();
  LimpiarFrmRedSocial();
  LimpiarFrmTim();
  LimpiarFrmTarjeta();

  Estados.ObtenerEstados();
  //LimpiarModDocumentoCivil();

}
function ActivarFormulario(valor){
  FrmDatosBasicos(valor);
  FrmDatosMilitar(valor);
  FrmCuentaBancaria(valor);
  FrmDireccion(valor);
  FrmPartidaNacimiento(valor);
  FrmFisicoFisionomico(valor);
  FrmRedSocial(valor);
  FrmTim(valor);
  ModDocumentoCivil(valor);
}

function FrmDatosBasicos(valor){
  $("#txtcedula").attr('disabled',valor);
  $("#txtnombre").attr('disabled', valor);
  $("#txtapellido").attr('disabled', valor);
  $("#txtnacimiento").attr('disabled', valor);
  $("#cmbsexo").attr('disabled', valor);
  $("#cmbedocivil").attr('disabled', valor);
  $("#txtdefuncion").attr('disabled', valor);
  //$("#btnnacimiento").attr('disabled', valor);
  if(valor == false){
    $("#cargarcopiacedula").show();
    $("#cargarpartida").show();
    $("#cargarfoto").show();
    $("#cargarfirma").show();
    $("#cargarhuella").show();

  }else{
    $("#cargarcopiacedula").hide();
    $("#cargarpartida").hide();
    $("#cargarfoto").hide();
    $("#cargarfirma").hide();
    $("#cargarhuella").hide();
  }

  $("#btndefuncion").attr('disabled', valor);
}
function LimpiarFrmDatosBasicos(){
  $("#txtcedula").val("");
  $("#txtnombre").val("");
  $("#txtapellido").val("");
  $("#txtnacimiento").val("");
  $("#cmbsexo").val("");
  $("#cmbedocivil").val("");
  $("#txtdefuncion").val("");
  $("#btnnacimiento").val("");
  $("#btndefuncion").val("");
}

function FrmDatosMilitar(valor){
  $("#txtfechagraduacion").attr('disabled',valor);
  $("#cmbcomponente").attr('disabled',valor);
  $("#cmbgrado").attr('disabled',valor);
  $("#cmbsituacion").attr('disabled',valor);
  $("#cmbclase").attr('disabled',valor);
  $("#cmbcategoria").attr('disabled',valor);

  $("#txtnresuelto").attr('disabled',valor);
  $("#txtmfecharesuelto").attr('disabled',valor);
  $("#txtposicion").attr('disabled',valor);
  $("#txtcodigocomponente").attr('disabled',valor);
  $("#txtnumhistoriaclinica").attr('disabled',valor);


}

function LimpiarFrmDatosMilitar(valor){
  $("#txtfechagraduacion").val("");
  $("#cmbcomponente").val("");
  $("#cmbgrado").val("");
  $("#cmbsituacion").val("");
  $("#cmbclase").val("");
  $("#cmbcategoria").val("");
  $("#txtnresuelto").val("");
  $("#txtmfecharesuelto").val("");
  $("#txtposicion").val("");
  $("#txtcodigocomponente").val("");
  $("#txtnumhistoriaclinica").val("");
}

function NacionalidadFamiliar(nac){
  $("#btnnacionalidad").html(nac);
}

function FrmCuentaBancaria(valor){
  $("#cmbminstfinanciera").attr('disabled',valor);
  $("#cmbmtipofinanciera").attr('disabled',valor);
  $("#txtmnrocuenta").attr('disabled',valor);
  if(valor == false){
    $("#_cmbminstfinanciera").show();
    $("#_cmbmtipofinanciera").show();
    $("#_txtmnrocuenta").show();
  }else{
    $("#_cmbminstfinanciera").hide();
    $("#_cmbmtipofinanciera").hide();
    $("#_txtmnrocuenta").hide();
  }
}

function LimpiarFrmCuentaBancaria(valor){
  $("#cmbinstfinanciera").val("");
  $("#cmbtipofinanciera").val("");
  $("#txtnrocuenta").val("");
}

function FrmDireccion(valor){
  $("#cmbmestado").attr('disabled',valor);
  $("#cmbmmunicipio").attr('disabled',valor);
  $("#cmbmparroquia").attr('disabled',valor);
  $("#cmbmciudad").attr('disabled',valor);
  $("#txtmcalle").attr('disabled',valor);
  $("#txtmcasa").attr('disabled',valor);
  $("#txtmapto").attr('disabled',valor);
  $("#txtmtelefono").attr('disabled',valor);
  $("#txtmcelular").attr('disabled',valor);
  $("#txtmcorreo").attr('disabled',valor);
}

function LimpiarFrmDireccion(valor){
  $("#cmbmestado").html('<option selected="selected" value="S"></option>');
  $("#cmbmmunicipio").html('<option selected="selected" value="S"></option>');
  $("#cmbmparroquia").html('<option selected="selected" value="S"></option>');
  $("#cmbmciudad").html('<option selected="selected" value="S"></option>');
  $("#txtmcalle").val("");
  $("#txtmcasa").val("");
  $("#txtmapto").val("");
  $("#txtmtelefono").val("");
  $("#txtmcelular").val("");
  $("#txtmcorreo").val("");
}

function FrmPartidaNacimiento(valor){
  $("#txtpregistrocivil").attr('disabled',valor);
  $("#txtpano").attr('disabled',valor);
  $("#txtpacta").attr('disabled',valor);
  $("#txtpfolio").attr('disabled',valor);
  $("#txtplibro").attr('disabled',valor);
  //
  $("#txtRegistroCivilN").attr('disabled',valor);
  $("#txtAnoN").attr('disabled',valor);
  $("#txtNumeroActaN").attr('disabled',valor);
  $("#txtNumeroFolioN").attr('disabled',valor);
  $("#txtLibroN").attr('disabled',valor);
}

function LimpiarFrmPartidaNacimiento(valor){
  $("#txtpregistrocivil").val("");
  $("#txtpano").val("");
  $("#txtpacta").val("");
  $("#txtpfolio").val("");
  $("#txtplibro").val("");
  //
  $("#txtpregistrocivilN").val("");
  $("#txtpanoN").val("");
  $("#txtpactaN").val("");
  $("#txtpfolioN").val("");
  $("#txtplibroN").val("");
}

function FrmFisicoFisionomico(valor){
  $("#txtmestatura").attr('disabled',valor);
  $("#txtmpeso").attr('disabled',valor);
  $("#txtmtalla").attr('disabled',valor);
  $("#cmbmgruposanguineo").attr('disabled',valor);
  $("#cmbmpiel").attr('disabled',valor);
  $("#cmbmojos").attr('disabled',valor);
  $("#cmbmcolorcabello").attr('disabled',valor);
  $("#txtmsenaparticular").attr('disabled',valor);
}

function LimpiarFrmFisicoFisionomico(valor){
  $("#txtmestatura").val("");
  $("#txtmpeso").val("");
  $("#txtmtalla").val("");
  $("#cmbmgruposanguineo").val("S");
  $("#cmbmpiel").val("S");
  $("#cmbmojos").val("S");
  $("#cmbmcolorcabello").val("S");
  $("#txtmsenaparticular").val("");
}

function FrmRedSocial(valor){
  $("#txtmtwitter").attr('disabled',valor);
  $("#txtmfacebook").attr('disabled',valor);
  $("#txtminstagran").attr('disabled',valor);
  $("#txtmlinkedin").attr('disabled',valor);
}

function LimpiarFrmRedSocial(valor){
  $("#txtmtwitter").val("");
  $("#txtmfacebook").val("");
  $("#txtminstagran").val("");
  $("#txtmlinkedin").val("");
}


function FrmTim(valor){
  $("#_imghuella").attr('disabled',valor);
  $("#_imgfirma").attr('disabled',valor);
}

function LimpiarFrmTim(valor){
  $("#_imghuella").val("");
  $("#_imgfirma").val("");
}

function LimpiarFrmTarjeta(){


  $("#_img").attr("src", "images/ndisponible.jpg");
  $("#_imggrado").attr("src", "images/grados/no.png");
  $("#_fingreso").html("");
  $("#_fascenso").html("");
  $("#_categoria").html("");
  $("#_situacion").html("");
  $("#_clasificacion").html("");
  $("#_tiemposervicio").html("");
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

function FrmDireccionFamiliar(valor){
  $("#txtmtwitter").attr('disabled',valor);
  $("#txtmfacebook").attr('disabled',valor);
  $("#txtminstagran").attr('disabled',valor);
  $("#txtmlinkedin").attr('disabled',valor);
}

function LimpiarFrmDireccionFamiliar(valor){
  $("#txtmtwitter").val("");
  $("#txtmfacebook").val("");
  $("#txtminstagran").val("");
  $("#txtmlinkedin").val("");
}



function seleccionarActas(){
  edo = $("#cmbedocivil option:selected").val();
  switch (edo) {
    case "C":
      // $("#_titulod").html("Cargar Acta de Matrimonio");
      // CargarUrl("_contenidod", "afi/actamatrimonio");
      $('#modDocumentCasado').modal('show');
      break;
    case "D":
      // $("#_titulod").html("Cargar Acta de Divorcio");
      // CargarUrl("_contenidod", "afi/actadivorcio");
      $('#modDocumentDivorcio').modal('show');
      break;
    case "V":
      // $("#_titulod").html("Cargar Constancia de Viudez");
      // CargarUrl("_contenidod", "afi/constanciaviudez");
      $('#modDocumentViudez').modal('show');
      break;
    case "S":
      // $("#_titulod").html("Cargar Carta de Solteria");
      // CargarUrl("_contenidod", "afi/cartasolteria");
      //$('#modDocumentSoltero').modal('show');
      break;
    default:
  }
}

function seleccionarPartida(){
  nac = $("#txtnacimiento").val();
  $('#modDocumentPartida').modal('show');
}

function seleccionarCopiaCedula(){
  $('#modDocumentCedula').modal('show');
}

function seleccionarDefuncion(){
  def = $("#txtdefuncion").val();
  $("#_titulopd").html("Registrar Acta de Defunción");
  CargarUrl("_contenidopd", "afi/actadefuncion");
  $('#modPartidaActa').modal('show');
}



function cambiarGrado(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", Conn.URL + "componente/" + $("#cmbcomponente option:selected").val());
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        componente = JSON.parse(xhttp.responseText);
        $("#cmbgrado").html('<option selected="selected" value="S"></option>');
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

function ValidarCampos(){

}

function GenerarCodigoBarra(){

}

function ValidarGenerarCarnet(){
  cr = $("#cmbMotivoCarnet option:selected").val();
  $('#txtmfechaC').datepicker({
    autoclose: true,
    format:"dd/mm/yyyy",
    language: 'es'
  });
  $("#_reciboC").show();
  $("#txtnresueltoC").val($("#txtnresuelto").val());
  $("#txtmfecharesueltoC").val($("#txtmfecharesuelto").val());
  $("#txtposicionC").val($("#txtposicion").val());
  switch (cr) {
    case "I":
      $("#_cingreso").show();
      $("#_cvencimiento").hide();
      $("#_cdeterioro").hide();
      break;
    case "C":
      $("#_cingreso").show();
      $("#_cvencimiento").hide();
      $("#_cdeterioro").hide();
      break;
    case "D":
      $("#_cingreso").hide();
      $("#_cvencimiento").hide();
      $("#_cdeterioro").show();
      break;
    case "E":
      $("#_cingreso").hide();
      $("#_cvencimiento").hide();
      $("#_cdeterioro").show();
      break;
    case "CA":
        $("#_cingreso").hide();
        $("#_cvencimiento").hide();
        $("#_cdeterioro").show();
        break;
    default:
  }
}

function SeleccionarCuenta(){
  $("#txtmnrocuenta").val($("#cmbminstfinanciera option:selected").val());
}


function ModificarFamiliarPos(pos){
  if(Util.ValidarFormulario("_frmDatoBasico") == false){
    Util.ModalValidar("Favor actualizar afiliado");
  }else{
    var Familiar = ObjMilitar.Familiar[pos-1];
    var DB = Familiar.Persona.DatoBasico;

    $("#modFamiliar").modal('show');
    $('#txtcedulaf').val(DB.cedula);
    SeleccionarPorSexoFamiliar(DB.sexo);
    // $('#txtnacimientof').val(DB.nacionalidad);
    $('#txtnacimientof').val(ConvertirFechaHumana(DB.fechanacimiento));
    $('#txtnombref').val(DB.nombreprimero);
    $('#txtapellidof').val(DB.apellidoprimero);
    $('#cmbsexof').val(DB.sexo);
    $('#cmbcondicionf').val(Familiar.condicion);
    $('#cmbestudiaf').val(Familiar.estudia);
    valor = 0;
    if(Familiar.beneficio == true){
        valor = 1;
    }
    $('#cmbsituacionf').val(valor);
    $("#cmbedocivilf").val("S");
    $("#_condicionf").hide();
    $("#_estudiaf").hide();
    $("#_condicionfdoc").hide();
    $("#_estudiafdoc").hide();

    if(Familiar.parentesco == "EA"){
        $("#cmbedocivilf").val("C");
    }else if(Familiar.parentesco == "HJ"){

      $("#_condicionf").show();
      $("#_estudiaf").show();
      $("#_condicionfdoc").show();
      $("#_estudiafdoc").show();
    }else{

    }


    $("#cmbparentescof").val(Familiar.parentesco);
    urlf = "http://192.168.12.161/imagenes/" +  DB.cedula + ".jpg";
    $("#_imgIngFam").attr("src", urlf);

  }
}

function ModificarFamiliar(){
  if(Util.ValidarFormulario("_frmDatoBasico") == false){
    Util.ModalValidar("Favor actualizar afiliado");
  }else{
    $("#modFamiliar").modal('show');
    BlanquearFamiliar();
  }

}
