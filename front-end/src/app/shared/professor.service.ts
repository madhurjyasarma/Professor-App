import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  formProfessorData: Professor = new Professor();

  professors: Professor[];
  constructor(private httpClient: HttpClient) {}

  getAllProfessors() {
    this.httpClient
      .get(environment.apiUrl + '/api/professor')
      .toPromise()
      .then(
        (res) => {
          console.log(res);
          this.professors = res as Professor[];
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
