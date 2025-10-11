import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
  isWorkExperienceOpen:boolean=false;
    isEducationOpen:boolean=false;
    isCertificationOpen:boolean=false;
    isskillsOpen:boolean=false;
constructor(private titleService:Title,private renderer:Renderer2)
{
  this.titleService.setTitle('Muhammad Saad - Resume')
}
  DownloadFile() {
    // For Angular projects, files in public folder are served from root
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/Muhammad Saad.pdf');
    link.setAttribute('download', 'Muhammad Saad.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
