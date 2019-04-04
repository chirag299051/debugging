import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { 
    path:'home',
    component:HomeComponent,
  },
      { 
        path: 'home/:data', 
        component: DetailComponent
      }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
