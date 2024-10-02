import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetNeighborComponent } from './get-neighbor.component';
import { GetNeighborService } from './get-neighbor.service';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {
  reconnectionAttempts: 5,
    reconnectionDelay: 5000
  } };

const routes: Routes = [
  {
    path: '',
    component: GetNeighborComponent,
  },
];

@NgModule({
  declarations: [GetNeighborComponent],
  imports: [
    RouterModule.forChild(routes),
    SocketIoModule.forRoot(config)
  ],
  providers: [GetNeighborService],
  exports: [RouterModule]
})
export class GetNeighborModule {
}
