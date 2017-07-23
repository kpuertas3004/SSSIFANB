class Utilidad {
  constructor(){

  }

  SoloNumero(event){
    if( event.charCode >= 48 && event.charCode <= 57 ){
      return event.charCode;
    }else{
      return false;
    }
  }

  //Recibe  Fecha Formato: AAAA-MM-DD 00:00:00
  //Retorna Fecha Formato: DD/MM/AAAA
  ConvertirFechaHumana(f){
      fe = f.substr(0,10);
      fa = fe.split("-");
      return fa[2] + "/" + fa[1] + "/" + fa[0];
  }


  //Recibe  Fecha Formato: DD/MM/AAAA
  //Retorna Fecha Formato: AAAA-MM-DD
  ConvertirFechaUnix(f){
      f = f.split("/");
      return f[2] + "-" + f[1] + "-" + f[0];
  }


  //Valida todos los elementos de un formulario, requiere de jquery.
  //Recibe el id del formulario
  //Debe ser invocada al finalizar un formulario deesta forma Objecto.ValidarFormulario("id_formulario")
  //Utiliza el imput tipo submit para realizar activar validacion
  ValidarFormulario(idForm){
      var frm = document.querySelector("form#"+idForm);
      frm.addEventListener('submit',this.frm, false);

  }

  //Metodo que utiliza ValidarFormulario recibir respuesta de validacion completa
  frm(event) {

      event.preventDefault();
      var militar = new Militar();
      switch (Frm) {
        case "S":

          militar.Salvar();
          ActivarFormulario(true);
          $("#_cargando").hide();
          break;
        case "A":
          //militar.Actualizar();

          // $("#_btnModificar").show();
          // $("#_btnActualizar").hide();
        default:

      }

      return false;
  }




  //Obtener la direccion mac
  ObtenerMAC(MAC){
      //en construccion
  }

  //Obtener la direccion ip
  ObtenerIP(IP){
      //en construccion
  }

  //Cargar imagenes desde archivos
  CargarIMG(DIV, URL){

  }

}
