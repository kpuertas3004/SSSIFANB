<?php

    // get the HTML
Class MotorGeneralPrint {

	/**Metodo Constructor */
	function MotorGeneralPrint(){
		return $this;
	}

	function preparePrint($nroNocumento){

		ini_set("memory_limit", "1600M");
		ob_start();

		$this->nroNocumento = null;
		$this->nroNocumento = $nroNocumento;

		include(dirname(__FILE__).'/'.$this->nroNocumento);
		$content = ob_get_clean();

		/** convert in PDF */
		require_once(dirname(__FILE__).'/pdf.php');
		try{
			$html2pdf = new HTML2PDF('L', '8X5', 'fr');
			$html2pdf->pdf->SetDisplayMode('fullpage');

			$html2pdf->writeHTML($content, isset($_GET['carnet']));



			//$html2pdf->Output('"'.$numero_carnet.'".pdf','D');
			$html2pdf->Output('carnet.pdf');
			//$html2pdf->Output($output_file, 'F');
			$enlace = $html2pdf->Output('carnet.pdf'); //id a trav�s de GET
			header ("Content-Disposition: attachment; filename='exemple01.pdf'\n\n");
			header ("Content-Type: application/octet-stream");
			header ("Content-Length: ".filesize($enlace));
			readfile($enlace);

		}catch(HTML2PDF_exception $e) {
			echo $e;
			exit;
		}

	}
}

$motorGeneralPrint = new MotorGeneralPrint();
$nroNocumento = "carnet-militar.php";
$motorGeneralPrint->preparePrint($nroNocumento);
