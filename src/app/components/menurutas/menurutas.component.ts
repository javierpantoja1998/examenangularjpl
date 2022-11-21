import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { CubosService } from 'src/app/services/CubosService';

@Component({
  selector: 'app-menurutas',
  templateUrl: './menurutas.component.html',
  styleUrls: ['./menurutas.component.css']
})
export class MenurutasComponent implements OnInit {

  public marcas !: Array<string>
  constructor(private _service:CubosService) { }

loadMarcas(){
  this._service.getMarcas().subscribe(res=>{
    this.marcas = res
  });
}

  ngOnInit(): void {
    this.loadMarcas();
  }

}
