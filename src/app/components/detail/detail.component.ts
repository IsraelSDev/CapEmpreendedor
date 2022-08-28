import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HandleDetailService } from 'src/services/handleDetail.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: []
})
export class DetailComponent implements OnInit {

  paymentOptions: any[];
  user: any = {};
  value: number = 2;

  constructor(private detail: HandleDetailService) {

    this.paymentOptions = [
      { name: 'Aceita', value: 1 },
      { name: 'Em análise', value: 2 },
      { name: 'Negada', value: 3 }
    ];
  }

  ngOnInit(): void {
    this.user = this.detail.getUser();
  }

  updateStatus(): void {
    console.log(this.value);
    alert('Status atualizado com sucesso!');
    //Call service to update status
  }


}
