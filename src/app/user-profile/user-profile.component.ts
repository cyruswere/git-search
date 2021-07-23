import { Component, OnInit } from '@angular/core';
import { GitUser } from '../git-user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:GitUser[] =[]

  constructor(private gitService:GithubService) { }

  getSearchItem(searchItem: string){
    this.gitService.searchUser(searchItem).then(
      (success) =>{
        this.user = this.gitService.user
        console.log(this.user)
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(){
    this.getSearchItem('Cyrus Were');
  }
}
