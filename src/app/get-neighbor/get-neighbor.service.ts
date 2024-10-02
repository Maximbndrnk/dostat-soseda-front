import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetNeighborService {

  public NEW_EVENT = 'newMessage';
  public ON_MESSAGE = 'onMessage';

  constructor(
    private socket: Socket
  ) { }

  sendMessage(msg: string) {
    this.socket.emit(this.NEW_EVENT, msg);
  }

  getMessage() {
    return this.socket.fromEvent(this.NEW_EVENT)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }
}
