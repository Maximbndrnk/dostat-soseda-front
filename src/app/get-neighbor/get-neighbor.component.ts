import { Component, OnInit } from '@angular/core';
import { GetNeighborService } from './get-neighbor.service';

@Component({
  selector: 'app-get-neighbor',
  standalone: false,
  templateUrl: './get-neighbor.component.html',
  styleUrl: './get-neighbor.component.scss'
})
export class GetNeighborComponent implements OnInit {

  constructor(
    private gnService: GetNeighborService,
  ) {
  }

  ngOnInit(): void {
    this.initSubscriptions();
  }

  private initSubscriptions() {
    this.gnService.getMessage().subscribe(data=>{
      console.log('DATA', data);
    })
    this.gnService.onMessage().subscribe(data=>{
      console.log('onMessage', data);
    })
  }

  public sendGoodVibes():void {
    this.gnService.sendMessage('watafak');
  }
}
