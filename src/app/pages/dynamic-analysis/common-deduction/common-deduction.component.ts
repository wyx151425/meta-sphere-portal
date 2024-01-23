import {Component, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-deduction',
  templateUrl: './common-deduction.component.html',
  styleUrls: ['./common-deduction.component.less']
})
export class CommonDeductionComponent implements OnInit {

  chartOption: EChartsOption = {};

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get("/api/portal/deductions/data")
      .subscribe((graph: any) => {
        this.chartOption = {
          tooltip: {},
          legend: [
            {
              data: graph.categories.map(function (a: any) {
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
      }
      });
  }

  // chartOption: EChartsOption = {
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       type: 'cross',
  //       crossStyle: {
  //         color: '#999'
  //       }
  //     }
  //   },
  //   // toolbox: {
  //   //   feature: {
  //   //     dataView: {
  //   //       show: true,
  //   //       readOnly: false,
  //   //       title: 'Datensicht'
  //   //     },
  //   //     magicType: {
  //   //       show: true,
  //   //       type: ['line', 'bar'],
  //   //       title: 'migic type'
  //   //     },
  //   //     restore: {
  //   //       show: true,
  //   //       title: 'Zurücksetzen'
  //   //     },
  //   //     saveAsImage: {
  //   //       show: true,
  //   //       title: 'Speichern'
  //   //     }
  //   //   }
  //   // },
  //   legend: {
  //     data: ['蒸发量', '降水量', '平均温度']
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  //       axisPointer: {
  //         type: 'shadow'
  //       }
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       type: 'value',
  //       name: '水量',
  //       min: 0,
  //       max: 250,
  //       interval: 50,
  //       axisLabel: {
  //         formatter: '{value} ml'
  //       }
  //     },
  //     {
  //       type: 'value',
  //       name: '温度',
  //       min: 0,
  //       max: 25,
  //       interval: 5,
  //       axisLabel: {
  //         formatter: '{value} °C'
  //       }
  //     }
  //   ],
  //   series: [
  //     {
  //       name: '蒸发量',
  //       type: 'bar',
  //       data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
  //     },
  //     {
  //       name: '降水量',
  //       type: 'bar',
  //       data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
  //     },
  //     {
  //       name: '平均温度',
  //       type: 'line',
  //       yAxisIndex: 1,
  //       data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
  //     }
  //   ]
  // }
}
