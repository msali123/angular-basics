import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComComponent } from './second-com/second-com.component';
import { ThirdComponentComponent } from './third-component/third-component.component';


const routes: Routes = [{
path:"second", component: SecondComComponent,
children: [
 { path:"third",component:ThirdComponentComponent}
]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
