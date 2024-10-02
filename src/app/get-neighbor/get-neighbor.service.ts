import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, takeUntil } from 'rxjs';
import { BaseComponent } from '../base.component';

@Injectable({
  providedIn: 'root'
})
export class GetNeighborService extends BaseComponent{

  public NEW_EVENT = 'newMessage';
  public ON_MESSAGE = 'onMessage';

  constructor(
    private socket: Socket
  ) {
    super();
  }

  sendMessage(message: string) {
    this.socket.emit(this.NEW_EVENT, { message });
  }

  getMessage() {
    return this.socket.fromEvent(this.NEW_EVENT)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        takeUntil(this.destroyed$)
      );
  }

  onMessage() {
    return this.socket.fromEvent(this.ON_MESSAGE)
      .pipe(
        map(data => {
          return data;
        }),
        takeUntil(this.destroyed$)
      );
  }
}
