import { Component } from '@angular/core';

@Component({
  selector: 'app-powerbi-component',
  templateUrl: './powerbi.component.html'
})
export class PowerBIComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
