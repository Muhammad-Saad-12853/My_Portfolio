import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { tag } from '../models/tags';
import { Projects } from '../services/projects';
import { flatMap } from 'rxjs';
import { TestRequest } from '@angular/common/http/testing';
@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit{
projects={} as Project[]

isCollapsed : boolean = true;
typescript :boolean=false;
angular :boolean=false;
react:boolean=false;
javascript:boolean=false;
html:boolean=false;
css:boolean=false;
sql:boolean=false;
java:boolean=false;
cplusplus:boolean=false;
filtering:boolean=false;
constructor(private titleService:Title, private projectService:Projects)
{
  this.titleService.setTitle('Muhammad Saad - Portfolio')
}
  ngOnInit(): void {
    this.projects=this.projectService.GetProjects();
  }
  Filter(){
    let filterTags:tag[]=[];
    if(this.typescript)
    {
      filterTags.push(tag.TYPESCRIPT)
    }
    if(this.angular)
    {
      filterTags.push(tag.ANGULAR)
    }
     if(this.react)
    {
      filterTags.push(tag.REACT)
    }
     if(this.javascript)
    {
      filterTags.push(tag.JAVASCIPT)
    }
     if(this.html)
    {
      filterTags.push(tag.HTML)
    }
     if(this.css)
    {
      filterTags.push(tag.CSS)
    }
     if(this.sql)
    {
      filterTags.push(tag.SQL)
    }
     if(this.java)
    {
      filterTags.push(tag.JAVA)
    }
     if(this.cplusplus)
    {
      filterTags.push(tag.CPLUSPLUS)
    }
    if(this.html || this.css || this.javascript || this.react || this.angular || this.typescript || this.java || this.sql || this.cplusplus)
    {
      this.filtering=true
    }
    else{
      this.filtering=false
    }
      this.projects=this.projectService.GetProjectsByFilter(filterTags)

  }
  ResetFilters(){
    this.angular=false;
    this.cplusplus=false;
    this.css=false;
    this.html=false;
    this.java=false;
    this.javascript=false;
    this.sql=false;
    this.react=false;
    this.typescript=false;
    this.filtering=false;
    this.projects=this.projectService.GetProjects();
  }
}
