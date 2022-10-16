import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosApiService {

  constructor(
   private http: HttpClient
  ) {}

  //variables compartidas
  apiData:any = [];
  //subject porque cambia, nos suscribimos a él en places-list
  private _apiDataFiltrado = new Subject<[]>();
  public  apiDataFiltradoPrueba: Observable<[]> =  this._apiDataFiltrado.asObservable()

  public  apiDataFiltrado: any[]=[]
 
  url: string = '/api';

  loadApiData(){
    //llamar a la api   
     return this.http.get(this.url, {responseType: 'text'})
  }

  cargarDatos( data:any){
    this.apiData = data
    this.apiDataFiltrado = data
    this._apiDataFiltrado = data
  }

  getData(){ 
    return this.apiData
  }

  filtrarData(){
    //TODO filtrar cosas
    //llamamos a next con el nuevo valor y lo actualiza
    // this.apiDataFiltrado.next([])
  }

}
