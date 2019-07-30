import {Component, OnInit} from '@angular/core';
import {Team} from '@app/api-platform/interfaces/team';
import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {TeamService} from '../../team/service/team.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CompetitionService} from '../service/competition.service';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';

@Component({
  selector: 'app-competition-home',
  templateUrl: 'competition-home.component.html',
  styleUrls: ['competition-home.component.scss']
})
export class CompetitionHomeComponent implements OnInit {
  competitionId: string;
  seasonId: string;
  competitionSeasonTeams: Array<CompetitionSeasonTeam> = [];
  competitionSeasons: Array<CompetitionSeason> = [];
  teams: Array<Team> = [];
  cTeams: Array<CompetitionSeasonTeam> = [];
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      active: true
    }
  ];

  constructor(private competitionSeasonService: CompetitionSeasonService,
              private teamService: TeamService,
              private competitionService: CompetitionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const segment = this.activatedRoute.snapshot.url[0].path;
    if (segment === 'close') {
      this.competitionService.unsetActive();
      delete this.competitionService.activeSeason;
      this.router.navigate(['home']);
    }
    this.seasonId = this.activatedRoute.snapshot.paramMap.get('id');
    this.competitionId = this.competitionService.activeCompetition.id;
    this.competitionSeasonService
      .getCompetitionSeasons(this.competitionId)
      .subscribe(seasons => this.competitionSeasons = seasons);
    this.competitionSeasonService
      .getCompetitionSeasonTeams(this.competitionId, this.seasonId)
      .subscribe(cTeams => this.prepareTeams(cTeams));
  }

  prepareTeams(competitionSeasonTeams: CompetitionSeasonTeam[]) {
    this.competitionSeasonTeams = competitionSeasonTeams;
    this.competitionSeasonTeams.forEach(cTeams => {
      this.teams.push(cTeams.team);
    });
  }


  getTeam(teamId: string): Team {
    return this.teams.find(team => team.id === teamId);
  }
}
