//Direccion API Menu
/*
url_api_menu  = "js/es6/esquema.menu.json";

//Variable General para el trabajo XmlHttpObject
var http_api_menu = getXmlHttpObject_API_menu();
*/


//Funcion asincrona para construir el menu
function CrearMenu(JSON)
{	
			JsonObjArr  = JSON;
			var menuStr = "<li class='header'>Menu</li>";
			for( var i=0; i<count(Menu) ; i++ )
				menuStr = menuStr + "<li ><a href='#' onclick='CargarUrl(\"_cuerpo\",\""+Menu[i].url+"\")' ><i class='"+Menu[i].icono+"'></i><span>"+Menu[i].nombre+"</span></a></li> ";
			
			$('#_menu').html(menuStr);
}


function MenuActivar()
{
	/*http_api_menu.open("GET", url_api_menu, true);
	http_api_menu.onreadystatechange = results_api_activar_menu;
	http_api_menu.send(null);	
	*/
	CargarAPI(sURL, CrearMenu());
}



