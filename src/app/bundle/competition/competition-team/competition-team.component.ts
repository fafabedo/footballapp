import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {TeamService} from '../../team/service/team.service';
import {CompetitionService} from '../service/competition.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';
import {Team} from '@app/api-platform/interfaces/team';

@Component({
  selector: 'app-competition-team',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'competition-team.component.html',
  styleUrls: ['competition-team.component.scss']
})
export class CompetitionTeamComponent implements OnInit {
  competitionId: string;
  seasonId: string;
  teamId: string;
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: ['/competition/home']
    },
    {
      title: 'Team',
      active: true
    }
  ];
  team: Team;

  constructor(private router: Router,
              private competitionSeasonService: CompetitionSeasonService,
              private teamService: TeamService,
              private competitionService: CompetitionService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.competitionService.activeCompetition || !this.competitionService.activeSeason) {
      this.router.navigate(['home']);
    }
    this.competitionId = this.competitionService.activeCompetition.id;
    this.seasonId = this.competitionService.activeSeason.id;
    this.teamId = this.activatedRoute.snapshot.paramMap.get('team_id');
    this.competitionSeasonService
      .getCompetitionSeasonTeams(this.competitionId, this.seasonId)
      .subscribe(cTeams => this.prepareTeams(cTeams));
  }

  prepareTeams(cTeams: CompetitionSeasonTeam[]) {
    this.team = cTeams.find(cTeam => cTeam.team.id.toString() === this.teamId).team;
    console.log(this.team);
  }
}
