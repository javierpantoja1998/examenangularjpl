import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { CubosService } from 'src/app/services/CubosService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cubos !: Array<Cubo>;

  constructor(
    private _service:CubosService
  ) { }

  loadCubos(){
    this._service.getCubos().subscribe(res=>{
      console.log(res)
      this.cubos = res
    });
  }

  ngOnInit(): void {
    this.loadCubos();
  }

}
