import { Component } from '@angular/core';
import { GitUser } from './git-user';
import { GithubService } from './github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:GitUser[] =[]
  title: any;
  
  constructor(private gitService:GithubService){

  }

  ngOnInit(){

  }
}
