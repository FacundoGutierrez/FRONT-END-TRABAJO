import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './components/body/body.component';



const routes: Routes = [
  
  {path : 'body', component : BodyComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'body'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
