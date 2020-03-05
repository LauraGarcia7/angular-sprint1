import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DiagramaComponent } from './diagrama/diagrama.component';
import { MatematicasComponent } from './matematicas/matematicas.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { CreatividadComponent } from './creatividad/creatividad.component';
import { SolucionDeProblemasComponent } from './solucion/solucion.component';
import { EspacialComponent } from './espacial/espacial.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DiagramaComponent, MatematicasComponent, ProgramacionComponent, CreatividadComponent, SolucionDeProblemasComponent, EspacialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
