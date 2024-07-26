import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WorldComponent } from './world/world.component';

export const routes: Routes = [

    { path: '',  
      component: WorldComponent, }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }