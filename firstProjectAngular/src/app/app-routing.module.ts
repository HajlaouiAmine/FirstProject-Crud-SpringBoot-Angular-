import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueClientComponent } from './historique-client/historique-client.component';
import { EditHistoriqueClientComponent } from './edit/edit-historique-client/edit-historique-client.component';

const routes: Routes = [{ path: 'edit/:id', component: EditHistoriqueClientComponent },

{path:'list',component: HistoriqueClientComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
