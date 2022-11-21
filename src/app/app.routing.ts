import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { MarcasComponent } from "./components/marcas/marcas.component";
import { DetallescuboComponent } from "./components/detallescubo/detallescubo.component";
const appRoutes: Routes = [

  {path:"", component:HomeComponent},
  {path:"marca/:marca", component:MarcasComponent},
  {path:"detalles/:id", component:DetallescuboComponent}

]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
