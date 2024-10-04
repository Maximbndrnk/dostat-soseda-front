import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {
  }

  public log() {
    console.log('hihi')
  }
}
