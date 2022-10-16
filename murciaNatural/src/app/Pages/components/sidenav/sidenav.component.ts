import { Component, OnInit } from '@angular/core';
import { DatosApiService } from '../../../services/datos-api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  //variables
 
  constructor(
    private apiService: DatosApiService
  ) { }

  ngOnInit(): void {
    //recogemos los datos, timeout para que se ejecute antes el list y se carguen los datos
    setTimeout(() => {
    this.datos = this.apiService.getData();
    this.filtrarDatos() 
    }, 300);
  }


  //para hacer los filtros necesitamos coger los datos del servicio y almacenar los valores filtrándolos
  datos: any[]=[];
  filtroMunicipio: string[] = [];
  filtroEspacio: string[] = [];

  //evita que se seleccione más de uno
  municipioSeleccionado:number = -1;
  tipoSeleccionado:number = -1;

  filtrarDatos(){
    //filtra los datos del servicio

    this.datos.forEach( (set) => {
      if(!this.filtroMunicipio.includes(set.Municipio) 
          && set.Municipio != '' 
          && set.Municipio != undefined){
        this.filtroMunicipio.push(set.Municipio);
      }
      if(!this.filtroEspacio.includes(set.Tipo) 
          && set.Tipo != '' 
          && set.Tipo != undefined){
        this.filtroEspacio.push(set.Tipo)
      }
    }) 
    //ordenar alfabéticamente
    this.filtroMunicipio = this.filtroMunicipio.sort((a,b) => {
      //para que cuente las tildes
      return a.localeCompare(b)
    })
    this.filtroEspacio = this.filtroEspacio.sort( (a,b) => {
      //para que cuente las tildes
      return a.localeCompare(b)
    })
  }

  
  cambiaMunicipio(index:number){
    //cambia el checkbox
    this.municipioSeleccionado = index;
    //TODO llamar al servicio para que filtre
  }

  cambiaTipo(index:number){
    //cambia el checkbox
    this.tipoSeleccionado = index;
    //TODO llamar al servicio para que filtre
  }
}
