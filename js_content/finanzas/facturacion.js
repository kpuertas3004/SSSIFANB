/*
Desarrollado por  :  Carlos E. Montero C.
Correo            :  Carlosmontero1991@gmail.com
Modifcado    por  :  
Correo persona mod:  
Fecha Creacion    :  26-06-2017  
Fecha Modificacion:  26-06-2017  
Descripcion       :  espliega los formularios del modulos de cuidado Integral de la Salud, deducciones
*/


//Dynamic Menu System
//MNU[count(MNU)] = "Otras Operaciones | Liquidar Credito:f_liquidarCred#Liquidación Masiva:f_liquidacionMasiva#Parcelas de Cementerio:[Incluir*f_parcelasCementerios";



/*
Desarrollado por  :  Carlos E. Montero C.
Correo            :  Carlosmontero1991@gmail.com
Fecha Creacion    :  26-06-2017 
Fecha Modificacion:  26-06-2017   
Proposito       :  Despliegar el formulario de asociados
*/
function f_contabilizarFactura()
{
	var html = "";

     html += html_colum2(20,80,""   ,"<br><br><br>");
     html += html_colum4(10,2,2,20,"Fecha Inicial",form_input_text("bootstrap","txtFechaInicial" ,"txtFechaInicial" ,""," Fecha Inicial"),"Fecha Final",form_input_text("bootstrap","txtFechaFinal" ,"txtFechaFinal" ,"","Fecha Final") );		 
     html += html_colum2(10,10,"","<br><br>");
     input1 = form_input_text  ("bootstrap","" ,"" ,"","","100",false);
     input2 = form_input_text  ("bootstrap","" ,"" ,"","","100",false);
     html  += html_colum4(25,5,5,10,"Cred/Rif Factura:" ,input1 ,input2,"");         
     html  += html_colum2(10,10,"","<br><br>");
     html += html_colum6(25,10,15,1.10,10,10,"",form_boton_guadar("MOSTRAR"),form_boton_guadar("CONTABILIZAR"),form_input_checkbox("bootstrap","chkDatostodos" ,"chkDatostodos" ,"",""),"Seleccionar Todos","");
     html += html_colum2(10,10,"","<br><br>");
     E= new Array("...","Mostrar Todos ","Nro.Factura","Nro.Cuenta Cobrar","Fch.Emisión","Codición","Ced/Rif","Nombre","Usuario");
     input3 = form_input_select("-","-","","",E);
     input4 = form_input_text  ("bootstrap","" ,"" ,"","","100",false);
     input5 = form_input_text  ("bootstrap","" ,"" ,"","","100",false);
      html += html_colum6(20,5,10,10,5,10,"",input3 ,input4,input5,"",""); 

    $("#title_section").html("Contabilizar Factura");
    document.getElementById( "js_content" ).innerHTML = html;


}

function f_generarBoletos()

{
    var html = "";

     html +=html_colum2(20,20,"","<br><br>");

        html += html_colum2(30,20,"Aereolinea",form_input_text("bootstrap","txtAereolinea" ,"txtAereolinea" ,""," Aerolinea")); 
        html += html_colum2(30,20,"Nro. de Boletos",form_input_text("bootstrap","txtnroBoletos" ,"txtnroBoletos" ,""," Nro.Boletos"));             
        html += html_colum4(10,0,0,0,"", form_boton_guadar("Generar Boletos"),"",form_boton_guadar("Limpiar Boletos",""));
        html += html_colum2(20,20,"","<br><br>");
        html += html_colum2(30,20,"Boletos Generados", form_input_textarea ("bootstrap","textAreaBoletosGenerados","textAreaBoletosGenerados","","Boletos Generados"));0
        html += html_colum2(20,20,"","<br><br>");
        html += html_colum2(30,20,"Mensaje", form_input_textarea ("bootstrap","textareaMensaje","textareaMensaje","","Mensaje")); 
    



     $("#title_section").html("Boletos de Ingresos");
     document.getElementById( "js_content" ).innerHTML = html;

}

      function f_descontabilizarFactura(){


        var html ="";

                    html += html_colum2(10,5,"","<br><br>");

                     html += html_colum4(10,2,2,20,"Fecha Inicial",form_input_text("bootstrap","txtFechaInicial" ,"txtFechaInicial" ,""," Fecha Inicial"),"Fecha Final",form_input_text("bootstrap","txtFechaFinal" ,"txtFechaFinal" ,"","Fecha Final") );
                     html += html_colum2(10,5,"","<br><br>");
                     html  += html_colum6(15,5,5,10,10,5,"",form_boton_guadar("MOSTRAR"),"",form_boton_guadar("Comtabilizar"),"Seleccionar Todos",form_input_text("bootstrap","txtSelecTodo" ,"txtSelecTodo" ,"","t"));
                      html += html_colum2(10,5,"","<br><br>");

                           
                       D = new Array("Mostrar Todos","Nro.Pago","Fecha de Pago","Monto","Inst.Financiera","Tipo de Cuenta");
                       input1 = form_input_select("-","-","VE","VE",D);
                       input2 = form_input_text  ("bootstrap","" ,"" ,"","","200",false);
                       html += html_colum4(10,15,20,20,"",input1 ,input2,form_boton_guadar("MOSTRAR"));


                   $("#title_section").html("Boletos de Ingresos");
                   document.getElementById( "js_content" ).innerHTML = html;

}


 function f_Reintegro(){

    var html = inputs = input1 = input2 = css1 = css2 = css3 = "";

                        html += html_colum2(10,5,"","<br><br>");

                    html += html_colum4(10,2,2,20,"Número de Reintegro",form_input_text("bootstrap","txtnumeroReintegro" ,"txtnumeroReintegro" ,""," Número de Reintegro"),"Tipo de Crédito",form_input_text("bootstrap","txttipoCredito" ,"txttipoCredito" ,"","Tipo de Crédito") );
                    html += html_colum2(10,5,"","<br><br>");
 
                    input1 = form_input_text  ("bootstrap","apellido1" ,"apellido1"   ,"","","200" ,false);
                    input2 = form_input_text  ("bootstrap","apellido2" ,"apellido2"   ,"","","200" ,false);
                     
                    html = html + "<table border='0' style='width:100%;'  >";
                    inputs = "<table border='0' ><tr><td style='width:200px;' >"+input1+"</td><td  style='width:100px;' >"+input2+"</td></tr></table>";
                    html = html + "<tr>"; 
                    html = html + "  <td style='"+css1+"' >Apellidos&nbsp;</td>";
                    html = html + "  <td style='"+css2+"' >"+inputs+"</td>";
                    html = html + "  <td style='"+css3+"' ></td>";
                    html = html + "</tr>";  
                    html = html + "<tr><td colspan='3' ><div style='height:5px;' ></div></td></tr>";
                    $("#title_section").html("Boletos de Ingresos");
                   document.getElementById( "js_content" ).innerHTML = html;
    

 html += html_colum4(10,2,2,20,"Fecha Inicial",form_input_text("bootstrap","txtFechaInicial" ,"txtFechaInicial" ,""," Fecha Inicial"),"Fecha Final",form_input_text("bootstrap","txtFechaFinal" ,"txtFechaFinal" ,"","Fecha Final") );

}






