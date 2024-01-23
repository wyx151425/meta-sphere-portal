import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-deduction',
  templateUrl: './common-deduction.component.html',
  styleUrls: ['./common-deduction.component.less']
})
export class CommonDeductionComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    let chartDom = document.getElementById('main')!;
    let myChart = echarts.init(chartDom, null, {
      renderer: 'svg'
    });

    myChart.showLoading();
    this.httpClient.get('https://echarts.apache.org/examples/data/asset/data/les-miserables.json').subscribe(
      (graph: any) => {
        myChart.hideLoading();

        let option = {
          tooltip: {},
          legend: [
            {
              data: graph.categories.map(function (a: { name: string }) {
                return a.name;
              })
            }
          ],
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'none',
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                show: true,
                position: 'right',
                formatter: '{b}'
              },
              labelLayout: {
                hideOverlap: true
              },
              scaleLimit: {
                min: 0.4,
                max: 2
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              }
            }
          ]
        };

        myChart.setOption(option);
      });
  }
}
