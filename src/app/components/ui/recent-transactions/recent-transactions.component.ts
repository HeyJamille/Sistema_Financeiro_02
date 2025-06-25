import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-transactions',
  imports: [CommonModule],
  templateUrl: './recent-transactions.component.html',
})
export class RecentTransactionsComponent {
  data = [
    {
      title: "Salário",
      date: "20-05-2025",
      type: "Trabalho",
      value: +2000
    },
    {
      title: "Uber",
      date: "20-05-2025",
      type: "Transporte",
      value: -100
    }
  ]
}
