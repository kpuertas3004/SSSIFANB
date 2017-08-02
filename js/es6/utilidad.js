class Utilidad {
    constructor() {

    }

    SoloNumero(event) {
        var key = event.keyCode || event.which;
        var tecla = String.fromCharCode(key).toLowerCase();
        var numeros = "0123456789";
        var especiales = [8, 37, 39, 46, 13, 9];

        var tecla_especial = false
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }

        if (numeros.indexOf(tecla) == -1 && !tecla_especial) {
            return false;
        }
    }

    //Recibe  Fecha Formato: AAAA-MM-DD 00:00:00
    //Retorna Fecha Formato: DD/MM/AAAA
    ConvertirFechaHumana(f) {
        var ISODate = new Date(f).toISOString();
        var fe = ISODate.substr(0, 10);
        var fa = fe.split("-");
        if (fa[0] != "0001") {
            return fa[2] + "/" + fa[1] + "/" + fa[0];
        } else {
            return "";
        }
        //return fa[2] + "/" + fa[1] + "/" + fa[0];
    }

    ConvertirFechaActual() {
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var f = new Date();

        return f.getDate() + " del mes de " + meses[f.getMonth()] + " de " + f.getFullYear();
    }


    //Recibe  Fecha Formato: DD/MM/AAAA
    //Retorna Fecha Formato: AAAA-MM-DD
    ConvertirFechaUnix(f) {
        console.log(f);
        f = f.split("/");
        return f[2] + "-" + f[1] + "-" + f[0];
    }


    ValidarFormulario(_frm) {

        let respuesta = true;
        $("#" + _frm + " :input").each(function (i) {
            //console.log(_frm);
            var valor = $(this).val();
            var dis = $(this).attr('required');
            var id = $(this).attr('id');
            //console.log("ID: " + id + " VALOR: " + valor ) ;
            if (dis == "required") {
                if (valor == "") {
                    console.log(id);
                    respuesta = false;
                    return respuesta;
                }
            }
        });

        return respuesta;
    }

    MensajeFormulario(_frm,ele) {

        $("#" + _frm + " :input").each(function (i) {
            //console.log(_frm);
            var valor = $(this).val();
            var dis = $(this).attr('required');
            var id = $(this).attr('id');

            if (dis == "required") {
                if (valor == "") {
                    $(this).notify("*");
                    $("#"+ele).notify("Recuerde de ingresar todos los campos requeridos");
                }
            }
        });

    }

    ModalValidar(msj) {
        $("#_contenido").html(msj);
        var botones = '<button type="button" class="btn btn-success btn-md" data-dismiss="modal">Aceptar</button>';
        $("#_botonesmsj").html(botones);
        $("#modMsj").modal("show");
    }

    ModalValidarFamiliar(msj) {
        $("#_contenido").html(msj);
        var botones = '<button type="button" class="btn btn-success btn-md" data-dismiss="modal" onclik="ActivarModalFamiliar()">Aceptar</button>';
        $("#_botonesmsj").html(botones);
        $("#modMsj").modal("show");
    }

    ModalValidarFamiliarLimitado(msj) {

        $("#_contenido").html('');
        var botones = '<button type="button" class="btn btn-success btn-md" data-dismiss="modal" onclik="ContinuarFamiliarValidar()">Aceptar</button>';
        $("#_botonesmsj").html(botones);
        $("#modMsj").modal("show");
    }

    //
    CalcularEdad(fecha) {
        var FechaActual = new Date(Date.now());
        var AnnoA = parseInt(FechaActual.getFullYear());
        var MesA = parseInt(FechaActual.getMonth()) + 1;
        var DiaA = parseInt(FechaActual.getDate());

        var f = fecha.split("/");

        var AnoN = parseInt(f[2]);
        var MesN = parseInt(f[1]);
        var DiaM = parseInt(f[0]);

        var Ano = AnnoA - AnoN;

        var Mes = MesA - MesN;
        var Dia = DiaA - DiaM;
        if (Dia < 0) {
            Dia = 0;
            Mes++;
        }
        if (Mes <= 0) {
            Ano--;
        } else {
            Ano;
        }

        return Ano;
    }


    //Obtener la direccion mac
    ObtenerMAC(MAC) {
        //en construccion
    }

    //Obtener la direccion ip
    ObtenerIP(IP) {
        //en construccion
    }

    //Cargar imagenes desde archivos
    CargarIMG(DIV, URL) {

    }

}
