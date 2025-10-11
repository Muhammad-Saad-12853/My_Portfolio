import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from '../services/projects';
import { Project } from '../models/Project';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
   featuredProject={} as Project;
constructor(private titleService:Title,private projectService:Projects) 
{
  this.titleService.setTitle('Muhammad Saad - Home')
}
  ngOnInit(): void {
    this.featuredProject=this.projectService.GetProjectById(0);
  }
}
