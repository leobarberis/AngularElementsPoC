import { Component, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent {
  constructor() {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input()
  dataSource: PeriodicElement[] = [];
}
