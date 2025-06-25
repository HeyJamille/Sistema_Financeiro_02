import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  data = [
    {
      title: "Total de Transações",
      quantity: "5",
      icon: "transaction"
    },
    {
      title: "Receita média",
      quantity: "5",
      icon: "revenue"
    },
    {
      title: "Gasto médio",
      quantity: "5",
      icon: "expense"
    },
    {
      title: "Lucro estimado",
      quantity: "5",
      icon: "profit"
    }
  ];
}
