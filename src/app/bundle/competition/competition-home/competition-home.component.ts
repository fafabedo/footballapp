import {Component, OnInit} from '@angular/core';
import {Team} from '@app/api-platform/interfaces/team';
import {CompetitionSeasonTeam} from '@app/api-platform/interfaces/competitionseasonteam';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {TeamService} from '../../team/service/team.service';

@Component({
    selector: 'app-competition-home',
    templateUrl: 'competition-home.component.html',
    styleUrls: ['competition-home.component.scss']
})
export class CompetitionHomeComponent implements OnInit {
  competitionSeasonTeams: Array<CompetitionSeasonTeam> = [];
  teams: Array<Team> = [];
    constructor(private competitionSeasonService: CompetitionSeasonService,
                private teamService: TeamService) {}

    ngOnInit() {
      this.teamService.getTeams(102)
        .subscribe(teams => {
          this.teams = teams;
          this.competitionSeasonService
            .getCompetitionSeasonTeams(785)
            .subscribe(competitionSeasonTeams => this.prepareTeams(competitionSeasonTeams));
        });
    }

    prepareTeams(competitionSeasonTeams: CompetitionSeasonTeam[]) {
      this.competitionSeasonTeams = competitionSeasonTeams;
    }
}
