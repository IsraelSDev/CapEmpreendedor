import { Component, TemplateRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GetDataService } from 'src/services/getData.service';
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

  constructor(private data: GetDataService) {
    this.data.getData().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {

  }

  setUserAndShow(user: User): void {
    this.userInfo = user;
  }
}