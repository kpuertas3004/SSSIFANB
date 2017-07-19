//Direccion API Menu
url_api_menu  = "js/es6/esquema.menu.json";

//Variable General para el trabajo XmlHttpObject
var http_api_menu = getXmlHttpObject_API_menu();


//Llama el archivo .html para desplegar en el menu
function LlamarMenu(file)
{
      var xhttp = new XMLHttpRequest();
      alert(file+'.html')
      xhttp.open('GET', file+'.html');
      xhttp.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200)
          {
             $('#_cuerpo').html(xhttp.responseText);
          }
      };
      xhttp.send();
}


//Funcion asincrona para construir el menu
function results_api_activar_menu()
{
	if ( http_api_menu.readyState == 4 && http_api_menu.status == 200 )
	{
		resultsText = http_api_menu.responseText;	
		JsonObjArr = JSON.parse(resultsText);
		
		if( resultsText=="" )
			alert("NO SE PUDO LEER EL API QUE CONTIENE EL MENU")
		else
		{
			JsonObjArr  = JSON.parse(resultsText);
			var Menu    = JsonObjArr.perfil.menu;
			var menuStr = "<li class='header'>Menu</li>";

			for( var i=0; i<count(Menu) ; i++ )
			{
				/*
				{
						"url" : "inc/datos",
						"icono" : "fa fa-search",
						"nombre" : "Datos"
				}*/
				menuStr = menuStr + "<li ><a href='#' onclick='LlamarMenu(\""+Menu[i].url+"\")' ><i class='"+Menu[i].icono+"'></i><span>"+Menu[i].nombre+"</span></a></li> ";

				//<li ><a href="#"   onclick="CallMenu()" ><i class='fa fa-gears'></i>       <span>Gestionar Usuario</span></a></li>
				alert( Menu[i].url +" "+ Menu[i].icono +" "+Menu[i].nombre )
			}			
			$('#_menu').html(menuStr);
		}
	}
}


function MenuActivar()
{
	http_api_menu.open("GET", url_api_menu, true);
	http_api_menu.onreadystatechange = results_api_activar_menu;
	http_api_menu.send(null);	
}



/************** Funciones Generales para metodo GET **************/
function getXmlHttpObject_API_menu()
{
	var xmlhttp; 
	/*@cc_on 
	@if (@_jscript_version >= 5) 
	try
	{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); 
	}
	catch (e)
	{ 
		try
		{ 
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); 
		} 
		catch (e)
		{ 
			xmlhttp = false; 
		} 
	} 
	@else 
		xmlhttp = false; 
	@end @*/ 
			
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined')
	{ 
		try
		{ 
			xmlhttp = new XMLHttpRequest(); 
		} 
		catch (e)
		{ 
			xmlhttp = false; 
		} 
	} 
			return xmlhttp; 
} 
