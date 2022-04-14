import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-smallchartwallet',
  templateUrl: './smallchartwallet.component.html',
  styleUrls: ['./smallchartwallet.component.scss']
})
export class SmallchartwalletComponent implements OnInit {
  areaChartOptions: ChartOptions = {   
    responsive: true,
    scales: {
      yAxes: [
        {
          display: false,
        }
      ],
      xAxes: [
        {
          display: false,
        }
      ]
    }
  };
  areaChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
  areaChartType: ChartType = 'line';
  areaChartLegend = false;
  areaChartPlugins = [];
  areaChartColors: Colors[] = [
    { // yellow
      backgroundColor: 'rgba(0, 223, 163, 0.2)',
      borderColor: '#00dfa3',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#00dfa3',
      pointHoverBackgroundColor: '#00dfa3',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1,
    },
  ];
  areaChartData: ChartDataSets[] = [
    { data: [55, 35, 45, 26, 60], label: 'Quarterly Result',radius: 1, }
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
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 100),
      (Math.random() * 30),
      (Math.random() * 50)
    ];
  }

}
