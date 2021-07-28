import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Envio } from 'src/app/interface/envio.interface';
import { EnvioService } from 'src/app/service/envio.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
  
export class EnvioComponent implements OnInit {
  envios: Envio[];
  @ViewChild('desplegable', { read: ElementRef, static: false }) desplegable: ElementRef;
  constructor(
    private envioService: EnvioService,
  ) { }

  ngOnInit(): void {
    this.envios = this.envioService.getAll()
  }


  // onChange() {
  //   this.desplegable.nativeElement.classList.add('masDetalle')
  //   console.log(this.desplegable)
  //   setTimeout(() => {
  //     this.desplegable.nativeElement.classList.remove('masDetalle')
  //   }, 1000);
  // }
}