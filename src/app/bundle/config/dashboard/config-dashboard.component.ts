import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Config} from '@app/api-platform/interfaces/config';
import {ConfigService} from '../service/config.service';

@Component({
  selector: 'app-config-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'config-dashboard.component.html',
  styleUrls: ['config-dashboard.component.scss']
})
export class ConfigDashboardComponent implements OnInit {
  configs: Array<Config> = [];
  data: Array<Config> = [];
  selected: Config = {id: '0'};
  options = {maxLines: 1000, printMargin: false};
  displayedColumns: string[] = ['name', 'collection'];

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.getConfigs();
  }

  getConfigs() {
    this.configService.getConfigs()
      .subscribe(configs => {
        this.selected = configs[0];
        this.data = configs;
      });
  }

  applyFilter(event) {
    const val = event.toLowerCase();
    this.data = this.configs.filter(config => (config.name.toLowerCase().indexOf(val) !== -1
      || config.collection.toLowerCase().indexOf(val) !== -1 || !val));
  }

  get code() {
    // return this.text;
    return JSON.stringify(this.selected.data, null, 2);
  }

  set code(v) {
    try {
      this.selected.data = JSON.parse(v);
    } catch (e) {
      console.log(e.toString());
      console.log('error occored while you were typing the JSON');
    }
  }

  highlight(row: any) {
    this.selected = row;
  }

  new() {
    this.selected = {
      id: '0',
      name: '',
      collection: '',
      data: {}
    };
  }

  save() {
    if (this.selected.id === '0') {
      this.configService
        .post(this.selected)
        .subscribe(config => {
          this.getConfigs();
        });
    } else {
      this.configService
        .put(this.selected)
        .subscribe(config => {
          this.getConfigs();
        });
    }
  }

  delete() {
    this.configService.delete(this.selected)
      .subscribe(temp => {
        this.getConfigs();
      });
  }

  cancel() {

  }
}
