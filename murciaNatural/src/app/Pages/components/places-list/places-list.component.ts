import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { DatosApiService } from '../../../services/datos-api.service'; 

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  constructor(
    private apiService: DatosApiService
  ) { 

  }
 

  //datos a renderizar
  listadoLugares:  any[]  = [];
  listadoLugaresPrueba: any[]=[]
  imagenSustituta: string = '../../../../assets/imagenSustituta.png';

  //paginación
  length:number = 0 
  pageSize:number = 5;
  pageIndex:number = 0;
  pageSizeOptions: number[] = [5,10,15]
 
  ngOnInit(): void {  
    //pide los datos a la API
    this.apiService.loadApiData()
        .subscribe( (datos) => { 
          //limpiamos caracteres feos que rompen el json
          let datosLimpios = datos.replace(/[\t\n\r]/g, "");
          //pasamos a JSON
          let parsed = JSON.parse(datosLimpios);
          //los almacenamos en el service
          this.apiService.cargarDatos(parsed);
          this.listadoLugares = this.apiService.apiDataFiltrado;
          this.length = this.listadoLugares.length
          
        })
        this.apiService.apiDataFiltradoPrueba.subscribe((datos) => {
          console.log("datos")
          this.listadoLugaresPrueba = datos
        })
  }
 

  //cambiar paginación
  handlePageEvent(event: PageEvent){
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  loadGallery(item:object):string[]{
    let arrayImagenes:string[] = []
    for(const [key, value] of Object.entries(item)){
      
      if(key.includes('Foto')){
      let valor = value!.toString()
      arrayImagenes.push(valor)
      }
    }
    return arrayImagenes;
  } 
 

}
