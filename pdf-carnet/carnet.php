<?php
//////////////// IDIOMA CARNET MILITAR /////////////////////
$vence_nombre = "VENCE";
$cedula_nombre = "C.I";
$aquien = "A QUIEN SE RECOMIENDA LE SEAN GUARDADAS";
$serecomienta = "LAS CONSIDERACIONES DEBIDAS A SU GRADO";
$serial_nombre = "SERIAL";
$codigo_nombre = "CODIGO";
$historia_clinica_nombre = "HISTORIA CLINICA";
$cabello_nombre = "CABELLOS";
$grupo_sanguineo_nombre = "GRUPO SANGUINEO";
$estatura_nombre = "ESTATURA";
$ojos_nombre = "OJOS";
$color_piel_nombre = "COLOR";
$ministerio = "MINISTERIO DEL PODER POPULAR PARA LA DEFENSA";
$autorizado = "AUTORIZADO PARA PORTAR ARMAS DE FUEGO ASIGNADAS POR LA FANB";
?>
<?php
$nombres = 'CARLOS ENRIQUE';
$apellido1 = 'PEÑA';
$apellido2 = 'ALBARRAN';
$cedula = 125475124;
$vence = '05/07/2025';
$serial = '133545646454564';
$categoria = 'EFECTIVO';
$componente = 'GNB';
$codigo = 525488768;
$historia_clinica = 2646456465;
$color_cabello = 'NEGRO';
$tipo_sangre = 'A+';
$estatura = 1.80;
$color_ojos = 'NEGROS';
$color_piel = 'MORENA';
$image = 'SIN IMAGEN';
$huella = 'SIN HUELLA';
$firma = 'SIN FIRMA';
$grado = 'MAYOR';
$grado_imagen = 'mayor';
?>

<style>
@charset "utf-8";
/* CSS Document */
<!--
body {margin: 0px;}

