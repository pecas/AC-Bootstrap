import { Component, OnInit } from '@angular/core';
import { LiquidacionesService } from '../services/liquidaciones.service';
import { Liquidacion } from '../Model/liquidacion.model';
import { Router, routerparams } from '@angular/router';

@Component({
  selector: 'app-nuevaliquidacion',
  templateUrl: './nuevaliquidacion.component.html',
  styleUrls: ['./nuevaliquidacion.component.css'],
   providers: [LiquidacionesService]
})
export class NuevaliquidacionComponent implements OnInit {
  public Liquidaciones: Liquidacion;
  constructor() { }

  ngOnInit() {
    this.Liquidaciones = new Liquidacion();

  }

}
