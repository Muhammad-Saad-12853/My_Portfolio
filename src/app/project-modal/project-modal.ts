import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: false,
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css'
})
export class ProjectModal {
  project: Project;
  
  constructor(public bsModalRef: BsModalRef) {
    this.project = {} as Project;
  }
}