.marco-carnet{border:0px #003399 solid;width:8.5cm;height:5.4cm;position:relative;}

/**PARTE DELANTERA */
.css-foto{
	border: 0px #0033CC solid;
	width: 68px;
	height: 90px;
	position: absolute;
	left: 231px;
	top: 69px;
}
.css-insignia{
	border: 0px #0033CC solid;
	width: 70px;
	height: 60px;
	position: absolute;
	left: 95px;
	top: 65px;
}
.componente{border:0px #0033FF solid; width:250px; height:14px; position:absolute; left: 50px; top: 44px; font-size:10px;font-weight:bold; font-color:# EFEFEF; text-align:center;}
.fecha-vencimiento{
	border: 0px #0033FF solid;
	width: 70px;
	height: 8px;
	position: absolute;
	left: 233px;
	top: 161px;
	font-size: 7px;
	text-align: center;
	font-weight: bold;
	-webkit-transform: rotate(-0deg);
	-moz-transform: rotate(-0deg);
}
.firma-titular{border:0px #0033FF solid; width:84px; height:auto; position:absolute; left: 234px; top: 157px;font-size:7px;font-weight:bold;}
.firma-titular-ii{border-top:0px #003300 solid;padding-top:2px;text-align:center;}
.labels-dat-person{border:0px #0033FF solid; width:67px; height:auto; position:absolute; left: 5px; top: 128px;font-size:8px;font-weight:bold;}
.labels-dat-person-resl{
	border: 0px #0033FF solid;
	width: 150px;
	height: auto;
	position: absolute;
	left: 75px;
	top: 120px;
	font-size: 11px;
	font-weight: bold;
	font-color: #000;
	text-align: center
}
.letra-8{font-size:12px;}
.nota-pie-i-anverso{border:0px #0033FF solid; width:180px; height:8px; position:absolute; left: 140px; top: 177px; font-size:7px;text-align:left;font-style:normal;}
.nota-pie-ii-anverso{border:0px #0033FF solid; width:180px; height:8px; position:absolute; left: 140px; top: 187px; font-size:7px;text-align:left;font-style:normal;}

/**PARTE TRASERA */
.css-huella{border:0px #0033CC solid;width:70px; height:70px; position:absolute; left: 8px; top: 44px;}
.firma-presidente{border:0px #0033FF solid; width:96px; height:auto; position:absolute; left: 110px; top: 120px}
.firma-ministro{
	border: 0px #0033FF solid;
	width: 96px;
	height: auto;
	position: absolute;
	left: 127px;
	top: 130px
}
.telefono-contacto{border:0px #0033FF solid; width:76px; height:14px; position:absolute; left: 186px; top: 185px;font-size:10px;font-weight:bold;}
.datos-medicos-i{border:0px #0033FF solid; width:150px; height:auto; position:absolute; left: 170px; top: 45px;font-size:10px;font-weight:bold;}
.datos-medicos-ii{border:2px #0033FF solid; width:63px; height:auto; position:absolute; left: 500px; top: 94px;font-size:9px;font-weight:bold;font-color:#000;}
.serial-numero{border:0px #0033FF solid; width:70px; height:14px; position:absolute; left: 11px; top: 15px;font-size:9px;text-align:center; font-weight:bold;}
.serial{border:0px #0033FF solid; width:70px; height:14px; position:absolute; left: 11px; top: 25px;font-size:10px; text-align:center}
.categoria{
	border: 0px #0033FF solid;
	width: 76px;
	height: 14px;
	position: absolute;
	left: 128px;
	top: 15px;
	font-size: 16px;
	font-weight: bold;
}
.estatus {border:0px #0033FF solid; width:60px; height:60px; top:60px; left:95px; position:absolute;font-size:40px;font-weight:bold;}
.siglas-componente{border:0px #0033FF solid; width:30px; height:14px; position:absolute; left: 258px; top: 17px; font-size:18px;font-weight:bold;}
.labels-dat-medicos{
	border: 0px #0033FF solid;
	width: 200px;
	height: auto;
	position: absolute;
	left: 123px;
	top: 48px;
	font-size: 8px;
}
.labels-dat-medicos-resl{
	border: 0px #0033FF solid;
	width: 60px;
	height: auto;
	position: absolute;
	left: 216px;
	top: 48px;
	font-size: 8px;
}
.nota-pie-i-reverso{border:0px #0033FF solid; width:297px; height:12px;  left:14px; position:absolute; top: 173px;font-weight:bold; font-size:9px; text-align:center}
.nota-pie-ii-reverso{border:0px #0033FF solid; width:300px; height:14px; left:12px; position:absolute; top: 182px; font-weight:bold; font-size:8px; text-align:center;}
-->
</style>

        <page>
  <div class="marco-carnet">

    <div class="css-foto">
      <img src="images/ndisponible.jpg" style="width:73px; height:91px;"/>
    </div>
    <!---imagen del grado -->
    <div class="css-insignia">
      <img src="images/grados/cnel.png" style="width:102px; height:50px;"/>
    </div>
    <!---imagen del grado -->
    <div class="fecha-vencimiento">
      <?php echo $vence_nombre.' '.$vence;?>
    </div>

    <div class="labels-dat-person-resl">
      <label class="letra-8"><?php echo $grado ?></label>
      <br />
      <label><?php echo $nombres; ?></label>
      <br />
      <label><?php echo $apellido1." ".$apellido2; ?></label>
      <br />
      <label><?php echo $cedula_nombre.' ' . $cedula;  ?></label>
      <br />
    </div>



    <div class="nota-pie-i-anverso"><?php echo $aquien; ?></div>
    <div class="nota-pie-ii-anverso"><?php echo $serecomienta; ?></div>

  </div>
        </page>
<page>
<div class="marco-carnet">

   	  <div class="serial-numero">
      <?php echo $serial; ?>
      </div>

      <div class="serial">
      <?php echo $serial_nombre; ?>
      </div>

	<div class="css-huella">
	<img src="images/ndisponible.jpg" style="height:70px;width:70px;" />
	</div>
    <div class="categoria">
    <?php echo $categoria; ?>
    </div>

     <!--div class="estatus"-->
    <?php //echo "A"; ?>
    <!--/div-->

    <div class="siglas-componente">
    <?php echo $componente ?>
    </div>

    <div class="labels-dat-medicos">
        <label><?php echo $codigo_nombre; ?></label>
        <br />
        <label><?php echo $historia_clinica_nombre; ?></label>
        <br />
        <label><?php echo $cabello_nombre; ?></label>
        <br />
        <label><?php echo $grupo_sanguineo_nombre; ?></label>
        <br />
        <label><?php echo $estatura_nombre; ?></label>
        <br />
        <label><?php echo $ojos_nombre; ?></label>
        <br />
        <label><?php echo $color_piel_nombre; ?></label>
        <br />
    </div>

    <div class="labels-dat-medicos-resl">
      <label><?php echo $codigo; ?></label>
         <br />
         <label><?php echo $historia_clinica; ?></label>
         <br />
         <label><?php echo $color_cabello; ?></label>
         <br />
         <label><?php echo $tipo_sangre; ?></label>
         <br />
         <label><?php echo $estatura; ?></label>
         <br />
         <label><?php echo $color_ojos; ?></label>
         <br />
         <label><?php echo $color_piel; ?></label>
         <br />
    </div>

       	<div class="firma-ministro">
		<img src="<?php echo $base_url ?>images/firma.png" style="height:24px;width:70px; text-align:center;" />
  		</div>

   		<div class="nota-pie-i-reverso">
        <?php echo $ministerio; ?>
        </div>

        <div class="nota-pie-ii-reverso">
        <?php echo $autorizado; ?>
		</div>

</div>
</page>
