import {Component, Input, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Competition} from '@app/api-platform/interfaces/competition';
import {MenuItem} from '../../core/menu/menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @Input() public menuItems: Array<MenuItem>;
  @Input() isCollapsed = false;
  public competition: Competition;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.renderMenu();
  }

  renderMenu(): void {

  }

}
