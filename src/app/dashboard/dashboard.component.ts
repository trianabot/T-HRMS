import { Component, OnInit } from '@angular/core';
// import { Highcharts } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ddchart : any;
  chartoptions : any;
  asgChartOptions : any;
  asgChart : any;
  Deductions = false;
  Gross = true;
  rdNet:any;
  rdDeduction:any;
  rdEarning:any;
  constructor() { }

  ngOnInit() {
   this.onLoadChart();
  }

  onLoadChart(){
    Highcharts.chart('container',  {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'area',
        backgroundColor : null,
        height : 255
      },
      xAxis: {
                allowDecimals: false,
                labels: {
                    // formatter: function () {
                    //     return this.value; // clean, unformatted number for year
                    // }
                },
                accessibility: {
                    rangeDescription: 'Range: 1940 to 2017.'
                }
            },
      yAxis: {
        title: {
                      text: 'Nuclear weapon states'
                  },
        
                  labels: {
                                formatter: function () {
                                    return this.value / 1000 + 'k';
                                }
                            }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      title: {
        text: null
      },
      plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        data: [
        100,90,80,70,30,20,10,90
        ],
        type: undefined
      },{
    
      name: 'usa',
      data: [
       50,20,70,40,10,60,20,80,10
      ],
      type: undefined
    },{
    
      name: 'kanada',
      data: [
        10,90,80,50,30,20,10,90
      ],
      type: undefined
    }
  ]
    });
  }
 
  ToggleSpinnerBlock(value){
    if(value=="rdNet"){
      this.rdDeduction='';
      this.rdEarning='';
      Highcharts.chart('container',  {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'area',
          backgroundColor : null,
          height : 255
        },
        xAxis: {
                  allowDecimals: false,
                  labels: {
                      // formatter: function () {
                      //     return this.value; // clean, unformatted number for year
                      // }
                  },
                  accessibility: {
                      rangeDescription: 'Range: 1940 to 2017.'
                  }
              },
        yAxis: {
          title: {
                        text: 'Nuclear weapon states'
                    },
          
                    labels: {
                                  formatter: function () {
                                      return this.value / 1000 + 'k';
                                  }
                              }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {
          text: null
        },
        plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Brands',
          data: [
          100,90,80,70,30,20,10,90
          ],
          type: undefined
        },{
      
        name: 'usa',
        data: [
         50,20,70,40,10,60,20,80,10
        ],
        type: undefined
      },{
      
        name: 'kanada',
        data: [
          10,90,80,50,30,20,10,90
        ],
        type: undefined
      }
    ]
      });
    }
    else if(value=="rdDeduction"){
      this.rdNet='';
      this.rdEarning='';
      Highcharts.chart('container',  {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'area',
          backgroundColor : null,
          height : 255
        },
        xAxis: {
                  allowDecimals: false,
                  labels: {
                      // formatter: function () {
                      //     return this.value; // clean, unformatted number for year
                      // }
                  },
                  accessibility: {
                      rangeDescription: 'Range: 1940 to 2017.'
                  }
              },
        yAxis: {
          title: {
                        text: 'Nuclear weapon states'
                    },
          
                    labels: {
                                  formatter: function () {
                                      return this.value / 1000 + 'k';
                                  }
                              }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {
          text: null
        },
        plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Brands',
          data: [
          100,90,80,70,30,20,10,90
          ],
          type: undefined
        },{
      
        name: 'usa',
        data: [
         50,20,70,40,10,60,20,80,10
        ],
        type: undefined
      },{
      
        name: 'kanada',
        data: [
          10,90,80,50,30,20,10,90
        ],
        type: undefined
      }
    ]
      });
    }
    else if(value=="rdEarning"){
      this.rdNet='';
      this.rdDeduction='';
      Highcharts.chart('container',  {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'area',
          backgroundColor : null,
          height : 255
        },
        xAxis: {
                  allowDecimals: false,
                  labels: {
                      // formatter: function () {
                      //     return this.value; // clean, unformatted number for year
                      // }
                  },
                  accessibility: {
                      rangeDescription: 'Range: 1940 to 2017.'
                  }
              },
        yAxis: {
          title: {
                        text: 'Nuclear weapon states'
                    },
          
                    labels: {
                                  formatter: function () {
                                      return this.value / 1000 + 'k';
                                  }
                              }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {
          text: null
        },
        plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Brands',
          data: [
           10,20,30,40,50,60,70,80,90
          ],
          type: undefined
        },{
      
        name: 'usa',
        data: [
         50,20,70,40,10,60,20,80,10
        ],
        type: undefined
      },{
      
        name: 'kanada',
        data: [
        8,12,55,12,66,54,98,22,99,87,10
        ],
        type: undefined
      }
      ]
      });
    }
  }

}
