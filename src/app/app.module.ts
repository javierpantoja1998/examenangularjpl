import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenurutasComponent } from './components/menurutas/menurutas.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from 'src/app/app.routing';
import {HttpClientModule} from '@angular/common/http';
import { CubosService } from './services/CubosService';
import { MarcasComponent } from './components/marcas/marcas.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenurutasComponent,
    HomeComponent,
    MarcasComponent,
    DetallescuboComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [appRoutingProviders,CubosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
