import { Component , OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList: IProject[] = [];
  isLoading: boolean = true;
  constructor(
    private projectService: ProjectsService
  ){}

  ngOnInit(): void {
    this.projectService.getProjects()?.then(
      (list) => {
        this.projectList = list
      }
    ).catch(
      (err) => console.error("hubo un error al obtener los projects", err)
    )
    .finally( () => {
      setTimeout(() => {
        this.isLoading = false
      }, 2000);
      console.info("projects request finished", this.projectList)
    })
  }

}
