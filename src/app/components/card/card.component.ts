import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/services/getData.service';
import { HandleDetailService } from 'src/services/handleDetail.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  providers: [GetDataService]
})

export class CardComponent implements OnInit {

  userInfo: any = {};
  users: any[] = []

  constructor(private data: GetDataService, private detail: HandleDetailService) {
    this.data.getData().subscribe(data => {
      // this.users = data;
    });
  }
  ngOnInit(): void {

  }
  setUserAndShow(user: User): void {
    this.userInfo = user;
  }
  setUserAndRdirect(user: User): void {
    this.detail.setUserToDetail(user);
  }
  getMoreUsers(): void {
    this.data.getData().subscribe(data => {
      this.users = [...this.users, ...data];
    }
    );
  }
}