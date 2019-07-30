import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CompetitionSeasonService} from '../service/competition-season.service';
import {TeamService} from '../../team/service/team.service';
import {Team} from '@app/api-platform/interfaces/team';
import {CompetitionSeasonTable} from '@app/api-platform/interfaces/competitionseasontable';
import {ActivatedRoute, Router} from '@angular/router';
import {CompetitionService} from '../service/competition.service';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';

@Component({
  selector: 'app-competition-table',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'competition-table.component.html',
  styleUrls: ['competition-table.component.scss']
})
export class CompetitionTableComponent implements OnInit {
  competitionSeasonTables: Array<CompetitionSeasonTable> = [];
  competitionId: string;
  seasonId: string;
  teams: Array<Team> = [];
  sorts = [
    {prop: 'position', dir: 'ASC'}
  ];
  displayedColumns: string[] = ['position', 'team', 'matches', 'won', 'draws', 'lost', 'gf', 'ga', 'gd', 'points'];
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: ['/competition/home']
    },
    {
      title: 'Table',
      active: true
    }
  ];
  rows: Array<any> = [];
  matchDay = 1;

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
    this.teamService.getTeams()
      .subscribe(teams => {
        this.teams = teams;
        this.competitionSeasonService
          .getCompetitionSeasonTable(this.competitionId, this.seasonId)
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
        won: tableItem.matchesWon,
        draws: tableItem.matchesDrawn,
        lost: tableItem.matchesLost,
        gf: tableItem.goalsFor,
        ga: tableItem.goalsAgainst,
        gd: (tableItem.goalsFor - tableItem.goalsAgainst),
        points: tableItem.points,
      });
    });
  }
}
