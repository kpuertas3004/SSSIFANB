<!DOCTYPE html>
<html>
<?php $this->load->view('inc/cabecera.php');?>

<!-- Site wrapper -->
<div class="wrapper">

  <?php $this->load->view('inc/top.php');?>


  <!-- =============================================== -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Administración
        <small>Usuarios.</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Administracion</a></li>
        <li><a href="#">Administrar</a></li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
    <br>
          
          <div class="col-md-3">
            <!-- Profile Image -->
            <div class="box box-primary">
              <div class="box-body box-profile"><br>
                <img class="profile-user-img img-responsive img-circle" src="<?php echo base_url()?>system/img/pace.png" alt="User profile picture">

                <h3 class="profile-username text-center">Administrador</h3>

                <p class="text-muted text-center">Software Prestraciones</p>

                <ul class="list-group list-group-unbordered">
                  <li class="list-group-item">
                    <b>Usuarios</b> <a class="pull-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Última Conexión</b> <a class="pull-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Personal Activo</b> <a class="pull-right">13,287</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block"><b>Acerca de la Aplicación</b></a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->

            <!-- About Me Box -->
            
            
          </div><!-- /.FIN DE TARJETA -->

          <div class="col-md-9">
              <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab_1" data-toggle="tab">Usuarios</a></li>
                  <li><a href="#tab_2" data-toggle="tab">Configuración de Menú</a></li>

                  
                  <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                  <br>


                     <div class="row"> 
                       <div class="col-md-4">
                          <div class="form-group">
                            <label>Listado de Usuarios del sistema</label>
                            <input type="hidden" id="idUser" value=0>
                            <select multiple="" onclick="detallesUsuario();" ondblclick="inactivarUsuario()" id="cmbListadoUsuario" 
                            class="form-control js-example-placeholder-multiple" style= "height: 25em"  >
                             <?php

                                foreach ($usuarios as $k => $v) {
                                  echo '<option value="' . $v->id . '">'. $v->login . '</option>';
                                };
                              ?>
                            </select>
                          </div>
                        </div>

                        <div class="col-md-8">
                            <div class="row">
                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Nombre completo del usuario</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-user"></span></span>
                          <input type="text" class="form-control" id="nombre" placeholder="Nombre completo del usuario" />
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Seudonimo</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-user"></span></span>
                          <input type="text" class="form-control" id="seudonimo" placeholder="Seudonimo" />
                        </div>
                      </div>
                    </div>

                  </div>



                  <div class="row">
                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Teléfono</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-phone"></span></span>
                          <input type="text" class="form-control" id="telefono" placeholder="Teléfono" />
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Correo Electrónico</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-envelope"></span></span>
                          <input type="text" class="form-control" id="correo" placeholder="Correo Electronico" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Clave</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-key"></span></span>
                          <input type="password" class="form-control" id="clave" placeholder="Clave" />
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Repetir Clave</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-key"></span></span>
                          <input type="password" class="form-control" id="rclave" placeholder="Repetir Clave" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Fecha de Última modificación</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-calendar"></span></span>
                          <input type="text" readonly="readonly" class="form-control" id="fecha" placeholder="Fecha última Modificación" />
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-6 col-md-6">
                      <div class="form-group">
                        <label>Estaus</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-check-square-o"></span></span>
                           <select class="form-control" id="estatus" onChange="cargarSubMenu()">
                              <option value="0">Seleccionar...</option>
                              <option value="292">Activo</option>
                              <option value="293">Inactivo</option>
                              
                            </select>

                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-xs-12 col-md-12">
                      <div class="form-group">
                        <label>Observación</label>
                        <div class="input-group">
                          <span class="input-group-addon"><span class="fa fa-book"></span></span>
                          <input type="text" class="form-control" id="observacion" placeholder="Observación" />
                        </div>
                      </div>
                    </div>


                    <div class="col-xs-12 col-md-12">
                      <div class="pull-right">
                        <button type="button" class="btn btn-success" onClick="UpsertUsuario()"><i class="fa fa-plus"></i>&nbsp;Agregar o actualizar</button>                      
                      </div>
                    </div>  

                        </div>


 
                      </div>


                    

                  </div>


                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="tab_2">

                    <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Menú</label>
                        <select multiple="" onclick="cargarPP();" ondblclick="removerMenu()" id="cmbMenu" class="form-control js-example-placeholder-multiple" style= "height: 25em"  >
                         
                        </select>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="row">
                      <div class="col-xs-6 col-md-6">
                        <div class="form-group">
                          <label>Usuarios</label>
                          <div class="input-group">
                            <span class="input-group-addon"><span class="fa fa-user"></span></span>
                              <select class="form-control" id="cmbUsuarios" onChange="cUsers()">
                              <option value="0">Seleccionar...</option>
                              <?php

                                foreach ($usuarios as $k => $v) {
                                  echo '<option value="' . $v->id . '">'. $v->login . ' -> '. $v->nombre . ' '. $v->apellido . '</option>';
                                };
                              ?>
                              </select>

                            </div>
                          </div>
                        </div>

                        <div class="col-xs-6 col-md-6">
                          <div class="form-group">
                            <label>Menú</label>
                            <div class="input-group">
                              <span class="input-group-addon"><span class="fa fa-home"></span></span>
                              <select class="form-control" id="menu" onChange="cargarSubMenu()">
                                  <option value="0">Seleccionar...</option>
                                  
                                </select>
                              </div>
                            </div>
                          </div>

                      </div>
                      

                      <div class="row">
                        
                         <div class="col-xs-6 col-md-6">
                        <div class="form-group">
                          <label>Sub Menú</label>
                          <div class="input-group">
                            <span class="input-group-addon"><span class="fa fa-bars"></span></span>
                            <select class="form-control" id="submenu" onChange="cargarPerfil()">
                              <option value=0>Seleccionar...</option>
                            </select>
                               
                            </div>
                          </div>
                        </div>

                        <div class="col-xs-6 col-md-6">
                          <div class="form-group">
                            <label>Perfil</label>
                            <div class="input-group">
                              <span class="input-group-addon"><span class="fa fa-legal"></span></span>
                                <select class="form-control" id="perfil" onChange="cargarPrivilegios()">
                                  <option value=0>Seleccionar...</option>  
                                  
                                </select>
                                
                              </div>
                            </div>
                          </div>
                          
                          <div class="col-xs-12 col-md-12">
                            <div class="table-responsive mailbox-messages">
                              <table id="reporteUPP" class="table table-hover table-striped">
                                <thead>
                                <tr>
                                    <th >#</th> 
                                    <th>Privilegios</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                

                              </table>
                            </div>
                          </div>

                        <div class="col-xs-12 col-md-12">
                        <br><br>
                          <div class="pull-right">
                            <button type="button" class="btn btn-success" onClick="actualizarPrivilegios()"><i class="fa fa-plus"></i>&nbsp;Actualizar</button>                      
                          </div>
                        </div>

                      </div>

                      

                        
                      
                      
                        
                     

                    </div>
                    </div>
                  </div>
                  <!-- /.tab-pane 
                  <div class="tab-pane" id="tab_3">
                   
                  </div>
                   /.tab-pane -->
                </div>
                <!-- /.tab-content -->
              </div>
              <!-- nav-tabs-custom -->
            </div>
            
          </div>




    </section>
    <!-- /.content -->
    <!-- Main content -->

  </div><!-- /.content-wrapper -->

  <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 2.6.7
    </div>
    <strong>Copyright &copy; 2015-2016 Instituto de Previsión Social.</strong> Todos los derechos.
  </footer>

</div><!-- ./wrapper -->

<?php $this->load->view('inc/pie.php');?>
<script src="<?php echo base_url()?>application/modules/panel/views/js/administrar.js"></script>
</body>
</html>



