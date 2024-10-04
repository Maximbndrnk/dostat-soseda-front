import { Component, Inject, OnInit } from '@angular/core';
import { GetNeighborService } from './get-neighbor.service';
import { LoggerService } from '../logger.service';
import { API_URL } from './get-neighbor.module';

@Component({
  selector: 'app-get-neighbor',
  standalone: false,
  templateUrl: './get-neighbor.component.html',
  styleUrl: './get-neighbor.component.scss'
})
export class GetNeighborComponent implements OnInit {

  constructor(
    private gnService: GetNeighborService,
    private logger: LoggerService,
    @Inject(API_URL) public apiUrl: string
  ) {
  }

  ngOnInit(): void {
    this.initSubscriptions();
    this.logger.log();
    console.log(this);
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
