import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LiquidacionesService {

  constructor( private _Http: Http) { }

  fetchData() {
    return this._Http.get('http://localhost/webapimvc/clientes')
                .map(res => res.json());
  }
}
