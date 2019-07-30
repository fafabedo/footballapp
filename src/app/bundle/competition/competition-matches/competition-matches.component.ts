import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CompetitionSeasonMatch} from '@app/api-platform/interfaces/competitionseasonmatch';
import {CompetitionService} from '../service/competition.service';
import {TeamService} from '../../team/service/team.service';
import {Team} from '@app/api-platform/interfaces/team';
import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';

@Component({
  selector: 'app-competition-matches',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'competition-matches.component.html',
  styleUrls: ['competition-matches.component.scss']
})
export class CompetitionMatchesComponent implements OnInit {
  competitionSeason: CompetitionSeason;
  competitionSeasonMatches: Array<CompetitionSeasonMatch>;
  competitionId: string;
  seasonId: string;
  matchDays: Array<number> = [];
  teams: Array<Team> = [];
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: ['/competition/home']
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
    if (!this.competitionService.activeCompetition || !this.competitionService.activeSeason) {
      this.router.navigate(['home']);
    }
    this.competitionId = this.competitionService.activeCompetition.id;
    this.seasonId = this.competitionService.activeSeason.id;
    this.competitionSeasonService
      .get(this.seasonId)
      .subscribe(season => this.competitionSeason = season);
    this.competitionSeasonService
      .getCompetitionSeasonTeams(this.competitionId, this.seasonId)
      .subscribe(cTeams => this.prepareTeams(cTeams));
    this.competitionSeasonService
      .getCompetitionSeasonMatches(this.competitionId, this.seasonId)
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
    // console.log(this.competitionSeasonMatches);
  }

  prepareTeams(competitionSeasonTeams: CompetitionSeasonTeam[]) {
    competitionSeasonTeams.forEach(cTeam => {
      this.teams.push(cTeam.team);
    });
  }

  getMatchesByDay(day: number): CompetitionSeasonMatch[] {
    return this.competitionSeasonMatches.filter(match => match.matchDay === day);
  }

  getTeam(id): Team {
    return this.teams.find(team => team.id === id);
  }

  openMatch(match: CompetitionSeasonMatch) {
    console.log(match);
  }
}
