import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CompetitionSeasonMatch} from '@app/api-platform/interfaces/competitionseasonmatch';
import {CompetitionService} from '../service/competition.service';
import {TeamService} from '../../team/service/team.service';
import {Team} from '@app/api-platform/interfaces/team';

@Component({
  selector: 'app-competition-matches',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'competition-matches.component.html',
  styleUrls: ['competition-matches.component.scss']
})
export class CompetitionMatchesComponent implements OnInit {
  competitionSeason: CompetitionSeason;
  competitionSeasonMatches: Array<CompetitionSeasonMatch>;
  matchDays: Array<number> = [];
  teams: Array<Team> = [];
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: ['/competition/3486/home']
    },
    {
      title: 'Matches',
      active: true
    }
  ];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private competitionSeasonService: CompetitionSeasonService,
              private competitionService: CompetitionService,
              private teamService: TeamService) {
  }

  ngOnInit(): void {
    const competitionId = this.activatedRoute.snapshot.paramMap.get('id');
    const seasonId = this.competitionService.activeSeason.id;
    this.breadcrumb[0].path = ['/competition', seasonId, 'home'];
    this.competitionSeasonService
      .get(seasonId)
      .subscribe(season => this.competitionSeason = season);
    this.competitionSeasonService
      .getCompetitionSeasonMatches(competitionId, seasonId)
      .subscribe(competitionSeasonMatches => this.prepareMatches(competitionSeasonMatches));
  }

  prepareMatches(competitionSeasonMatches: CompetitionSeasonMatch[]) {
    competitionSeasonMatches.forEach(match => {
      const found = this.matchDays.findIndex(day => day === match.matchDay)
      if (found === -1) {
        this.matchDays.push(match.matchDay);
      }
    });
    this.competitionSeasonMatches = competitionSeasonMatches;
    console.log(this.competitionSeasonMatches);
  }

  getMatchesByDay(day: number): CompetitionSeasonMatch[] {
    return this.competitionSeasonMatches.filter(match => match.matchDay === day);
  }

  openMatch(match: CompetitionSeasonMatch) {
    console.log(match);
  }
}
