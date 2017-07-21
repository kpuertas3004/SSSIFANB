class Utilidad {
  constructor(){

  }
  
  SoloNumero(event){
          if( event.charCode >= 48 && event.charCode <= 57 )
            return event.charCode;
          else
            return false;
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
      return f[2] + "-" + fa[1] + "-" + fa[0];
  }

  //leer todos los campos de mondo textos
  ValidarCamposTexto(DIV){
      //en construccion
  }

  //leer todos los campos por select
  ValidarCamposSelect(DIV){
      //en construccion
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
