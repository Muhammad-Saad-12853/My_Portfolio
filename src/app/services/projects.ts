import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { tag } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class Projects {
    projects : Project[]=[
    {id:0, name:"Moc Pulse",summary:"An AI based Moc Interview Platform",description:"Moc Pulse is an AI-powered web and mobile application designed for realistic mock interview simulations.It generates personalized interview questions instantly and records both audio and video responses.The platform analyzes voice tone, facial expressions, and body language using AI and machine learning.This helps users identify areas of improvement in real-time.",projectLink:'',tags:[tag.ANGULAR,tag.TYPESCRIPT],pictures:[]},
    {id:1,name:"TalkShawk",summary:"Social Media Platform", description:"ChatGPT said:TalkShawk is a user-friendly social media web application focused on simplicity and privacy.It allows users to share photos, updates, and thoughts with ease, just like platforms such as Facebook or Instagram.Unlike crowded and complex networks, TalkShawk offers a more personal, streamlined experience.Features include liking, commenting, sharing, and customized privacy settings.Users can connect with friends, discover new interests, and control who sees their content.TalkShawk is designed to feel like home—a social hub that puts the user first.",projectLink:'',tags:[tag.REACT,tag.TYPESCRIPT],pictures:[]},
    {id:2,name:"BMI Calculator",summary:"Body Mass Index Calculator", description:"The BMI App is a mobile application designed to calculate and monitor a user's Body Mass Index (BMI) using their height and weight inputs. It categorizes BMI into health classifications like underweight, normal, and overweight, providing brief health recommendations. Users can save their BMI history and visualize trends over time through graphs. The app features a user-friendly interface with real-time BMI results and a clear history display. Data is stored locally for persistence across sessions. Additionally, it supports API integrations for personalized health tips and multi-device data synchronization.",projectLink:'',tags:[tag.JAVA],pictures:[]},
    {id:3,name:"Flakes",summary:"Movies Platform", description:"Flakes is an online movie streaming platform that uses machine learning algorithms to provide personalized movie recommendations. It offers a diverse collection of films across various genres and cultures, ensuring a tailored cinematic experience. The platform features a user-friendly interface for easy navigation and engaging content discovery. Flakes highlights top movies, trending sagas, and popular actors based on user preferences and data trends. It aims to enhance user engagement through intelligent suggestions and visual-rich presentations. The project celebrates storytelling by delivering customized entertainment to its audience.",projectLink:'',tags:[tag.REACT,tag.TYPESCRIPT],pictures:[]},
    {id:4,name:"Hopsital DataBase",summary:"Hospital Record Keeping System", description:"This Hospital Management System is a software solution designed to automate and simplify the daily operations of hospitals. The system manages core hospital functions including patient registration, appointment scheduling, medical record keeping, and billing processes. It is built around a database with four main entities: Patient, Doctor, Hospital, and Medical Record, each with specific attributes for comprehensive data management. The system uses an Entity Relationship Diagram (ERD) to define the relationships between these entities and ensure efficient data organization. The project aims to streamline hospital workflows by providing a centralized platform for managing patient information, doctor details, hospital data, and medical records. This digital solution replaces manual processes with automated systems to improve efficiency, accuracy, and overall hospital management operations.",projectLink:'',tags:[tag.SQL],pictures:[]},
    {id:5,name:"HMS",summary:"Hospital Management System", description:"This Hospital Management System is a C++ console-based application that provides comprehensive management of hospital operations through an interactive menu system. The program manages two primary entities - doctors and patients - with complete CRUD (Create, Read, Update, Display) functionality for both categories. It features separate modules for doctor management (adding doctor information, displaying records, viewing all doctors, and counting total doctors) and patient management (patient registration, medical history tracking, billing, and patient reports). The system includes file handling capabilities to save doctor and patient details to external text files for persistent storage. It provides specialized reporting features including patient history reports and bill generation with room charges and medicine costs. The application uses an object-oriented approach with inheritance, where a control panel class manages the overall system flow through a user-friendly menu interface.",projectLink:'',tags:[tag.CPLUSPLUS],pictures:[]},
    {id:6,name:"Black Jack",summary:"Web-based Blackjack game.", description:"This is a web-based Blackjack game built with HTML, CSS, and JavaScript that simulates the classic casino card game. The game features a green casino-style background with golden text styling and provides an interactive interface where players can start games and draw additional cards. Players begin by clicking START GAME to receive their initial cards, then can choose to draw new cards using the New Card button to try to reach a sum of 21 without going over.",projectLink:'',tags:[tag.JAVASCIPT,tag.HTML,tag.CSS],pictures:[]}
  ];
  GetProjects(){
    return this.projects; 
  }
  GetProjectById(id:number): Project{
    let project=this.projects.find(project=>project.id===id)
    if(project===undefined)
    {
      throw new TypeError("No project of :"+id+" found")
    }
    return project;
  }
  GetProjectsByFilter(FilterTag: tag[]){
    let filteredProjects: Project[]=[];
    this.projects.forEach(function(project){
      let foundAll=true;
      FilterTag.forEach(function(FilterTag){
        if(project.tags.includes(FilterTag)==false)
        {
          foundAll=false;
        }
      })
      if(foundAll){
        filteredProjects.push(project)
      }
    })
    return filteredProjects;
  }
}
