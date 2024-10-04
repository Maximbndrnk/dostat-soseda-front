import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}

@Component({
  selector: 'inner-item',
  standalone: true,
  template: `
    <button (click)="loadContent()">Load content</button>
  `,
})
export class InnerItem {
  constructor(private viewContainer: ViewContainerRef) {}
  loadContent() {
    this.viewContainer.createComponent(LeafContent);
  }
}

@Component({
  selector: 'leaf-content',
  standalone: true,
  template: `
    This is the leaf content
  `,
})
export class LeafContent {}
@Component({
  imports: [
    InnerItem
  ],
  selector: 'outer-container',
  standalone: true,
  template: `
    <p>This is the start of the outer container</p>
    <inner-item/>
    <p>This is the end of the outer container</p>
  `
})
export class OuterContainer {}
