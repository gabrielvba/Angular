import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { SeilaComponent } from './seila/seila.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'new', component: NewComponent },
  {path: 'seila', component: SeilaComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
