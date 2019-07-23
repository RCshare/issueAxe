import { Component } from '@angular/core';
import { data } from './data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart renderAs="canvas" [pannable]="{ lock: 'y' }" [zoomable]="{ mousewheel: { lock: 'y' }, selection: { lock: 'y' } }"
        [categoryAxis]="categoryAxis">
        <kendo-chart-series>
          <kendo-chart-series-item [data]="data" type="bar" field="value" categoryField="category">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>

    `
})
export class AppComponent {
    public data: any[] = data;
/*
    public categoryAxis: any = {
        max: new Date(2000, 1, 0),
        maxDivisions: 10
    };
    */
    public categoryAxis:any = { max: "2000-01-30T23:00:00.000Z", maxDivisions: 15 }
}
