import { Injectable } from "@angular/core";
import { Observable, raceWith } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Cubo } from "../models/Cubo";

@Injectable()
export class CubosService {

  constructor(private _http:HttpClient){}

  getCubos(): Observable<any>{
    var request = "api/Cubos";
    var url = environment.url + request;
    return this._http.get(url);
  }

  getMarcas(): Observable<any>{
    var request = "api/Cubos/Marcas";
    var url = environment.url + request;
    return this._http.get(url);
  }

  getMarcaId(marca:string): Observable<any>{
    var request = "/api/cubos/cubosmarca/" + marca;
    var url = environment.url + request;
    return this._http.get(url);

  }

  getComentarios(id:string): Observable<any>{
    var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
    var url = environment.url + request;
    return this._http.get(url);
  }

}
