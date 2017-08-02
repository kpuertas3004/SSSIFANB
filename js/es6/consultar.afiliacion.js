let ObjMilitar = new Militar();
let OqMilitar = new Militar();

function Buscar(id) {
    if (id != undefined) {
        $("#_cedula").val(id);
    }
    if ($("#_cedula").val() == "") {
        $("#_contenido").html("Debe introducir una cédula");
        $("#_botonesmsj").html('<button type="button" class="btn btn-default" data-dismiss="modal" id="_aceptar" onClick="IrCedula()">Aceptar</button>');
        $("#modMsj").modal("show");
        return false;
    }
    $("#_cargando").show();
    $("#_lblConstanciaPension").hide();
    $("#_imgfamiliar").attr("src", "images/ndisponible.jpg");
    var xhttp = new XMLHttpRequest();
    var url = Conn.URL + "militar/crud/" + $("#_cedula").val();

    xhttp.open("GET", url);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            militar = JSON.parse(xhttp.responseText);
            ObjMilitar = militar;
            if (militar.tipo != undefined) {
                $("#_cedula").val("");
                if (id != undefined) {
                    return false
                }
                $("#_contenido").html("La cédula no existe en el sistema. ¿Desea Realizar un nuevo ingreso?");
                var botones = '<button type="button" class="btn btn-success" data-dismiss="modal" id="_aceptar" onClick="incluirAfiliado()">Si</button>\
            <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>';
                $("#_botonesmsj").html(botones);
                $("#modMsj").modal("show");
                $("#_aceptar").focus();

            } else {
                OqMilitar.Cargar(militar);
                ActivarFormulario(true);
                $("#_btnModificar").show();
                $("#_btnConstancia").show();
                $("#_btnTIM").show();
                $("#_btnActualizar").hide();
                $("#_btnSavlvar").hide();

                $("#_tblConstFamiliares").html(ConstanciaFamiliaresHTML());


                $("#_bxFamiliar").show();
                $("#_tblFamiliares").html(FamiliaresHTML());
                var t = $('#tblFamiliares').DataTable({
                    'paging': false,
                    'lengthChange': false,
                    'searching': false,
                    'ordering': false,
                    'info': false,
                    'autoWidth': false
                });
                t.clear().draw();
                var DB = militar.Persona.DatoBasico;
                $("#_divfechanacimiento").show();
                $("#_divfechadefuncion").show();
                $("#txtcedula").val(DB.cedula);
                url = "images/grados/" + militar.Grado.abreviatura + ".png";
                url = url.toLowerCase();
                $("#_imggrado").attr("src", url);
                url = "http://192.168.12.161/imagenes/" + $("#txtcedula").val() + ".jpg";
                //url = "http://192.168.6.45/temp/" +  $("#txtcedula").val() + "/foto.jpg";
                $("#minifoto").attr("href", url);
                $("#_img").attr("src", url);
                url = "temp/" + $("#txtcedula").val() + "/huella.jpg";
                $("#minihuella").attr("href", url);
                $("#_imghuellam").attr("src", url);
                url = "temp/" + $("#txtcedula").val() + "/firma.png";
                $("#minifirma").attr("href", url);
                $("#_imgfirmam").attr("src", url);
                $("#_imgcarnetmilitar").attr("src", url);

                url = "temp/" + $("#txtcedula").val() + "/cedula.jpg";
                $("#miniced").attr("href", url);
                $("#_imgcopiacedula").attr("src", url);
                url = "temp/" + $("#txtcedula").val() + "/partidanac.jpg";
                $("#mininac").attr("href", url);
                $("#_imgpartida").attr("src", url);
                //$("#_objectPDF").html("<center><iframe src='tarjeta-afiliacion/militar.php?id=" + $('#txtcedula').val() + "' width='500' height='400'></iframe></center> ");
                //$("#_objectFamiliar").html("<center><iframe src='tarjeta-afiliacion/afiliado.php?id=" + $('#txtcedula').val() + "' width='500' height='400'></iframe></center> ");

                $("#txtnombre").val(DB.nombreprimero + ' ' + DB.nombresegundo);
                $("#txtapellido").val(DB.apellidoprimero + ' ' + DB.apellidosegundo);
                $("#txtnacimiento").val(Util.ConvertirFechaHumana(DB.fechanacimiento));
                $("#cmbsexo").val(DB.sexo);
                SeleccionarPorSexo(DB.sexo);
                $("#cmbedocivil").val(DB.estadocivil);
                $("#cmbcomponente").val(militar.Componente.abreviatura);
                $("#cmbgrado").html('<option value="' + militar.Grado.abreviatura + '">' + militar.Grado.descripcion + '</option>');
                $("#txtnresuelto").val(militar.nresuelto);

                $("#txtmfecharesuelto").val(Util.ConvertirFechaHumana(militar.fresuelto));
                $("#txtposicion").val(militar.posicion);
                $("#txtfechagraduacion").val(Util.ConvertirFechaHumana(militar.fingreso));
                $("#_fingreso").html(Util.ConvertirFechaHumana(militar.fingreso));
                $("#_fascenso").html(Util.ConvertirFechaHumana(militar.fascenso));

                //$("#cmbcategoria").val(militar.categoria);
                $("#cmbcategoria").val("S");
                $("#cmbsituacion").val(militar.situacion);
                //$("#cmbclase").val(militar.clase);
                $("#cmbclase").val("S");
                $("#_categoria").html($("#cmbcategoria option:selected").text());
                $("#_situacion").html($("#cmbsituacion option:selected").text());
                $("#_clasificacion").html('<font style="size:8px">' + $("#cmbclase option:selected").text() + "</font>");
                $("#_tiemposervicio").html(militar.tiemposervicio);
                if ($("#txtmfecharesuelto").val() != "") {
                    $("#cmbcategoria").val(militar.categoria);
                    $("#cmbclase").val(militar.clase);
                }
                var Fideicomiso = militar.Fideicomiso;
//          console.log(Fideicomiso);
                if (militar.Fideicomiso.areconocido != undefined) {
                    $("#_reconocidos").show();
                    $("#txtareconocido").val(Fideicomiso.areconocido);
                    $("#txtmreconocido").val(Fideicomiso.mreconocido);
                    $("#txtdreconocido").val(Fideicomiso.dreconocido);
                } else {
                    $("#_reconocidos").hide();
                    $("#txtareconocido").val("");
                    $("#txtmreconocido").val("");
                    $("#txtdreconocido").val("");
                }

                $("#_tblBancos").html(BancariosHTML());
                var thbanco = $('#tblBanco').DataTable({
                    'paging': false,
                    'lengthChange': false,
                    'searching': false,
                    'ordering': false,
                    'info': false,
                    //'autoWidth'   : false
                    'autoWidth': false
                });
                if (militar.Persona.DatoFinanciero != undefined) {

                    var DF = militar.Persona.DatoFinanciero[0];
                    $("#txtmnrocuenta").val(DF.cuenta);
                    $("#cmbminstfinanciera").val(DF.institucion);
                    $("#cmbmtipofinanciera").val(DF.tipo);
                    thbanco.clear().draw();
                    i = 0;
                    $.each(militar.Persona.DatoFinanciero, function (c, v) {
                        thbanco.row.add([
                            i++,
                            v.institucion,
                            v.tipo,
                            v.cuenta
                        ]).draw(false);


                    });
                }
                if (militar.Persona.Direccion != undefined) {

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
                if (militar.Persona.Correo != undefined) {
                    $("#txtmtelefono").val(militar.Persona.Telefono.domiciliario);
                    $("#txtmcelular").val(militar.Persona.Telefono.movil);
                    $("#txtmcorreo").val(militar.Persona.Correo.principal);
                    //$("#txtmcorreo").html(CorreoValido(militar.Persona.Correo.principal));
                }

                if (militar.Persona.PartidaNacimiento != undefined) {
                    $("#txtpregistrocivil").val(militar.Persona.PartidaNacimiento.registro);
                    $("#txtpano").val(militar.Persona.PartidaNacimiento.ano);
                    $("#txtpacta").val(militar.Persona.PartidaNacimiento.acta);
                    $("#txtpfolio").val(militar.Persona.PartidaNacimiento.folio);
                    $("#txtplibro").val(militar.Persona.PartidaNacimiento.libro);

                }

                if (militar.Persona.DatoFisionomico != undefined) {

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

                $("#txtcodigocomponente").val(militar.codigocomponente);
                $("#txtnumhistoriaclinica").val(militar.numerohistoria);

                let j = 1, x = 1;
                $.each(militar.Familiar, function (c, v) {
                    let familiar = new Familiar();
                    let DBF = v.Persona.DatoBasico;
                    let cedula = DBF.cedula;
                    let nombre = DBF.apellidoprimero + ' ' + DBF.apellidosegundo + ' ' + DBF.nombreprimero + ' ' + DBF.nombresegundo;
                    let parentesco = v.parentesco;
                    familiar.Persona.DatoBasico.sexo = v.Persona.DatoBasico.sexo;
                    familiar.parentesco = parentesco;
                    let nombres = DBF.nombreprimero + ' ' + DBF.nombresegundo;
                    let apellidos = DBF.apellidoprimero + ' ' + DBF.apellidosegundo;
                    let nombreCompleto = apellidos + ' ' + nombres;
                    let estadocivil = familiar.Persona.DatoBasico.estadocivil;
                    let fnac = Util.ConvertirFechaHumana(DBF.fechanacimiento);

                    var modificar = '<button type="button" id="btnModFamiliar' + j + '" \
            class="btn btn-sm btn-info" onclick="ModificarFamiliarPos(' + j + ')">\
              <i class="fa fa-pencil"></i></button>'
                    mil = nombre;
                    if (v.esmilitar == true) {
                        mil = nombre + '<font color="#0E6626"><i class="fa fa-fw fa-male"></i></font>&nbsp;';
                    }

                    //ok = '<font color="#blue"><i class="fa fa-fw fa-close"></i></font>';
                    fechavencimiento = "";
                    // if (v.fechavencimiento != undefined){
                    //   fechavencimiento = v.fechavencimiento;
                    // }
                    if (v.beneficio == true) {
                        situacion = "ACTIVO";
                    } else {
                        situacion = "INACTIVO"
                    }
                    mod = '<font color="#red"><i class="fa fa-fw fa-pencil"></i></font>';
                    edocivil = "";
                    if (DBF.estadocivil != undefined) {
                        edocivil = DBF.estadocivil;
                    }


                    $("#_contenidoFamiliares").append('<tr><td>' + nombreCompleto + '</td>\
              <td class="alinear_tddatos">' + cedula + '</td>\
              <td class="alinear_tddatos">' + familiar.GenerarParentesco() + '</td>\
              <td class="alinear_tddatos">' + fnac + '</td>\
              <td class="alinear_tddatos">' + edocivil + '</td>\
              <td class="alinear_tddatos">' + situacion + '</td>\
              <td class="alinear_tddatos">' + fechavencimiento + '</td></tr>');

                    t.row.add([
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
                        //v.beneficio,
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
                // t.column(14).visible(false);


                $('#tblFamiliares tbody').on('click', 'tr', function () {

                    var data = t.row(this).data();
                    $("#_lblConstanciaPension").hide();
                    urlf = "http://192.168.12.161/imagenes/" + data[1] + ".jpg";
                    $("#_imgfamiliar").attr("src", urlf);
                    $("#_ffnacimiento").html(Util.ConvertirFechaHumana(data[5]));
                    $("#_fcedula").html('C.I: V- ' + data[1]);
                    if (data[6] == true) {
                        $("#_fcedula").html('<a href="#" onClick="Buscar(\'' + data[1] + '\')">C.I: V- ' + data[1] + '</a>');
                        $("#_ffnacimiento").html(Util.ConvertirFechaHumana(data[5]));
                    }
                    if (data[14] == true) {
                        $("#_lblConstanciaPension").show();
                    }

                });

                $('#tblFamiliares tbody').on('dblclick', 'tr', function () {
                    var data = t.row(this).data();
                    if (data[6] == true) {
                        Util.ModalValidarFamiliar("Este es un afiliado titular");
                        return false;
                    } else {
                        ModificarFamiliarPos(data[0]);
                        FrmFamiliar(true);
                    }
                });

                $("#_tblHistorialMilitar").html(HistoricoMilitarHTML());
                var th = $('#tblhistoricomilitar').DataTable({
                    'paging': false,
                    'lengthChange': false,
                    'searching': false,
                    'ordering': false,
                    'info': false,
                    //'autoWidth'   : false
                    'autoWidth': false
                });

                th.clear().draw();
                i = 0;
                $.each(militar.HistorialMilitar, function (c, v) {
                    th.row.add([
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

    xhttp.onerror = function () {
        if (this.readyState == 4 && this.status == 0) {
            $.notify("No se puede conectar al servidor");
            $("#_cargando").hide();
        }

    };
    xhttp.send();
}

function BuscarInsert() {
    Buscar($("#txtcedula").val());
}

function activarSalvar() {
    $("#_contenido").html("¿Está seguro que desea editar?");
    var botones = '<button type="button" class="btn btn-success" data-dismiss="modal" id="_aceptar" onClick="activarActualizar()">Si</button>\
    <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>';
    $("#_botonesmsj").html(botones);
    $('#modMsj').modal('show');
}

function activarActualizar() {
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

function Salvar() {
    Frm = "S";
}

function Actualizar() {
    if (Util.ValidarFormulario("_bxDatoBasico") == false) {
        Util.ModalValidar("Favor completar todos los campos");
    } else {
        var militar = new Militar();
        militar.Actualizar();
        $("#_btnModificar").show();
        $("#_btnActualizar").hide();
        ActivarFormulario(true);
    }
}

function editarDB() {
    FrmDatosBasicos(false);
    $('#modMsj').modal('hide');
    $("#salvar").show();
}

function retornarFecha() {

}

function desactivarSalvar() {
    $('#modMsj').modal('hide');
    $("#salvar").hide();
    FrmDatosBasicos(true);
}

function SeleccionarPorSexo(sexo) {
    if (sexo == undefined) {
        gen = ($("#cmbsexo").val() == 'F') ? "A" : "O";
    } else {
        gen = (sexo == 'F') ? "A" : "O";
    }
    $("#cmbedocivil").html('<option value=""></option><option value="S">SOLTER' + gen + '</option>\
  <option value="C">CASAD' + gen + '</option> \
  <option value="D">DIVORCIAD' + gen + '</option>\
  <option value="V">VIUD' + gen + '</option>');
}

function SeleccionarPorSexoFamiliar(sexo) {
    if (sexo == undefined) {
        gen = ($("#cmbsexof").val() == 'F') ? "A" : "O";
    } else {
        gen = (sexo == 'F') ? "A" : "O";
    }
    $("#cmbedocivilf").html('<option value=""></option><option value="S">SOLTER' + gen + '</option>\
  <option value="C">CASAD' + gen + '</option> \
  <option value="D">DIVORCIAD' + gen + '</option>\
  <option value="V">VIUD' + gen + '</option>');

    if (gen == "A") {
        $("#cmbparentescof").html('<option value="HJ">HIJ' + gen + '</option>\
    <option value="PD">MADRE</option>\
    <option value="EA">ESPOSA</option>\
    <option value="HN">HERMANA</option>\
    ');
    } else {
        $("#cmbparentescof").html('<option value="HJ">HIJ' + gen + '</option>\
    <option value="PD">PADRE</option>\
    <option value="EA">ESPOSO</option>');
    }

}

function BancariosHTML() {
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

function FamiliaresHTML() {
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

function ConstanciaFamiliaresHTML() {
    var html = '<table class="table-fondo " cellspacing="0" width="100%" id="tblConstFamiliares" >\
    <thead>\
      <tr class="titulo_tabla table-borderedtd" >\
        <th class="alinear_td">APELLIDOS Y NOMBRES</th>\
        <th class="alinear_tddatos">CÉDULA</th>\
        <th class="alinear_tddatos">PARENTESCO</th>\
        <th class="alinear_tddatos">FECHA NAC.</th>\
        <th class="alinear_tddatos">EDO CIVIL</th>\
        <th class="alinear_tddatos">SITUACIÓN</th>\
        <th class="alinear_tddatos">FECHA VCTO. CARNET</th>\
      </tr>\
    </thead >\
    <tbody id="_contenidoFamiliares">\
    </tbody>\
  </table>';

    return html;

}

function HistoricoMilitarHTML() {
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

function IrCedula() {

    $("#_cedula").focus();
}


function ConvertirFechaActual() {
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var f = new Date();

    return f.getDate() + " del mes de " + meses[f.getMonth()] + " de " + f.getFullYear();
}

function IncluirFamiliar() {
    $("#modFamiliar").modal('show');
    BlanquearFamiliar();
    ActivarCalendariosFamiliar();
}

function ValidarCorreo() {
    var email = $('#txtmcorreo').val();
    var emailf = $('#txtmcorreof').val();
    var caracter = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

    if (!caracter.test(email)) {
        $.notify($('#txtmcorreo'), "Formato de correo invalido", {position: "top"});
        return false;
    } else {
        return true;
    }
}


function FrmFamiliar(valor) {
    $("#txtcedulaf").attr('disabled', valor);
    $("#txtnombref").attr('disabled', valor);
    $("#txtapellidof").attr('disabled', valor);
    $("#txtnacimientof").attr('disabled', valor);
    $("#cmbsexof").attr('disabled', valor);
    $("#cmbedocivilf").attr('disabled', valor);
    $("#cmbparentescof").attr('disabled', valor);
    $("#cmbcondicionf").attr('disabled', valor);
    $("#cmbsituacionf").attr('disabled', valor);

    $("#cmbestudiaf").attr('disabled', valor);
    $("#cmbestadof").attr('disabled', valor);
    $("#cmbmunicipiof").attr('disabled', valor);
    $("#cmbparroquiaf").attr('disabled', valor);
    $("#cmbciudadf").attr('disabled', valor);
    $("#txtcallef").attr('disabled', valor);
    $("#txtcasaf").attr('disabled', valor);
    $("#txtaptof").attr('disabled', valor);
    $("#txttelefonof").attr('disabled', valor);
    $("#txtcelularf").attr('disabled', valor);
    $("#txtcorreof").attr('disabled', valor);
    $("#txtpregistrocivilf").attr('disabled', valor);
    $("#txtpanof").attr('disabled', valor);
    $("#txtpactaf").attr('disabled', valor);
    $("#txtpfoliof").attr('disabled', valor);
    $("#txtplibrof").attr('disabled', valor);
    $("#txtestaturaf").attr('disabled', valor);
    $("#txtpesof").attr('disabled', valor);
    $("#txttallaf").attr('disabled', valor);
    $("#txtgruposanguineof").attr('disabled', valor);
    $("#cmbpielf").attr('disabled', valor);
    $("#cmbojosf").attr('disabled', valor);
    $("#cmbcolorcabellof").attr('disabled', valor);
    $("#txtsenaparticularf").attr('disabled', valor);
    //
    $("#txtcarreraf").attr('disabled', valor);
    $("#cmbnivelf").attr('disabled', valor);
    $("#txtsemestref").attr('disabled', valor);
    $("#txtiniciof").attr('disabled', valor);
    $("#txtfinf").attr('disabled', valor);
    $("#txtuniversidadf").attr('disabled', valor);
    $("#txtuniversidadf").attr('disabled', valor);
    //
    $("#txtfechacondicionf").attr('disabled', valor);
    $("#cmbDiscapacidadf").attr('disabled', valor);
    $("#txtdiagnosticof").attr('disabled', valor);
    $("#cmbHospitalf").attr('disabled', valor);
    $("#btnnacionalidad").attr('disabled', valor);
    if (valor == false) {
        $("#imgIngFam").show();
        $("#_btnActeptarFamiliar").show();
    } else {
        $("#imgIngFam").hide();
        $("#_btnActeptarFamiliar").hide();
    }


}

function LimpiarFrmFamiliar() {
    $("#txtcedulaf").val("");
    $("#txtnombref").val("");
    $("#txtapellidof").val("");
    $("#txtnacimientof").val("");
    $("#cmbsexof").val("S");
    $("#cmbedocivilf").val("SS");
    $("#cmbparentescof").val("S");
    $("#cmbsituacionf").val("S");
    $("#cmbcondicionf").val("S");
    $("#cmbestudiaf").val("S");
    $("#cmbestadof").val("S");
    $("#cmbmunicipiof").val("S");
    $("#cmbparroquiaf").val("S");
    $("#cmbciudadf").val("S");
    $("#txtcallef").val("");
    ;
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

    //
    $("#txtcarreraf").val("");
    $("#cmbnivelf").val("");
    $("#txtsemestref").val("");
    $("#txtiniciof").val("");
    $("#txtfinf").val("");
    $("#txtuniversidadf").val("");
    $("#txtuniversidadf").val("");
    //
    $("#txtfechacondicionf").val("");
    $("#cmbDiscapacidadf").val("");
    $("#txtdiagnosticof").val("");
    $("#cmbHospitalf").val("");

    $("#txtedadf").val("");

    urlf = "http://192.168.12.161/imagenes/ndisponible.jpg";
    $("#_imgIngFam").attr("src", urlf);
    // $("#txttwitterf").val("");
    // $("#txtfacebookf").val("");
    // $("#txtinstagranf").val("");
    // $("#txtlinkedinf").val("");

}


function ActivarBuscar() {
    $("#_ficha").hide();
    $("#_consultarbox").show();
    $("#_search").hide();
}

function VisualizarCarnet() {
    if (Util.ValidarFormulario("_frmDatoBasico") == false) {
        Util.ModalValidar("Favor actualizar afiliado");
    } else {
        //alert(ObjMilitar.estatuscarnet);
        if (ObjMilitar.estatuscarnet == undefined || ObjMilitar.estatuscarnet == 0) {
            $("#modCarnetValidar").modal("show");
        } else {
            console.log(OqMilitar);
            var militar = OqMilitar;
            url = "images/grados/" + militar.Grado.abreviatura + ".png";

            url = url.toLowerCase();
            $("#imggradoCarnet").attr("src", url);
            url = "http://192.168.12.161/imagenes/" + $("#txtcedula").val() + ".jpg";

            $("#imgfotoCarnet").attr("src", url);
            $("#lblgrado").html(militar.Grado.descripcion);
            $("#lblnombre").html(militar.Persona.DatoBasico.nombreprimero);
            $("#lblapellido").html(militar.Persona.DatoBasico.apellidoprimero);
            $("#lblcedula").html(militar.Persona.DatoBasico.cedula);
            url = "http://192.168.6.45/temp/" + $("#txtcedula").val() + "/huella.bmp";

            $("#imghuellaCarnet").attr("src", url);
            $("#divcategoria").html(militar.ObtenerCategoria());
            $("#divsiglas").html(militar.Componente.abreviatura);
            url = "images/firma.png";
            $("#imgfirmaCarnet").attr("src", url);
            $("#lblcodigo").html(militar.codigocomponente);
            $("#lblhistoria").html(militar.numerohistoria);
            $("#lblcabello").html(militar.Persona.DatoFisionomico.ObtenerCabello());
            $("#lblgrupo").html(militar.Persona.DatoFisionomico.gruposanguineo);
            $("#lblestatura").html(militar.Persona.DatoFisionomico.estatura);
            $("#lblojos").html(militar.Persona.DatoFisionomico.ObtenerOjo());
            $("#lblcolor").html(militar.Persona.DatoFisionomico.ObtenerPiel());

            ImprimirCarnet("_objectPDF");

        }

        //$("#modCarnet").modal("show");
    }

}

function ContinuarTIM() {

    var recibo = new Recibo();
    if (recibo.Verificar() === true) {
        recibo.Salvar();
        $('#modCarnetValidar').modal('hide');

    } else {
        console.log(recibo);
    }
    //$("#modCarnet").modal("show");
}

function VisualizarCarnetFamiliar() {
    $("#modCarnetFamiliar").modal("show");
}

function ActivarCalendarios() {
    $('#txtnacimiento').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });
    $('#txtfechagraduacion').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });
    $('#txtdefuncion').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });
    $('#txtmfecharesuelto').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });
    $('#txtmfechaC').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });


    ////ACTIVAR MASK
    $('[data-mask]').inputmask();
}

function ActivarCalendariosFamiliar() {
    $('#txtnacimientof').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });

    $('#txtfechacondicionf').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });

    $('#txtiniciof').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });

    $('#txtfinf').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });


    $('#txtnacimientom').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });

    $('#txtnacimientof').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        language: 'es'
    });
    ////ACTIVAR MASK
    $('[data-mask]').inputmask();


}

