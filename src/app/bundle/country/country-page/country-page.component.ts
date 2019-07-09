import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../service/country.service';
import {Country} from '@app/api-platform/interfaces/country';
import {TeamService} from '../../team/service/team.service';
import {Team} from '@app/api-platform/interfaces/team';
import {Competition} from '@app/api-platform/interfaces/competition';
import {CompetitionService} from '../../competition/service/competition.service';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';

@Component({
  selector: 'app-country-page',
  templateUrl: 'country-page.component.html',
  styleUrls: ['country-page.component.scss']
})
export class CountryPageComponent implements OnInit {
  countryId: number;
  country: Country;
  teams: Array<Team> = [];
  competitions: Array<Competition> = [];
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Countries',
      url: '/countries'
    }
  ];
  lat = 41.87194;
  lng = 12.56738;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private countryService: CountryService,
              private teamService: TeamService,
              private competitionService: CompetitionService) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.countryId = this.route.snapshot.params.id;
      this.countryService.getCountry(this.countryId)
        .subscribe(country => this.prepareCountryPage(country));
    }
  }

  prepareCountryPage(country: Country) {
    this.breadcrumb.push({title: country.name, active: true});
    this.country = country;
    this.teamService.getTeams(country.id, 2)
      .subscribe(teams => this.teams = teams);
    this.competitionService.getCompetitions(country.id)
      .subscribe(competitions => this.prepareCompetitions(competitions));
  }

  prepareCompetitions(competitions: Competition[]) {
    this.competitions = competitions.filter(competition => competition.leagueLevel < 3);
  }

  navigateCompetition(competition: Competition) {
    const url = '/competition/' + competition.id + '/home';
    this.router.navigate([url]);
  }

  featuring(event: any, competition: Competition) {
    console.log(event.checked);
    console.log(competition);
    competition.isFeatured = event.checked;
    this.competitionService.put(competition)
      .subscribe(competition => {
        this.competitionService.getCompetitions(this.country.id)
        .subscribe(competitions => this.prepareCompetitions(competitions));
      });
  }
}
