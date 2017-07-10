function f_afiliacion()
{
	boton = '<div div class="col-sm-1">'+
			'<a href="javascript:f_afiliacion_incluir()" class="btn btn-primary pull-center" ><i class="fa save"></i>&nbsp;&nbsp;Incluir</a>'+
			'<div style=clear:both;></div>';

	 $("#title_section").html(boton);


	str = '<section class="content">'+
			'<div class="box">'+
				'<div class="box-header with-border">'+
			           '<div class="box-tools pull-right">'+
			            '<button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="" data-original-title="Collapse">'+
			              '<i class="fa fa-minus"></i></button>'+
			            '<button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove">'+
			              '<i class="fa fa-times"></i></button>'+
			          	'</div>'+
			        '</div>'+
			        '<div class="box-body">'+
			          '<div class="box-info">'+
		  		            '<form class="form-horizontal">'+
				              '<div class="box-body">'+
				                '<div class="form-group">'+
								 	'<label for="inputEmail3" class="col-sm-4 control-label">Ingrese parametro de busqueda</label>'+
									'<div class="col-sm-4"><input class="form-control" id="txtBuscar" placeholder="Buscar" type="text"> </div>'+
									'<button type="submit" class="btn btn-default btn-smr">Buscar</button>'+
								'</div>	'+
							  '</div>	'+
									
							  
							'</form>	'+
				        '</div>'+
				    '</div>'+
			        '<div class="box-footer">'+

//////RESULTADOS DE BÚSQUEDA//////
'	              <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">'+
					'<div class="row"><div class="col-sm-12">'+
						'<table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">'+
							'<thead>'+
								'<tr role="row">'+
								'<th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 193.033px;" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Grado</th>'+
								'<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 245.117px;" aria-label="Browser: activate to sort column ascending">Componente</th>'+
								'<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 208.817px;" aria-label="Platform(s): activate to sort column ascending">Nombres</th>'+
								'<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 166.2px;" aria-label="Engine version: activate to sort column ascending">Apellidos</th>'+
								'<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" style="width: 119.833px;" aria-label="CSS grade: activate to sort column ascending">Cédula</th></tr>	'+
							'</thead>	'+
							'<tbody>	'+
								'<tr role="row" class="odd">	'+
									'<td class="sorting_1">Gecko</td>	'+
									'<td class="sorting_1">Geasasd</td>	'+
									'<td class="sorting_1">adad</td>	'+
									'<td class="sorting_1">algo</td>	'+
									'<td class="sorting_1">despues</td>	'+
								'</tr>'+
							'</tbody>	'+
						'</table>'+
					'</div>'+
				'</div>'+
				'<div class="row">'+
					'<div class="col-sm-5">'+
						'<div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Total de registros: 57 entries</div>'+
					'</div>'+
					'<div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">'+
						'<ul class="pagination">'+
							'<li class="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0">Previous</a></li>'+
							'<li class="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a></li>'+
							'<li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0">2</a></li>'+
							'<li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0">3</a></li>'+
							'<li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="4" tabindex="0">4</a></li>'+
							'<li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="5" tabindex="0">5</a></li>'+
							'<li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="6" tabindex="0">6</a></li>'+
							'<li class="paginate_button next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0">Next</a></li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
				'</div>'+
				'</div>	'+
'<!--Fin de pie Contenedor-->'+
			'</div>'+
			'</div>'+
		  '</section>';

	      $("#js_content").html(str);

}