import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { DataComponent } from './components/data/data.component';









@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenidoComponent,
    DirectivasComponent,
    ToolbarComponent,
    FormularioReactivoComponent,
    DataComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
