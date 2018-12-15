import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'up', component: UpComponent },
  { path: '', component: UpComponent },
  { path: 'down', component: DownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UpDownRoutingModule { }
