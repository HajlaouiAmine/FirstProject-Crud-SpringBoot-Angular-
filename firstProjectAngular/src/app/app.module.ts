import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriqueClientComponent } from './historique-client/historique-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditHistoriqueClientComponent } from './edit/edit-historique-client/edit-historique-client.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ListComponent } from './list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoriqueClientComponent,
    EditHistoriqueClientComponent,
    MenuComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
