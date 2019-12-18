import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComComponent } from './second-com/second-com.component';


const routes: Routes = [{
path:"second", component: SecondComComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
