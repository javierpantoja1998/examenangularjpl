import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { CubosService } from 'src/app/services/CubosService';
import { Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  public marca !: Array<Cubo>;
  constructor(
    private _service:CubosService,
    private _activeRoute:ActivatedRoute
  ) { }

  loadMarca(){
    this._activeRoute.params.subscribe((params:Params)=>{
      var marca = params['marca'];
      this._service.getMarcaId(marca).subscribe(res=>{
        this.marca = res
      });
    });
  }

  ngOnInit(): void {
    this.loadMarca();
  }


}
