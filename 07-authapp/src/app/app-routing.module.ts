import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PreciosComponent} from "./components/precios/precios.component";
import {ProtegidaComponent} from "./components/protegida/protegida.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AuthGuard} from "./services/auth.guard";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'precios', component: PreciosComponent},
  { path: 'protegida', component: ProtegidaComponent, canActivate: [ AuthGuard ]},
  { path: 'profile', component: ProfileComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
