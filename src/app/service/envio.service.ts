import { Injectable } from '@angular/core';
import { ENVIO } from '../bbdd/envio.db';
import { Envio } from '../interface/envio.interface';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  arrEnvio: Envio[]
  constructor() { }

  getAll(): Envio[] {
    return ENVIO;
  }
}
