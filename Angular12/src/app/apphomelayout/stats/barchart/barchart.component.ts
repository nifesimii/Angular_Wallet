import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
import { interval } from 'rxjs';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  areaChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [               
        {
          ticks: {
            display: false
          },           
          gridLines: {
            drawBorder: false,
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          
          ticks: {
            fontColor: '#999999',
          }
        }
      ]
    }
  };
  areaChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  areaChartType: ChartType = 'bar';
  areaChartLegend = false;
  areaChartPlugins: any = [];
  areaChartColors: Colors[] = [
    { // yellow
      backgroundColor: '#FF345E',
      borderWidth: 0,
    }, {
      backgroundColor: '#00DFA3',
      borderWidth: 0,
    }
  ];
  areaChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, -46, 13, 45, 37], label: 'Quarterly Result', barThickness: 10, },
    { data: [-15, 30, 50, 80, -36, -5, 70, 65], label: 'Quarterly Result', barThickness: 10, }
  ];


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomize();
    }, 2000);

  }

  randomize(): void {
    // Only Change 3 values
    this.areaChartData[0].data = [
      Math.round(Math.random() * 100),
      (Math.random() * 10),
      (Math.random() * -40),
      (Math.random() * 50),
      Math.round(Math.random() * 100),
      (Math.random() * -30),
      (Math.random() * 50)
    ];
  }

}
