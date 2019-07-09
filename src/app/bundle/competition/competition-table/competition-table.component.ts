import {Component, OnInit} from '@angular/core';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {TeamService} from '../../team/service/team.service';
import {Team} from '@app/api-platform/interfaces/team';
import {CompetitionSeasonTable} from '@app/api-platform/interfaces/competitionseasontable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-competition-table',
  templateUrl: 'competition-table.component.html',
  styleUrls: ['competition-table.component.scss']
})
export class CompetitionTableComponent implements OnInit {
  competitionSeasonTables: Array<CompetitionSeasonTable> = [];
  teams: Array<Team> = [];
  sorts = [
    {prop: 'position', dir: 'ASC'}
  ];
  rows: Array<any> = [];
  matchDay = 1;

  constructor(private competitionSeasonService: CompetitionSeasonService,
              private teamService: TeamService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const competitionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.teamService.getTeams()
      .subscribe(teams => {
        this.teams = teams;
        this.competitionSeasonService
          .getCompetitionSeasonTable(competitionId)
          .subscribe(competitionSeasonTables => this.prepareTable(competitionSeasonTables));
      });

  }

  prepareTable(competitionSeasonTables: CompetitionSeasonTable[]): void {
    const lastPosition = competitionSeasonTables.length - 1;
    this.matchDay = competitionSeasonTables[lastPosition].matchDay;
    this.competitionSeasonTables = competitionSeasonTables;
    this.prepareRows();
  }

  selectMatchDay(matchDay: number): void {
    this.matchDay = matchDay;
    this.prepareRows();
  }

  prepareRows(): void {
    this.rows = [];
    const table = this.competitionSeasonTables.find(seasonTable => seasonTable.matchDay === this.matchDay);
    table.competitionSeasonTableItems.forEach(tableItem => {
      const teamUri = tableItem.team.toString();
      const teamParts = teamUri.split('/');
      const teamId = teamParts[3];
      const teamObj = this.teams.find(team => team.id.toString() === teamId.toString());
      this.rows.push({
        position: tableItem.position,
        team: teamObj.name,
        matches: tableItem.matches,
        won: tableItem.matchesWin,
        draws: tableItem.matchesDraw,
        lost: tableItem.matchesLost,
        gf: tableItem.goalsFor,
        ga: tableItem.goalsAgainst,
        gd: (tableItem.goalsFor - tableItem.goalsAgainst),
        points: tableItem.points,
      });
    });
  }
}
