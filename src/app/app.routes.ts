import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { DataFormComponent } from './data-form/data-form.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: DataFormComponent },
  { path:'result/:bmi', component: ResultFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})

export class AppRoutingModule { }
