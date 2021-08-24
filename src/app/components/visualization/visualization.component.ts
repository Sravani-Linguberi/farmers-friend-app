import { Component, OnInit } from '@angular/core';
import { InfoService } from '../market-price/info.service';
import { Chart, registerables } from 'node_modules/chart.js';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
  config: any;
  title = "Market-Price-Info";
  data: any;
  records: any[] = [];
  totalRecords: any;
  page: number = 1;
  filterData: any[] = [];
  minPrices: Number[] = [];
  maxPrices: Number[] = [];
  districtNames: String[] = [];
  myChart = new Chart("myChart", {
    type: 'line',
    data: {
      labels: [1, 2, 3],
      datasets: [{
        label: '# of Votes',
        data: [3, 4, 2],
        backgroundColor: "red",
        borderColor: "green",
        borderWidth: 1
      }]
    },
  })



  constructor(private InfoService: InfoService) {
    this.getDataFromAPI();
    Chart.register(...registerables);

  }

  public getDataFromAPI() {
    this.InfoService.getData("state").subscribe(
      (res) => {

        this.data = res;
        this.records = this.data[0].records;
        this.totalRecords = res.length;
        this.filterData = this.records.filter(el => el.state == "Gujarat")
        this.sortData();
      },
      (err: any) => {
        console.log(err);
      }

    )
  }


  sortData() {

    var query = "Gujarat";
    var value = document.getElementById("sortBy") as HTMLSelectElement ;
    var query = "Gujarat"
    query = value.value ;
    //var value = "bihar";
    console.log(query)

    this.filterData = this.records.filter(el => el.state == query)
    console.log("filter Data ", this.filterData);

    this.minPrices = this.filterData.map(d => {
      return parseInt(d.min_price)
    })
    console.log("minPrice ", this.minPrices)

    this.maxPrices = this.filterData.map(d => {
      return parseInt(d.max_price)
    })
    console.log("maxPrices ", this.maxPrices)

    this.districtNames = this.filterData.map(data => data.district);
    console.log("district", this.districtNames);

    this.myChart.destroy();
    this.graph(this.districtNames, this.minPrices, this.maxPrices)

  }

  graph(x: any, y1: any, y2: any) {
    this.myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: x,
        datasets: [{
          label: '# of min prices',
          data: y1,
          backgroundColor: "red",
          borderColor: "lightred",
          borderWidth: 1
        }, {
          label: '# of min prices',
          data: y2,
          backgroundColor: "darkgreen",
          borderColor: "green",
          borderWidth: 1
        }
        ]
      },
    });
  }



  // constructor() { }

  ngOnInit(): void {
  }

}
