

function f_afiliacion_incluir(){

nada = '<div style=clear:both;></div>';

	 $("#title_section").html(nada);

str = '		<section class="content">	'+
'	<div class="row">	'+
'	        <div class="col-md-8" >	'+
'	          <!-- Default box -->	'+
'	          <div class="box ">	'+
'	            <div class="box-header with-border">	'+
'	              <h3 class="box-title">Datos Basicos</h3>	'+
'	              <div class="box-tools pull-right">	'+
'	                <button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Minimizar"><i class="fa fa-minus"></i></button>	'+
'	                <button class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" onclick="principal()" title="Cerrar"><i class="fa fa-times"></i></button>	'+
'	              </div>	'+
'	            </div>	'+
'	            <div class="box-body">	'+
'	              <form class="form-horizontal">	'+
'	                <div class="box-body">	'+
'	                  <div class="form-group">	'+
'	                    <label class="col-md-2">Cédula</label>	'+
'	                    <div class="col-md-2"> 	'+
'	                      <div class="input-group">	'+
'	                        <span class="input-group-btn">	'+
'	                            <button type="button" class="btn btn-success" onclick="consultar()"><i class="fa fa-search"></i></button>	'+
'	                        </span> 	'+
'	                        <input class="form-control" placeholder="Cédula de Identidad" id="id" onblur="consultar()" type="text">                          	'+
'	                      </div>                  	'+
'	                    </div>	'+
'	                  </div> <!-- /Cedula -->	'+
'	                  <div class="form-group">	'+
'	                    <label class="col-md-2">Nombres</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <input placeholder="Nombres" id="txtnombres" class="form-control"  type="text">	'+
'	                    </div> 	'+
'	                    <label class="col-md-2">Apellidos</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <input placeholder="Apellidos" id="txtapellidos" class="form-control"  type="text">	'+
'	                    </div> 	'+
'	                    <label class="col-md-2">Sexo</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <input placeholder="Sexo" id="txtsexo" class="form-control"  type="text">	'+
'	                    </div> 	'+
'	                  </div> <!-- Grupo nombres-->	'+
'	                  <div class="form-group">	'+
'	                    <label class="col-md-2">Componente</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <select id="cmbComponente" class="form-control">	'+
'							<option>Ejercito</option>	'+
'							<option>Armada</option>	'+
'							<option>Aviacion</option>	'+
'							<option>Guardia Nacional</option>	'+
'	 					 </select>	'+
'	                    </div> 	'+
'	                    <label class="col-md-2">Grado</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <select id="cmbGrado" class="form-control">	'+
'							<option>Seleccione...</option>	'+
'	  					  </select>	'+
'	                    </div> 	'+
'	                    <label class="col-md-2">Estatus</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <input placeholder="Estatus" id="estatus" class="form-control"  type="text">	'+
'	                    </div> 	'+
'	                  </div> <!-- /Numero Cuenta -->	'+
'	                  <div class="form-group">	'+
'	                    <label class="col-md-2">Fecha Ingreso</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <input placeholder="Fecha de Ingreso" id="fingreso" class="form-control"   type="text">	'+
'	                    </div> 	'+
'	                    <label class="col-md-2">Tiempo Servicio</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <input placeholder="Tiempo servicio" id="tservicio" class="form-control" value="0,00"  type="text">	'+
'	                    </div> 	'+
'	                    <label class="col-md-2">No. Hijos</label>	'+
'	                    <div class="col-md-2">                      	'+
'	                      <input placeholder="No. Hijos" id="nhijos" class="form-control"  type="text">	'+
'	                    </div> 	'+
'	                  </div> <!-- Datos de Ingreso -->	'+
'	                </div>	'+
'	              </form>	'+
'	            </div><!-- /.box-body -->	'+
'	          </div><!-- /.box -->	'+
'	         </div>	'+
'			<div class="col-md-4">	'+
'	          <!-- Profile Image -->	'+
'	          <div class="box box-primary">	'+
'	            <div class="box-body box-profile">	'+
'	              <img class="profile-user-img img-responsive img-circle" src="../../dist/img/avatar5.png" alt="Foto del Militar">	'+
'	              <h3 class="profile-username text-center">Militar Consultado</h3>	'+
'	              <p class="text-muted text-center">ACT / RCP / RSP</p>	'+
'	              <ul class="list-group list-group-unbordered">	'+
'	                <li class="list-group-item">	'+
'	                  <b>Fecha Graduación</b> <a class="pull-right">05/07/201</a>	'+
'	                </li>	'+
'	                <li class="list-group-item">	'+
'	                  <b>Ultimo Ascenso</b> <a class="pull-right">05/07/2013</a>	'+
'	                </li>	'+
'	                <li class="list-group-item">	'+
'	                  <b>Tiempo de Servicio</b> <a class="pull-right">07 Años 0 Meses </a>	'+
'	                </li>	'+
'	              </ul>	'+
'	            </div>	'+
'	            <!-- /.box-body -->	'+
'	          </div>	'+
'	          <!-- /.box -->	'+
'	        </div>	'+
'	     </div>	'+

//////////FAMILIARES///////

'	<div class="row">	'+
'	        <div class="col-md-8" >	'+
'	          <!-- Default box -->	'+
'	          <div class="box ">	'+
'	            <div class="box-header with-border">	'+
'	              <h3 class="box-title">Datos Basicos del Familiar</h3>	'+
'	              <div class="box-tools pull-right">	'+
'	                <button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Minimizar"><i class="fa fa-minus"></i></button>	'+
'	                <button class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" onclick="principal()" title="Cerrar"><i class="fa fa-times"></i></button>	'+
'	              </div>	'+
'	            </div>	'+
'	            <div class="box-body">	'+
'	              <form class="form-horizontal">	'+
'	                <div class="box-body">	'+

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
	' 	 </div>	'+
'	            <!-- /.box-body -->	'+
'	          </div>	'+
'	          <!-- /.box -->	'+
'	        </div>	'+



///////////////ACCCORDEON/////////////

'	          <div class="box box-solid">	'+
'	            <div class="box-header with-border">	'+
'	              <h3 class="box-title"></h3>	'+
'	            </div>	'+
'	            <!-- /.box-header -->	'+
'	            <div class="box-body">	'+
'	              <div class="box-group" id="accordion">	'+
'	                <!-- we are adding the .panel class so bootstrap.js collapse plugin detects it -->	'+
'	                <div class="panel box box-primary">	'+
'	                  <div class="box-header with-border">	'+
'	                    <h4 class="box-title">	'+
'	                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" class="collapsed">	'+
'	                        Historial Médico	'+
'	                      </a>	'+
'	                    </h4>	'+
'	                  </div>	'+
'	                  <div id="collapseOne" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">	'+
'	                    <div class="box-body">	'+
'	                     HISTORIAL MÉDICO	'+
'	                      	'+
'	                    </div>	'+
'	                  </div>	'+
'	                </div>	'+
'	                <div class="panel box box-danger">	'+
'	                  <div class="box-header with-border">	'+
'	                    <h4 class="box-title">	'+
'	                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="collapsed" aria-expanded="false">	'+
'	                        Historial Militar	'+
'	                      </a>	'+
'	                    </h4>	'+
'	                  </div>	'+
'	                  <div id="collapseTwo" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">	'+
'	                    <div class="box-body">	'+
'	                      HISTORIAL MILITAR'+
'	                      	'+
'	                    </div>	'+
'	                  </div>	'+
'	                </div>	'+

'	            </div>	'+
'	            <!-- /.box-body -->	'+
'	          </div>	'+
'	          <!-- /.box -->	';






'		</section>';

	      $("#js_content").html(str);

	
	
}