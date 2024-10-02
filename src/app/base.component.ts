import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {

  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject();

  protected completeSubject() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


  ngOnDestroy(): void {
    this.completeSubject();
  }


}
