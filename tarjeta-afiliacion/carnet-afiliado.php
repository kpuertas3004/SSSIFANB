<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
date_default_timezone_set('America/Caracas');
//CentOS setsebool -P httpd_can_network_connect 1

$cSession = curl_init();
curl_setopt($cSession,CURLOPT_URL,"http://192.168.6.45:8080/ipsfa/api/militar/crud/".$_GET['id']);
curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
curl_setopt($cSession,CURLOPT_HEADER, false);
$result=curl_exec($cSession);
curl_close($cSession);
$militar = (object)json_decode($result, true);
$Persona = (object)$militar->Persona;



// if(curl_exec($curl) === false)
// {
//     echo 'Curl error: ' . curl_error($curl);
// }
// else
// {
//     echo 'Operación completada sin errores';
// }
?>
<style type="text/css">
<!--
body {margin: 0px;}

.marco-carnet{border:0px #003399 solid;width:8.5cm;height:5.4cm;position:relative;}

/**PARTE DELANTERA */
.css-foto{border:0px #0033CC solid;width:68px; height:90px; position:absolute; left: 236px; top: 51px;}
.fecha-vencimiento{border:0px #0033FF solid; width:79px; height:auto; position:absolute; left: 230px; top: 146px;font-size:7px;text-align:center;font-weight:bold;}
.firma-titular{border:0px #0033FF solid; width:84px; height:auto; position:absolute; left: 234px; top: 157px;font-size:7px;font-weight:bold;}
.firma-titular-ii{border-top:0px #003300 solid;padding-top:2px;text-align:center;}
.labels-dat-person{border:0px #0033FF solid; width:67px; height:auto; position:absolute; left: 5px; top: 128px;font-size:9px;font-weight:bold;}
.labels-dat-person-resl{border:0px #0033FF solid; width:166px; height:auto; position:absolute; left: 70px; top: 128px;font-size:9px;font-weight:bold;}
.letra-8{font-size:8px;}
/**PARTE TRASERA */
.css-huella{border:0px #0033CC solid;width:70px; height:70px; position:absolute; left: 8px; top: 44px;}
.firma-presidente{border:0px #0033FF solid; width:96px; height:auto; position:absolute; left: 223px; top: 85px;font-size:8px;}
.telefono-contacto{border:0px #0033FF solid; width:76px; height:14px; position:absolute; left: 186px; top: 185px;font-size:10px;font-weight:bold;}
.datos-medicos-i{border:0px #0033FF solid; width:63px; height:auto; position:absolute; left: 159px; top: 45px;font-size:10px;font-weight:bold;}
.datos-medicos-ii{border:0px #0033FF solid; width:63px; height:auto; position:absolute; left: 159px; top: 94px;font-size:9px;font-weight:bold;}
-->
</style>

<page>
<div class="marco-carnet">

	<div class="css-foto">
	<img src="http://192.168.12.161/imagenes/<?php echo $Persona->DatoBasico['cedula']; ?>.jpg" style="width:68px; height:90px;"/>	</div>
	<div class="fecha-vencimiento">
		VENCE 05/07/2025
	</div>
	<div class="firma-titular">

		<img src="assets/firma/firma8271.png" style="height:24px;width:70px; text-align:center;" />

	<p><div class="firma-titular-ii">FIRMA DEL TITULAR</div></p>
  </div>
	<div class="labels-dat-person">
		<label>APELLIDOS</label>
		<br />
		<label>NOMBRES</label>
		<br />
		<label>F. DE. NAC.</label>
		<br />
		<label>CEDULA</label>
		<br />
		<label class="letra-8">PARENTESCO</label>
		<br />
		<label class="letra-8">AFILIADO</label>
		<br />
		<label>&nbsp;</label>

  </div>
    <div class="labels-dat-person-resl">
      <label>Apellidos Familiar</label>
      <br />
      <label>Nombres Familiar</label>
      <br />
      <label>16/11/2000</label>
      <br />
      <label>1564654</label>
      <br />
      <label class="letra-8">MADRE</label>
      <br />
      <label class="letra-8">Nombre Completo Afiliado C.I 987654321</label>

  </div>
</div>
</page>

<page>
<div class="marco-carnet">

	<div class="css-huella">
	<img src="assets/huella/huella.bmp" style="height:70px;width:70px;" />
	<?php //echo '<img src="data:image/jpg;base64,'.$bytesCodificados.'" style="height:77px;width:55px;" />'; ?>
	</div>
	<div class="datos-medicos-i">
      <label>54156154</label>
      <br />
      <label>A+</label>
      <br />
      <label>NINGUNA</label>
	</div>
    <div class="firma-presidente">
      	<img src="assets/firma/firma8271.png" style="height:40px;width:96px;" />
	</div>

    <div class="datos-medicos-ii">
      <label>NO</label>
      <br />
      <label>848944746454</label>
    </div>

	 <div class="telefono-contacto">
      <label>041213525154</label>
    </div>
</div>
</page>
