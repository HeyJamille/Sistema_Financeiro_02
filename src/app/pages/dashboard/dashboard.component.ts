import { Component } from '@angular/core';

// Components
import { CardsComponent } from '../../components/ui/cards/cards.component';
import { SidebarComponent } from "../../components/templates/sidebar/sidebar.component";
import { RecentTransactionsComponent } from '../../components/ui/recent-transactions/recent-transactions.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardsComponent, SidebarComponent, RecentTransactionsComponent ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  isChanged = false;

  changeTheme() {
    this.isChanged = !this.isChanged;
  }
}
