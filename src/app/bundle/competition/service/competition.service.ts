import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Competition} from '@app/api-platform/interfaces/competition';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {CompetitionSeason} from '@app/api-platform/interfaces/competitionseason';

@Injectable()
export class CompetitionService {
  public activeCompetition: Competition = this.getActiveCompetition();
  public activeSeason: CompetitionSeason = this.getActiveSeason();
  constructor(private http: HttpClient,
              private apiPlatform: ApiPlatformService) {
  }

  getCompetitions(countryId?: any): Observable<Competition[]> {
    const url = this.apiPlatform.getApiPlatformResource('competitions');
    const params = {pagination: 'false'};
    if (countryId) {
      params['country.id'] = countryId;
    }
    return this.http.get<Competition[]>(url, {params})
      .catch(err => this.handleError(err));
  }

  get(id: any): Observable<Competition> {
    const url = this.apiPlatform.getApiPlatformResource('competitions/' + id);
    return this.http.get<Competition>(url)
      .catch(err => this.handleError(err));
  }

  put(competition: Competition): Observable<Competition> {
    const url = this.apiPlatform.getApiPlatformResource('competitions/' + competition.id);
    return this.http.put<Competition>(url, competition)
      .catch(err => this.handleError(err));
  }

  setActiveCompetition(competition: Competition, competitionSeason: CompetitionSeason): void {
    this.activeCompetition = competition;
    this.activeSeason = competitionSeason;
    localStorage.setItem('competition', JSON.stringify(competition));
    localStorage.setItem('season', JSON.stringify(competitionSeason));
  }

  getActiveCompetition(): Competition {
    if (!this.activeCompetition) {
      const strCompetition = localStorage.getItem('competition');
      return JSON.parse(strCompetition);
    }
    return this.activeCompetition;
  }

  getActiveSeason(): CompetitionSeason {
    if (!this.activeSeason) {
      const strSeason = localStorage.getItem('season');
      return JSON.parse(strSeason);
    }
    return this.activeSeason;
  }

  unsetActive(): void {
    delete this.activeCompetition;
    delete this.activeSeason;
    localStorage.removeItem('competition');
    localStorage.removeItem('season');
    console.log(this.activeCompetition);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.of(error.message || error);
  }
}
