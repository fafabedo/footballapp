import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {TeamService} from '../../team/service/team.service';
import {CompetitionService} from '../service/competition.service';
import {ActivatedRoute} from '@angular/router';
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
      path: ['/competition/1/home']
    },
    {
      title: 'Team',
      active: true
    }
  ];
  team: Team;

  constructor(private competitionSeasonService: CompetitionSeasonService,
              private teamService: TeamService,
              private competitionService: CompetitionService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.competitionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.seasonId = this.competitionService.activeSeason.id;
    this.teamId = this.activatedRoute.snapshot.paramMap.get('team_id');
    this.breadcrumb[0].path = [`/competition/${this.competitionId}/home`];
    this.competitionSeasonService
      .getCompetitionSeasonTeams(this.competitionId, this.seasonId)
      .subscribe(cTeams => this.prepareTeams(cTeams));
  }

  prepareTeams(cTeams: CompetitionSeasonTeam[]) {
    this.team = cTeams.find(cTeam => cTeam.team.id.toString() === this.teamId).team;
    console.log(this.team);
  }
}
