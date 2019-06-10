import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../bundle/user/service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  currentLang = 'es';
  toggleClass = 'ft-maximize';
  searchString = '';
  @Input() opened = true;
  @Output() toggleDrawer = new EventEmitter();

  constructor(public translate: TranslateService,
              private userService: UserService,
              private router: Router) {
    // const browserLang: string = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'es');
  }

  toggle(event) {
    this.opened = !this.opened;
    this.toggleDrawer.emit(this.opened);
  }

  ChangeLanguage(language: string) {
    this.translate.use(language);
  }

  ToggleClass() {
    if (this.toggleClass === 'ft-maximize') {
      this.toggleClass = 'ft-minimize';
    } else {
      this.toggleClass = 'ft-maximize';
    }
  }

  getPicture(): string {
    if (this.userService.session) {
      if (this.userService.session.user) {
        return this.userService.session.user.user_picture;
      }
    }
    return '';
  }

  getNickname() {
    if (this.userService.session) {
      if (this.userService.session.user) {
        return this.userService.session.user.field_nickname;
      }
    }
    return '';
  }

  logout() {
    this.router.navigate(['logout']);
  }
}
