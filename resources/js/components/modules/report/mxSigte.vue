<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Reporte MX SIGTE</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <div class="content container-fluid">
      <!-- <div class="card">
        <div class="card-header">
        </div>
        <div class="card-body"> -->
          <div class="container-fluid">
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Criterios de Búsqueda</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                          <i class="fas fa-minus"></i>
                    </button>
                </div>
              </div>
              <div class="card-body">
                <form role="form">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-md-3 col-form-label">Inicio</label>
                        <div class="col-md-9">
                           <el-date-picker
                            v-model="fillBsqReport.date_ini"
                            type="date"
                            placeholder="Fecha"
                            value-format="yyyy-MM-dd"
                            format="dd/MM/yyyy">
                          </el-date-picker>
                          <small class="form-text text-muted"> * Considera fecha de toma de exámen</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-md-3 col-form-label">Fin</label>
                        <div class="col-md-9">
                          <el-date-picker
                            v-model="fillBsqReport.date_end"
                            type="date"
                            placeholder="Fecha"
                            value-format="yyyy-MM-dd"
                            format="dd/MM/yyyy">
                          </el-date-picker>
                          <small class="form-text text-muted"> * Considera fecha de toma de exámen</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-md-3 col-form-label">Tipo de datos</label>
                        <div class="col-md-9">
                          <el-select v-model="fillBsqReport.type"
                              placeholder="Seleccione"
                              clearable>
                                <el-option
                                  v-for="item in listType"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                           </el-select>
                        </div>
                      </div>
                    </div>
                    <template v-if="listRolePermissionsByUser.includes('commune.filter')">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-3 col-form-label">Comuna</label>
                            <div class="col-md-9">
                              <el-select v-model="fillBsqReport.commune" filterable
                                  placeholder="Seleccione"
                                  clearable>
                                    <el-option
                                      v-for="item in listCommunes"
                                      :key="item.id"
                                      :label="item.code_deis+' - '+item.name"
                                      :value="item.code_deis">
                                    </el-option>
                              </el-select>
                            </div>
                          </div>
                        </div>
                  </template>
                  </div>

                  <!-- <div class="row">
                    <template v-if="listRolePermissionsByUser.includes('establishment.filter')">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="col-md-4 col-form-label">Establecimiento Origen</label>
                          <div class="col-md-9">
                            <el-select v-model="fillBsqReport.establishmentRequest" filterable
                                placeholder="Seleccione"
                                clearable>
                                  <el-option
                                    v-for="item in listEstablishments"
                                    :key="item.id"
                                    :label="item.new_code_deis+' - '+item.alias"
                                    :value="item.new_code_deis">
                                  </el-option>
                            </el-select>
                          </div>
                        </div>
                      </div>
                    </template>
                    
                    <template v-if="listRolePermissionsByUser.includes('establishmentExam.filter')">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="col-md-7 col-form-label">Establecimiento Toma de Exámen</label>
                          <div class="col-md-9">
                            <el-select v-model="fillBsqReport.establishmentExam" filterable
                                placeholder="Seleccione"
                                clearable>
                                  <el-option
                                    v-for="item in listEstablishments"
                                    :key="item.id"
                                    :label="item.new_code_deis+' - '+item.alias"
                                    :value="item.new_code_deis">
                                  </el-option>
                            </el-select>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div> -->

                  
                </form>
              </div>
              <div class="card-footer">
                <div class="row">
                  <div class="col-md-4 offset-4">
                    <button class="btn btn-flat btn-info btnWidth" @click.prevent="getRespReport">Descargar</button>
                    <button class="btn btn-flat btn-default btnWidth" @click.prevent="limpiarCriteriosBsq">Limpiar</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="card card-default">
              <div class="card-header">
                <h3 class="card-title">
                    <template v-if="listarUsuariosPaginated.length">
                        <el-tooltip class="item" effect="dark" content="Descargar en Excel" placement="bottom-start">
                            <i class="fas fa-file-excel text-success" @click.prevent="exportExcel"></i>
                        </el-tooltip>
                    </template>
                    Bandeja de Resultados</h3>
              </div>
              <div class="card-body table-responsive">
                <template v-if="listarUsuariosPaginated.length">
                 <table id="data-table" class="table table-hover table-sm table-bordered  table-striped table-header-fixed table-valign-middle projects">
                    <tr class="small text-nowrap">
                      <th>S. Salud</th>
                      <th>Cesfam Solicita</th>
                      <th>Profesional Solicita</th>
                      <th>Run</th>
                      <th>Nombre</th>
                      <th>Genero</th>
                      <th>F. Nacimiento</th>
                      <th>Edad</th>
                      <th>Dirección</th>
                      <th>Establecimiento Exámen</th>
                      <th>F. Orden</th>
                      <th>F. Exámen</th>
                      <th>F. Recepción</th>
                      <th>Mamografía</th>
                      <th>Eco Mamografía</th>
                      <th>Médico</th>
                    </tr>
                    <tr  class="small" v-for="(item, index) in listarUsuariosPaginated" :key="index">
                      <td v-text="item.servicio_salud"></td>
                      <td v-text="item.cesfam_name"></td>
                      <td v-text="item.profesional_solicita"></td>
                      <td v-text="item.run+'-'+item.dv"></td>
                      <td v-text="item.name+' '+item.fathers_family+' '+item.mothers_family"></td>
                      <td v-text="item.gender"></td>
                      <td v-text="item.birthday"></td>
                      <td v-text="item.age"></td>
                      <td v-text="item.address"></td>
                      <td v-text="item.establecimiento_realiza_examen"></td>
                      <td v-text="item.date_exam_order"></td>
                      <td v-text="item.date_exam"></td>
                      <td v-text="item.date_exam_reception"></td>
                      <td v-text="item.birards_mamografia"></td>
                      <td v-text="item.birards_ecografia"></td>
                      <td v-text="item.Médico"></td>
                    </tr>
                  </table>
                  <div class="card-footer clearfix">
                    <ul class="pagination pagination-sm pagination-secondary m-0 float-right">
                      <li class="page-item" v-if="pageNumber > 0">
                        <a href="#" class="page-link" @click.prevent="prevPage">Ant</a>
                      </li>
                      <li class="page-item" v-for="(page, index) in pagesList" :key="index"
                        :class="[page == pageNumber ? 'active' : '']">
                        <a href="#" class="page-link" @click.prevent="selectPage(page)">{{ page+1 }}</a>
                      </li>
                      <li class="page-item" v-if="pageNumber < pageCount -1">
                        <a href="#" class="page-link" @click.prevent="nextPage">Sig</a>
                      </li>
                    </ul>
                  </div>
                </template>
                <template v-else>
                  <div class="callout callout-info">
                      <h5>No se encontraron resultados...</h5>
                  </div>
                </template>
              </div>
            </div> -->
          <!-- </div>
        </div> -->
      
    

    <div class="modal fade" :class="{show: modalShow}" :style=" modalShow ? mostrarModal : ocultarModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"> Mensaje</h5>
                    <button class="close" @click="abrirModal"></button>
                </div>
                <div class="modal-body">
                    <div class="callout callout-danger" v-for="(item, index) in mensajeError" :key="index" v-text="item">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" @click="abrirModal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
  

    <div class="card card-secondary">
      <div class="card-header">
        <h3 class="card-title">Cargar parámetro SIGTE_ID en Exámenes</h3> 
        <div class="card-tools">
          <button type="button" data-card-widget="collapse" data-toggle="tooltip" title="Collapse" class="btn btn-tool"><i class="fas fa-minus"></i></button>
        </div>
      </div>
      <div class="card-body">
        <form role="form">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="col-md-4 col-form-label">Seleccionar Archivo</label>
                <div class="col-md-4">
                  <input type="file" class="form-control" @change="setFile"> 
                  <small class="form-text text-muted">* Extensión xlsx</small>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-4 offset-4">
            <button class="btn btn-flat btn-info btnWidth" @click.prevent="storeExcel">Cargar</button> 
            <button class="btn btn-flat btn-default btnWidth" @click.prevent="clearForm">Limpiar</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
    export default {
      data(){
          return {
            fillBsqReport: {
              date_ini: '',
              date_end: '',
              commune: '',
              type: '',
            },
            listRolePermissionsByUser: JSON.parse(localStorage.getItem('listRolePermissionsByUser')),
            listCommunes: [],
            listUsuarios: [],
            listType: [
              {value: 'input', label: 'Datos de entrada'},
              {value: 'output', label: 'Datos de salida'},
            ],
            // examsData: [],
            file: '',
            fullscreenLoading: false,
            modalShow: false,
            mostrarModal: {
              display: 'block',
              background: '#0000006b',
            },
            ocultarModal: {
                display: 'none',
            },
            error: 0,
            mensajeError: [],
          }
      },
      mounted() {
        this.getListCommunes();
      },
      methods: {
        limpiarCriteriosBsq(){
          this.fillBsqReport.date_ini  = '';
          this.fillBsqReport.date_end = '';
          this.fillBsqReport.type  = '';
          this.fillBsqReport.commune  = '';
        },
        abrirModal(){
            this.modalShow = !this.modalShow;
        },
        limpiarBandejaUsuarios(){
          this.listUsuarios = [];
        },
        getListCommunes() {
          var route = '/administracion/communes/getListCommunes'
          axios.get(route).then( response => {
            this.listCommunes = response.data;
          }).catch(error => {
              if(error.response.status == 401){
                this.$router.push({name: 'login'})
                location.reload();
                localStorage.clear();
                this.fullscreenLoading = false;
              }
          })
        },
        getRespReport(){
          //console.log(this.fillBsqReport.selectBIRADS);
          if(this.validForm()) {
                this.modalShow = true;
                return;
          }
          this.fullscreenLoading = true;
          
          var url = '/report/exams/getMXSigte'
          axios.get(url, {
            params: {
              'dateIni' : (!this.fillBsqReport.date_ini) ? '' : this.fillBsqReport.date_ini,
              'dateEnd' : (!this.fillBsqReport.date_end) ? '' : this.fillBsqReport.date_end,
              'type'    : (!this.fillBsqReport.type) ? '' : this.fillBsqReport.type,
              'commune' : (!this.fillBsqReport.commune) ? '' : this.fillBsqReport.commune,
            }
          }).then(response => {
            // console.log(response.data);
            // this.inicializarPaginacion();
            this.listUsuarios = response.data;
            this.fullscreenLoading = false;
            this.exportExcel();
          }).catch(error => {
              console.log(error.response)
          })
        },
        exportExcel: function () {
        let data = XLSX.utils.json_to_sheet(this.listUsuarios)
        const workbook = XLSX.utils.book_new()
        const filename = 'sigte-' + this.fillBsqReport.type + '-data-' + this.fillBsqReport.date_ini.slice(0,-3)
        XLSX.utils.book_append_sheet(workbook, data, filename)
        XLSX.writeFile(workbook, `${filename}.xlsx`)
        },
        nextPage() {
          this.pageNumber++;
        },
        prevPage() {
          this.pageNumber--;
        },
        selectPage(page) {
          this.pageNumber = page;
        },
        inicializarPaginacion() {
          this.pageNumber = 0;
        },
        validForm() {
          this.error = 0;
          this.mensajeError = [];
          if(!this.fillBsqReport.date_ini) {
              this.mensajeError.push("Fecha Inicio es un campo obligatorio")
          }
          if(!this.fillBsqReport.date_end) {
              this.mensajeError.push("Fecha Termino es un campo obligatorio")
          }
          if(!this.fillBsqReport.type) {
              this.mensajeError.push("Tipo de dato es un campo obligatorio")
          }

          if(this.mensajeError.length) {
              this.error = 1;
          }
          return this.error;
        },
        setFile(e){
          this.file = e.target.files;
        },
        clearForm(){
          this.file  = '';
        },
        // Cargar archivo xlxs
        importExcel(callback) {
          // const files = e.target.files;
          // console.log(this.file[0]);
          if (!this.file.length) {
              return ;
          } else if (!/\.(xls|xlsx)$/.test(this.file[0].name.toLowerCase())) {
              return alert("El formato de archivo a cargar es incorrecto, formato xls o xlsx requerido");
          }
          const fileReader = new FileReader();
          fileReader.onload = ev => {
              try {
                let examsData = [];
                const data = ev.target.result;
                // console.log(data);
                const workbook = XLSX.read(data, {
                    type: "binary"
                    , cellDates: true, dateNF: 'yyyy/mm/dd;@'
                });
                const wsname = workbook.SheetNames[0]; // Take the first sheet，wb.SheetNames[0] :Take the name of the first sheet in the sheets
                const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname], {raw: false , defval:''}); // Generate JSON table content，wb.Sheets[Sheet]    Get the data of the first sheet
                
                // save data            
                for (var i = 0; i < ws.length; i++) {
                  examsData.push(ws[i]);
                }

                callback(examsData);

              } catch (e) {
                return alert("Read failure!");
              }
          };
          fileReader.readAsBinaryString(this.file[0]);
        },
        storeExcel() {
          if(this.validFormExcel()) {
            this.modalShow = true;
            return;
          }

          Swal.fire({
            title: '¿Está Seguro de desea cargar el archivo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cargar'
          }).then((result) => {
              if (result.value) {
                this.importExcel(function(exams){
                  if(!exams){
                    throw new Error("Falla en la carga de datos");
                  }

                  let post = {
                    exams: exams,
                  };

                  // AQUI IRA LA CONFIRMACIÓN DEL BOTON Y PETICIÓN DEL SERVIDOR
                  var  url = '/exam/setLoadSigteID'

                  axios.post(url,post).then(response => {
                      // console.log(response.data);
                      Swal.fire({
                        icon: 'success',
                        title: 'Acción Finalizada',
                        showConfirmButton: false,
                        timer: 1500
                      })
                  }).catch(error => {
                      if(error.response.status == 400){
                        Swal.fire(
                            'Oops!',
                            error.response.data.error,
                            'error'
                        )
                      }
                      if(error.response.status == 401){
                        this.$router.push({name: 'login'})
                        location.reload();
                        localStorage.clear();
                        this.fullscreenLoading = false;
                      }
                  })
                });
              }
          })
        },
        validFormExcel() {
          this.error = 0;
          this.mensajeError = [];

          if(!this.file) {
              this.mensajeError.push("Debe ingresar un archivo de carga")
          }
      
          if(this.mensajeError.length) {
              this.error = 1;
          }
          return this.error;
        }
      }
    }
</script>

<style>
    .el-range-editor.el-input__inner{
        width: 100% !important;
    }
    .el-range-editor .el-range-separator{
        width: 10% !important;
    }
</style>