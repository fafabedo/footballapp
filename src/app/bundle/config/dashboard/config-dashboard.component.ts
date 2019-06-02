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
  selected: any[] = [];
  config: Config;
  openPanel = false;
  options = {maxLines: 10000, printMargin: false};

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.getConfigs();
  }

  getConfigs() {
    this.configService.getConfigs()
      .subscribe(configs => {
        this.configs = configs;
        this.data = configs;
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.data = this.configs.filter(config => (config.name.toLowerCase().indexOf(val) !== -1
      || config.collection.toLowerCase().indexOf(val) !== -1 || !val));
  }

  onSelect(event) {
    if (this.selected[0] && this.config && this.selected[0].id === this.config.id) {
      this.selected[0] = [];
      this.openPanel = false;
    } else {
      this.config = {
        id: this.selected[0].id,
        name: this.selected[0].name,
        collection: this.selected[0].collection,
        data: this.selected[0].data
      };
      this.openPanel = true;
    }
  }

  get code() {
    // return this.text;
    return JSON.stringify(this.config.data, null, 2);
  }

  set code(v) {
    try {
      this.config.data = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }

  new() {
    this.config = {
      id: '0',
      name: '',
      collection: '',
      data: {}
    };
    this.openPanel = true;
  }

  save() {
    if (this.config.id === '0') {
      this.configService
        .post(this.config)
        .subscribe(config => {
          this.getConfigs();
          this.openPanel = false;
        });
    } else {
      this.configService
        .put(this.config)
        .subscribe(config => {
          this.getConfigs();
          this.openPanel = false;
        });
    }
  }

  delete() {
    this.configService.delete(this.config)
      .subscribe(temp => {
        this.getConfigs();
        this.openPanel = false;
      });
  }

  cancel() {
    this.openPanel = false;
  }
}