function incluirAfiliado() {

    ActivarCalendarios();

    $('#txtcedula').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

    $("#_divfechanacimiento").hide();
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

function ActivarFormulario(valor) {
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

function FrmDatosBasicos(valor) {
    $("#txtcedula").attr('disabled', valor);
    $("#txtnombre").attr('disabled', valor);
    $("#txtapellido").attr('disabled', valor);
    $("#txtnacimiento").attr('disabled', valor);
    $("#cmbsexo").attr('disabled', valor);
    $("#cmbedocivil").attr('disabled', valor);
    $("#txtdefuncion").attr('disabled', valor);
    $("#txtareconocido").attr('disabled', valor);
    $("#txtmreconocido").attr('disabled', valor);
    $("#txtdreconocido").attr('disabled', valor);

    //$("#btnnacimiento").attr('disabled', valor);
    if (valor == false) {
        $("#cargarcopiacedula").show();
        $("#cargarpartida").show();
        $("#cargarfoto").show();
        $("#cargarfirma").show();
        $("#cargarhuella").show();
        $("#_reconocidos").show();

    } else {
        $("#cargarcopiacedula").hide();
        $("#cargarpartida").hide();
        $("#cargarfoto").hide();
        $("#cargarfirma").hide();
        $("#cargarhuella").hide();
        $("#_reconocidos").hide();
    }
    //$("#btnnacimiento").attr('disabled', valor);
    //$("#btndefuncion").attr('disabled', valor);
}

function LimpiarFrmDatosBasicos() {
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

function FrmDatosMilitar(valor) {
    $("#txtfechagraduacion").attr('disabled', valor);
    $("#cmbcomponente").attr('disabled', valor);
    $("#cmbgrado").attr('disabled', valor);
    $("#cmbsituacion").attr('disabled', valor);
    $("#cmbclase").attr('disabled', valor);
    $("#cmbcategoria").attr('disabled', valor);

    $("#txtnresuelto").attr('disabled', valor);
    $("#txtmfecharesuelto").attr('disabled', valor);
    $("#txtposicion").attr('disabled', valor);
    $("#txtcodigocomponente").attr('disabled', valor);
    $("#txtnumhistoriaclinica").attr('disabled', valor);


}

function LimpiarFrmDatosMilitar(valor) {
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

function NacionalidadFamiliar(nac) {
    $("#btnnacionalidad").html(nac);
}

function FrmCuentaBancaria(valor) {
    $("#cmbminstfinanciera").attr('disabled', valor);
    $("#cmbmtipofinanciera").attr('disabled', valor);
    $("#txtmnrocuenta").attr('disabled', valor);
    if (valor == false) {
        $("#_cmbminstfinanciera").show();
        $("#_cmbmtipofinanciera").show();
        $("#_txtmnrocuenta").show();
    } else {
        $("#_cmbminstfinanciera").hide();
        $("#_cmbmtipofinanciera").hide();
        $("#_txtmnrocuenta").hide();
    }
}

function LimpiarFrmCuentaBancaria(valor) {
    $("#cmbinstfinanciera").val("");
    $("#cmbtipofinanciera").val("");
    $("#txtnrocuenta").val("");
}

function FrmDireccion(valor) {
    $("#cmbmestado").attr('disabled', valor);
    $("#cmbmmunicipio").attr('disabled', valor);
    $("#cmbmparroquia").attr('disabled', valor);
    $("#cmbmciudad").attr('disabled', valor);
    $("#txtmcalle").attr('disabled', valor);
    $("#txtmcasa").attr('disabled', valor);
    $("#txtmapto").attr('disabled', valor);
    $("#txtmtelefono").attr('disabled', valor);
    $("#txtmcelular").attr('disabled', valor);
    $("#txtmcorreo").attr('disabled', valor);
}

function LimpiarFrmDireccion(valor) {
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

function FrmPartidaNacimiento(valor) {
    $("#txtpregistrocivil").attr('disabled', valor);
    $("#txtpano").attr('disabled', valor);
    $("#txtpacta").attr('disabled', valor);
    $("#txtpfolio").attr('disabled', valor);
    $("#txtplibro").attr('disabled', valor);
    //
    $("#txtRegistroCivilN").attr('disabled', valor);
    $("#txtAnoN").attr('disabled', valor);
    $("#txtNumeroActaN").attr('disabled', valor);
    $("#txtNumeroFolioN").attr('disabled', valor);
    $("#txtLibroN").attr('disabled', valor);
}

function LimpiarFrmPartidaNacimiento(valor) {
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

function FrmFisicoFisionomico(valor) {
    $("#txtmestatura").attr('disabled', valor);
    $("#txtmpeso").attr('disabled', valor);
    $("#txtmtalla").attr('disabled', valor);
    $("#cmbmgruposanguineo").attr('disabled', valor);
    $("#cmbmpiel").attr('disabled', valor);
    $("#cmbmojos").attr('disabled', valor);
    $("#cmbmcolorcabello").attr('disabled', valor);
    $("#txtmsenaparticular").attr('disabled', valor);
}

function LimpiarFrmFisicoFisionomico(valor) {
    $("#txtmestatura").val("");
    $("#txtmpeso").val("");
    $("#txtmtalla").val("");
    $("#cmbmgruposanguineo").val("S");
    $("#cmbmpiel").val("S");
    $("#cmbmojos").val("S");
    $("#cmbmcolorcabello").val("S");
    $("#txtmsenaparticular").val("");
}

function FrmRedSocial(valor) {
    $("#txtmtwitter").attr('disabled', valor);
    $("#txtmfacebook").attr('disabled', valor);
    $("#txtminstagran").attr('disabled', valor);
    $("#txtmlinkedin").attr('disabled', valor);
}

function LimpiarFrmRedSocial(valor) {
    $("#txtmtwitter").val("");
    $("#txtmfacebook").val("");
    $("#txtminstagran").val("");
    $("#txtmlinkedin").val("");
}


function FrmTim(valor) {
    $("#_imghuella").attr('disabled', valor);
    $("#_imgfirma").attr('disabled', valor);
}

function LimpiarFrmTim(valor) {
    $("#_imghuella").val("");
    $("#_imgfirma").val("");
}

function LimpiarFrmTarjeta() {


    $("#_img").attr("src", "images/ndisponible.jpg");
    $("#_imggrado").attr("src", "images/grados/no.png");
    $("#_fingreso").html("");
    $("#_fascenso").html("");
    $("#_categoria").html("");
    $("#_situacion").html("");
    $("#_clasificacion").html("");
    $("#_tiemposervicio").html("");
}

function ModDocumentoCivil(valor) {
    doc = $("#cmbedocivil option:selected").val();
    switch (doc) {
        case "C":
            $("#txtRegistroCivilM").attr('disabled', valor);
            $("#txtAnoM").attr('disabled', valor);
            $("#txtNumeroActaM").attr('disabled', valor);
            $("#txtNumeroFolioM").attr('disabled', valor);
            $("#txtLibroM").attr('disabled', valor);
            break;
        case "D":
            $("#txttribunalD").attr('disabled', valor);
            $("#txtnumerosentenciaD").attr('disabled', valor);
            $("#txtfechasentenciaD").attr('disabled', valor);
            break;
        case "V":
            $("#txtRegistroCivilV").attr('disabled', valor);
            $("#txtFechaV").attr('disabled', valor);
            break;
        case "S":
            $("#txtRegistroCivilS").attr('disabled', valor);
            $("#txtFechaS").attr('disabled', valor);
            break;
        default:
    }

}

function FrmDireccionFamiliar(valor) {
    $("#txtmtwitter").attr('disabled', valor);
    $("#txtmfacebook").attr('disabled', valor);
    $("#txtminstagran").attr('disabled', valor);
    $("#txtmlinkedin").attr('disabled', valor);
}

function LimpiarFrmDireccionFamiliar(valor) {
    $("#txtmtwitter").val("");
    $("#txtmfacebook").val("");
    $("#txtminstagran").val("");
    $("#txtmlinkedin").val("");
}


function seleccionarActas() {
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

function seleccionarPartida() {
    nac = $("#txtnacimiento").val();
    $('#modDocumentPartida').modal('show');
}

function seleccionarCopiaCedula() {
    $('#modDocumentCedula').modal('show');
}

function seleccionarDefuncion() {
    def = $("#txtdefuncion").val();
    $("#_titulopd").html("Registrar Acta de Defunción");
    CargarUrl("_contenidopd", "afi/actadefuncion");
    $('#modPartidaActa').modal('show');
}


function cambiarGrado() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", Conn.URL + "componente/" + $("#cmbcomponente option:selected").val());
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            componente = JSON.parse(xhttp.responseText);
            $("#cmbgrado").html('<option selected="selected" value="S"></option>');
            $.each(componente.Grado, function (c, v) {
                $("#cmbgrado").append('<option selected="selected" value="' + v.codigo + '">' + v.descripcion + '</option>')
            });
            $("#cmbgrado").val('S');
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

function ValidarCampos() {

}

function GenerarCodigoBarra() {

}

function ValidarGenerarCarnet() {
    cr = $("#cmbMotivoCarnet option:selected").val();
    $('#txtmfechaC').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
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

function SeleccionarCuenta() {
    $("#txtmnrocuenta").val($("#cmbminstfinanciera option:selected").val());
}


function ModificarFamiliarPos(pos) {
    if (Util.ValidarFormulario("_frmDatoBasico") == false) {
        Util.ModalValidar("Favor actualizar afiliado");
    } else {
        FrmFamiliar(false);
        ActivarCalendariosFamiliar();
        var Familiar = ObjMilitar.Familiar[pos - 1];
        var DB = Familiar.Persona.DatoBasico;
        $("#modFamiliar").modal('show');
        $('#txtcedulaf').val(DB.cedula);
        SeleccionarPorSexoFamiliar(DB.sexo);
        $('#btnnacionalidad').val(NacionalidadFamiliar(DB.nacionalidad));

        $('#txtnacimientof').val(Util.ConvertirFechaHumana(DB.fechanacimiento));
        $('#txtedadf').val(Util.CalcularEdad($('#txtnacimientof').val()));
        $('#txtnombref').val(DB.nombreprimero);
        $('#txtapellidof').val(DB.apellidoprimero);
        $('#cmbsexof').val(DB.sexo);
        $('#cmbcondicionf').val(Familiar.condicion);
        $('#cmbestudiaf').val(Familiar.estudia);
        valor = 0;
        if (Familiar.beneficio == true) {
            valor = 1;
        }
        $('#cmbsituacionf').val(valor);
        $("#cmbedocivilf").val("S");
        $("#_condicionf").hide();
        $("#_estudiaf").hide();
        $("#_condicionfdoc").hide();
        $("#_estudiafdoc").hide();

        if (Familiar.parentesco == "EA") {
            $("#cmbedocivilf").val("C");
        } else if (Familiar.parentesco == "HJ") {
            $("#_condicionf").show();
            $("#_estudiaf").show();
            $("#_condicionfdoc").show();
            $("#_estudiafdoc").show();
        } else {

        }


        $("#cmbparentescof").val(Familiar.parentesco);
        urlf = "http://192.168.12.161/imagenes/" + DB.cedula + ".jpg";
        $("#_imgIngFam").attr("src", urlf);

        urlf = "temp/" + ObjMilitar.id + "/partida" + DB.cedula + ".jpg";
        $("#_imgpartidaF").attr("src", urlf);

        urlf = "temp/" + ObjMilitar.id + "/cestudio" + DB.cedula + ".jpg";
        $("#_imgEstudiaf").attr("src", urlf);

    }
}

function ModificarFamiliar() {
    if (Util.ValidarFormulario("_frmDatoBasico") == false) {
        Util.ModalValidar("Favor actualizar afiliado");
    } else {
        ActivarCalendariosFamiliar();
        $("#modMsjfamiliar").modal('show');

        LimpiarFrmFamiliar();
    }

}

function CConstanciaAfiliacion() {

    var urlMil = "http://192.168.12.161/imagenes/" + $("#txtcedula").val() + ".jpg";
    var urlGra = "images/grados/" + militar.Grado.abreviatura + ".png";
    urlGra = urlGra.toLowerCase();
    var fechaActual = ConvertirFechaActual();
    var ts = militar.tiemposervicio.split(" ");
    var tiempo = ts[0] + "ÑOS  " + ts[1] + "ESES " + ts[2] + "ÍAS"
    var gradoPI = 'GENERAL DE DIVISIÓN';
    var clascat = $("#cmbcategoria option:selected").text() + ' / ' + $("#cmbclase option:selected").text();
    var nombrePI = 'JESÚS RAFAEL SALAZAR VELÁSQUEZ';
    $('#modRpt').modal('show');
    $("#lblgradoMil").text($("#cmbgrado option:selected").text());
    $("#lblGradoFoto").text($("#cmbgrado option:selected").text());
    $("#lblcedulaMil").text($("#txtcedula").val());
    $("#lblnombreMil").text($("#txtapellido").val() + ' ' + $("#txtnombre").val());
    $("#lbledoCivilM").text($("#cmbedocivil option:selected").text());
    $("#lblfchNacMil").text($("#txtnacimiento").val());
    $("#lbldireccionMil").text($("#txtmcalle").val() + ' ' + $("#txtmcasa").val() +
        ' ' + $("#txtmapto").val() + ' ' + $("#cmbmparroquia option:selected").text() +
        ' ' + $("#cmbmmunicipio option:selected").text() + ' ' + $("#cmbmciudad option:selected").text() +
        ' ' + $("#cmbmestado option:selected").text());
    $("#lblfchIngresoFANB").text($("#txtfechagraduacion").val());
    $("#lblfchUltAscenso").text($("#_fascenso").val());
    $("#lblaServicio").text(tiempo);
    $("#lblcomponente").text($("#cmbcomponente option:selected").text());
    $("#lblsituacionMil").text($("#cmbsituacion option:selected").text());
    $("#_fotoConstancia").attr("src", urlMil);
    $("#_Constgrado").attr("src", urlGra);
    $("#lblfchActual").text(fechaActual);
    $("#lblgradoPI").text(gradoPI);
    $("#lblnombrePI").text(nombrePI);
    $("#lblgradoPIF").text(gradoPI);
    $("#lblclascat").text(clascat);

}

function ConstanciaPensionSobr() {

    //var urlMil   = "http://192.168.12.161/imagenes/" +  $("#txtcedula").val() + ".jpg";
//  var urlGra   = "images/grados/" + militar.Grado.abreviatura + ".png";
//      urlGra   = urlGra.toLowerCase();
    var fechaActual = ConvertirFechaActual();
    var ts = militar.tiemposervicio.split(" ");
    var tiempo = ts[0] + "ÑOS  " + ts[1] + "ESES " + ts[2] + "ÍAS"
    var gradoPI = 'GENERAL DE DIVISIÓN';
    var clascat = 'OFICIAL / ASIMILADO'
    var nombrePI = 'JESÚS RAFAEL SALAZAR VELÁSQUEZ';
    $('#modConsSobr').modal('show');
    $('#lblprueba').text("aquioooooioi")


}


function imprSelec(nombre) {

    var html = $("#" + nombre).html();
    var ventana = window.open("", "_blank");
    ventana.document.write(html);
    ventana.document.head.innerHTML = '\
 <meta charset="utf-8">\
 <meta http-equiv="X-UA-Compatible" content="IE=edge">\
 <title>SSSIFANB</title>\
 <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">\
 <link rel="stylesheet" href="dist/css/skins.ipsfa/_all-skins_1.css">\
  <style type="text/css">\
  @media screen,print {\
  .membrete {\
    font-style: normal;\
    font-family:Arial, monospace, serif ;\
    font-size: 6pt;\
  }\
  .titulo{\
    font-size:8pt;\
    text-align: left;\
    font-family:Arial, monospace, serif ;\
  }\
  .titulo_fondo{\
    font-size:10pt;\
    font-family:Arial, monospace, serif ;\
    background-color: #D8D8D8;\
    border-radius: 7px;\
  }\
  .titulo_tabla{\
    font-size:7pt;\
    font-family:Arial, monospace, serif ;\
    background-color: #D8D8D8;\
  }\
  .alinear_td{\
    text-align: center;\
  }\
  .alinear_tddatos{\
    text-align: left;\
  }\
.marca-de-agua {\
    background-image: url("images/fondo.png");\
    background-repeat: no-repeat;\
    background-position: center;\
    width: 100%;\
    height: auto;\
    margin: auto;\
   }\
  .cuerpo_constancia{\
    font-style: normal;\
    font-family:Arial, monospace, serif ;\
    font-size: 14;\
    }\
  }\
   .row-centered {\
       text-align:center;\
   }\
   .col-centered {\
       display:inline-block;\
       float:none;\
       text-align:left;\
       margin-right:-4px;\
   }\
   td {\
      font-size: 10px;\
      font-weight: normal;\
   }\
  .table-borderedtd{\
  border: 1px solid black;\
  border-radius: 7px;\
   }\
   .table-fondo{\
    border: 1px solid black;\
    border-radius: 7px;\
    th:lastchild, td:lastchild {\
    border-right: 0;\
   }}\
   @charset "utf-8";\
   @page {\
    margin: 1cm;\
    size:8.5in 11in;\
      }\
}\
 </style>';
    ventana.print();
    ventana.close();

}

function CalcularEdadFamiliar(id, vl) {
    $('#' + id).val(Util.CalcularEdad($('#' + vl).val()));
}

function ActivarModalFamiliar() {
    $("#modFamiliar").modal('show');
}

function ValidarMilitar(valor) {

    if ($("#txtcedula").val() == $("#txtcedulam").val()) {
        //
        $("#modMsjfamiliar").modal('hide');
        Util.ModalValidarFamiliar("Usted no puede registrar al mismo militar como afiliado");
        return false;
    }


    if ($("#cmbparentescom").val() == "HJ" && parseInt($("#txtedadmm").val()) > 26) {
        //
        $("#modMsjfamiliar").modal('hide');
        Util.ModalValidarFamiliar("El hijo que intenta ingresar es mayor a 26 años");
        return false;
    }
    let esCasado = false;
    $.each(ObjMilitar.Familiar, function (c, v) {
        if (v.parentesco == "EA" && v.beneficio == true) {
            esCasado = true;
        }

    });

    if ($("#cmbparentescom").val() == "EA" && esCasado == true) {
        $("#modMsjfamiliar").modal('hide');
        Util.ModalValidarFamiliar("El afiliado ya posee una esposa");
        return false;
    }


    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", Conn.URL + "militar/crud/" + $("#txtcedulam").val());
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            ActivarCalendariosFamiliar();
            LimpiarFrmFamiliar();
            FrmFamiliar(false);
            $('#txtcedulaf').val($("#txtcedulam").val());
            $('#txtedadf').val($('#txtedadf').val());

            var militar = JSON.parse(xhttp.responseText);
            if (militar.tipo == undefined) {
                var DB = militar.Persona.DatoBasico;
                $('#txtcedulaf').val(DB.cedula);
                url = "http://192.168.12.161/imagenes/" + DB.cedula + ".jpg";
                $("#_imgIngFam").attr("src", url);
                SeleccionarPorSexoFamiliar(DB.sexo);
                $('#btnnacionalidad').val(NacionalidadFamiliar(DB.nacionalidad));
                $('#txtnacimientof').val(Util.ConvertirFechaHumana(DB.fechanacimiento));
                $('#txtedadf').val(Util.CalcularEdad($('#txtnacimientof').val()));
                $('#txtnombref').val(DB.nombreprimero);
                $('#txtapellidof').val(DB.apellidoprimero);
                $('#cmbsexof').val(DB.sexo);
                $('#cmbcondicionf').val(0);
                $('#cmbestudiaf').val(0);
                $('#cmbmilitarf').val(0);
                $('#cmbsituacionf').val(0);
                $("#cmbedocivilf").val("S");
                $("#_condicionf").hide();
                $("#_estudiaf").hide();
                $("#_condicionfdoc").hide();
                $("#_estudiafdoc").hide();
                var madre = false;
                var padre = false;
                var casado = false;
                var sexo = DB.sexo;
                var hijo = false;
                $.each(militar.Familiar, function (c, v) {
                    var familiar = v.Persona.DatoBasico;
                    if (v.parentesco == "PD" && familiar.sexo == "M") {
                        padre = true;
                    } else if (v.parentesco == "PD" && familiar.sexo == "F") {
                        madre = true;
                    }
                    if (v.parentesco == "EA") {
                        casado = true;
                    }
                }); //Fin de For each
                var activar = false;
                var sparentesco = 'ESPOSO';
                var spadre = 'PADRE';
                $("#cmbparentescof").html('');
                if ($("#cmbsexo").val() == "F") {
                    sparentesco = 'ESPOSA';
                    spadre = 'MADRE';
                    if (madre == false) {
                        $("#cmbparentescof").append('<option value="HJ">HIJA</option>');
                        activar = true;
                    }
                } else {
                    if (padre == false) {
                        $("#cmbparentescof").append('<option value="HJ">HIJO</option>');
                        activar = true;
                    }
                }

                var estadocivil = $("#cmbedocivil").val();
                if (casado == false && estadocivil != "C") {
                    $("#cmbparentescof").append('<option value="EA">' + sparentesco + '</option>');
                    activar = true;
                }
                if (activar != true) {
                    $("#modMsjfamiliar").modal('hide');
                    Util.ModalValidarFamiliar("El afiliado no presenta parentesco");
                    return false;
                } else {
                    $("#modFamiliar").modal('show');
                }

            } else { //if no existe el miliater

                $("#modFamiliar").modal('show');
            } //Fin del tipo

        } // fin Estatus
    }
    xhttp.onerror = function () {
        if (this.readyState == 4 && this.status == 0) {
            $.notify("No se puede conectar al servidor");
            $("#_cargando").hide();
        }

    };
    xhttp.send();
}

function SalvarFamiliar() {
    var familiar = new Familiar();
    if (Util.ValidarFormulario("_frmDatoFamiliar") == false) {
        Util.MensajeFormulario("_frmDatoFamiliar","msj_modal_familiar");
    }else{
        familiar.Salvar();
        $("#modFamiliar").modal("hide");
    }
}


function GenerarCarnet() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", Conn.URL + "militar/crud/" + $("#txtcedulam").val());
    xhttp.onreadystatechange = function () {

    }
}

function ImprimirCarnet(nombre) {
    var html = $("#" + nombre).html();
    //console.log(html);
    var ventana = window.open("", "_blank");
    ventana.document.write(html);
    ventana.document.head.innerHTML = '<style>\n' +
        '        @charset "utf-8";\n' +
        '        @page {\n' +
        '            margin: 0cm;\n' +
        '            size: 8cm 5.5cm;\n' +
        '        }\n' +
        '        section {\n' +
        '            page-break-before: always;\n' +
        '        }\n' +
        '        <!--\n' +
        '        body {margin: 0px;}\n' +
        '\n' +
        '        .marco-carnet{border:0px #003399 solid;width:8.5cm;height:5.4cm;position:relative;}\n' +
        '\n' +
        '        /**PARTE DELANTERA */\n' +
        '        .css-foto{\n' +
        '            border: 0px #0033CC solid;\n' +
        '            width: 68px;\n' +
        '            height: 90px;\n' +
        '            position: absolute;\n' +
        '            left: 231px;\n' +
        '            top: 69px;\n' +
        '        }\n' +
        '        .css-insignia{\n' +
        '            border: 0px #0033CC solid;\n' +
        '            width: 70px;\n' +
        '            height: 60px;\n' +
        '            position: absolute;\n' +
        '            left: 95px;\n' +
        '            top: 65px;\n' +
        '        }\n' +
        '        .componente{border:0px #0033FF solid; width:250px; height:14px; position:absolute; left: 50px; top: 44px; font-size:10px;font-weight:bold; font-color:# EFEFEF; text-align:center;}\n' +
        '        .fecha-vencimiento{\n' +
        '            border: 0px #0033FF solid;\n' +
        '            width: 70px;\n' +
        '            height: 8px;\n' +
        '            position: absolute;\n' +
        '            left: 233px;\n' +
        '            top: 161px;\n' +
        '            font-size: 7px;\n' +
        '            text-align: center;\n' +
        '            font-weight: bold;\n' +
        '            -webkit-transform: rotate(-0deg);\n' +
        '            -moz-transform: rotate(-0deg);\n' +
        '        }\n' +
        '        .firma-titular{border:0px #0033FF solid; width:84px; height:auto; position:absolute; left: 234px; top: 157px;font-size:7px;font-weight:bold;}\n' +
        '        .firma-titular-ii{border-top:0px #003300 solid;padding-top:2px;text-align:center;}\n' +
        '        .labels-dat-person{border:0px #0033FF solid; width:67px; height:auto; position:absolute; left: 5px; top: 128px;font-size:8px;font-weight:bold;}\n' +
        '        .labels-dat-person-resl{\n' +
        '            border: 0px #0033FF solid;\n' +
        '            width: 150px;\n' +
        '            height: auto;\n' +
        '            position: absolute;\n' +
        '            left: 75px;\n' +
        '            top: 120px;\n' +
        '            font-size: 11px;\n' +
        '            font-weight: bold;\n' +
        '            font-color: #000;\n' +
        '            text-align: center\n' +
        '        }\n' +
        '        .letra-8{font-size:12px;}\n' +
        '        .nota-pie-i-anverso{border:0px #0033FF solid; width:180px; height:8px; position:absolute; left: 140px; top: 177px; font-size:7px;text-align:left;font-style:normal;}\n' +
        '        .nota-pie-ii-anverso{border:0px #0033FF solid; width:180px; height:8px; position:absolute; left: 140px; top: 187px; font-size:7px;text-align:left;font-style:normal;}\n' +
        '\n' +
        '        /**PARTE TRASERA */\n' +
        '        .css-huella{border:0px #0033CC solid;width:70px; height:70px; position:absolute; left: 8px; top: 44px;}\n' +
        '        .firma-presidente{border:0px #0033FF solid; width:96px; height:auto; position:absolute; left: 110px; top: 120px}\n' +
        '        .firma-ministro{\n' +
        '            border: 0px #0033FF solid;\n' +
        '            width: 96px;\n' +
        '            height: auto;\n' +
        '            position: absolute;\n' +
        '            left: 127px;\n' +
        '            top: 130px\n' +
        '        }\n' +
        '        .telefono-contacto{border:0px #0033FF solid; width:76px; height:14px; position:absolute; left: 186px; top: 185px;font-size:10px;font-weight:bold;}\n' +
        '        .datos-medicos-i{border:0px #0033FF solid; width:150px; height:auto; position:absolute; left: 170px; top: 45px;font-size:10px;font-weight:bold;}\n' +
        '        .datos-medicos-ii{border:2px #0033FF solid; width:63px; height:auto; position:absolute; left: 500px; top: 94px;font-size:9px;font-weight:bold;font-color:#000;}\n' +
        '        .serial-numero{border:0px #0033FF solid; width:70px; height:14px; position:absolute; left: 11px; top: 15px;font-size:7px;text-align:center; font-weight:bold;}\n' +
        '        .serial{border:0px #0033FF solid; width:70px; height:14px; position:absolute; left: 11px; top: 25px;font-size:10px; text-align:center}\n' +
        '        .categoria{\n' +
        '            border: 0px #0033FF solid;\n' +
        '            width: 76px;\n' +
        '            height: 14px;\n' +
        '            position: absolute;\n' +
        '            left: 128px;\n' +
        '            top: 15px;\n' +
        '            font-size: 16px;\n' +
        '            font-weight: bold;\n' +
        '        }\n' +
        '        .categoria1{\n' +
        '            border: 0px #0033FF solid;\n' +
        '            width: 100px;\n' +
        '            height: 14px;\n' +
        '            position: absolute;\n' +
        '            left: 128px;\n' +
        '            top: 15px;\n' +
        '            font-size: 11px;\n' +
        '            font-weight: bold;\n' +
        '        }\n' +
        '        .estatus {border:0px #0033FF solid; width:60px; height:60px; top:60px; left:95px; position:absolute;font-size:40px;font-weight:bold;}\n' +
        '        .siglas-componente{border:0px #0033FF solid; width:30px; height:14px; position:absolute; left: 258px; top: 17px; font-size:18px;font-weight:bold;}\n' +
        '        .labels-dat-medicos{\n' +
        '            border: 0px #0033FF solid;\n' +
        '            width: 200px;\n' +
        '            height: auto;\n' +
        '            position: absolute;\n' +
        '            left: 123px;\n' +
        '            top: 48px;\n' +
        '            font-size: 8px;\n' +
        '        }\n' +
        '        .labels-dat-medicos-resl{\n' +
        '            border: 0px #0033FF solid;\n' +
        '            width: 60px;\n' +
        '            height: auto;\n' +
        '            position: absolute;\n' +
        '            left: 216px;\n' +
        '            top: 48px;\n' +
        '            font-size: 8px;\n' +
        '        }\n' +
        '        .nota-pie-i-reverso{border:0px #0033FF solid; width:297px; height:12px;  left:14px; position:absolute; top: 173px;font-weight:bold; font-size:9px; text-align:center}\n' +
        '        .nota-pie-ii-reverso{border:0px #0033FF solid; width:300px; height:14px; left:12px; position:absolute; top: 182px; font-weight:bold; font-size:8px; text-align:center;}\n' +
        '        -->\n' +
        '    </style>';
    ventana.print();
    ventana.close();
}
