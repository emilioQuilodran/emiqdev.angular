import { Injectable } from '@angular/core';
import { IProject } from '../models/project.interface';
import { PROJECTS_LIST } from '../mocks/project.mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectList :IProject[] = PROJECTS_LIST
  constructor() { }

  getProjects(): Promise<IProject[]> | undefined {
    // todo cambiar a una llamada a un servicio de verdad
    return Promise.resolve(this.projectList)
  }
}
