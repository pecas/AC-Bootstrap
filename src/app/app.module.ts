import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { LiquidacionesComponent } from './liquidaciones/liquidaciones.component';
import { RouterModule }   from '@angular/router';
import { TarifasComponent } from './tarifas/tarifas.component';
import { LiquidacionesService } from './services/liquidaciones.service';
import { NuevaliquidacionComponent } from './nuevaliquidacion/nuevaliquidacion.component';
import { EditarliquidacionComponent } from './editarliquidacion/editarliquidacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LiquidacionesComponent,
    TarifasComponent,
    NuevaliquidacionComponent,
    EditarliquidacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
    path: '',
    component: LiquidacionesComponent
    },
    {
    path: 'liquidaciones',
    component: LiquidacionesComponent
    },
   {
    path: 'tarifas',
    component: TarifasComponent
  },
  {
    path: 'nuevaliquidacion',
    component: NuevaliquidacionComponent
    },
    {
      path: 'editarliquidacion/:ClienteId',
      component: EditarliquidacionComponent
    }
])
  ],
  providers: [LiquidacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
