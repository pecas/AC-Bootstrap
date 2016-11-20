import { Component, OnInit } from '@angular/core';
import { LiquidacionesService } from '../services/liquidaciones.service';
import { Liquidacion } from '../Model/liquidacion.model';

@Component({
  selector: 'app-liquidaciones',
  templateUrl: './liquidaciones.component.html',
  styleUrls: ['./liquidaciones.component.css'],
  providers: [LiquidacionesService]
})
export class LiquidacionesComponent implements OnInit {

  public Liquidaciones: Liquidacion;

  constructor(private _LiquidacionesService: LiquidacionesService) { }

  getLiquidaciones() {
    this._LiquidacionesService.fetchData()
      .subscribe(
      (data) => this.Liquidaciones = data
      );
  }
  
  ngOnInit() {
    this.getLiquidaciones();
  }

}
