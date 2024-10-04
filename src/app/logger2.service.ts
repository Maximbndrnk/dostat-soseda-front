import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger2Service {
  constructor() {
  }

  public log() {
    console.log('hahs')
  }
}
