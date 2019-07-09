import {Component, OnInit} from '@angular/core';
import {Team} from '@app/api-platform/interfaces/team';
import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {TeamService} from '../../team/service/team.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CompetitionService} from '../service/competition.service';

@Component({
    selector: 'app-competition-home',
    templateUrl: 'competition-home.component.html',
    styleUrls: ['competition-home.component.scss']
})
export class CompetitionHomeComponent implements OnInit {
  competitionSeasonTeams: Array<CompetitionSeasonTeam> = [];
  teams: Array<Team> = [];
    constructor(private competitionSeasonService: CompetitionSeasonService,
                private teamService: TeamService,
                private competitionService: CompetitionService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
      const segment = this.activatedRoute.snapshot.url[0].path;
      if (segment === 'close') {
        this.competitionService.unsetActive();
        this.router.navigate(['home']);
      }
      const competitionId = this.activatedRoute.snapshot.paramMap.get('id');
      this.teamService.getTeams()
        .subscribe(teams => {
          this.teams = teams;
          this.competitionSeasonService
            .getCompetitionSeasonTeams(competitionId)
            .subscribe(competitionSeasonTeams => this.prepareTeams(competitionSeasonTeams));
        });
    }

    prepareTeams(competitionSeasonTeams: CompetitionSeasonTeam[]) {
      this.competitionSeasonTeams = competitionSeasonTeams;
    }
}
