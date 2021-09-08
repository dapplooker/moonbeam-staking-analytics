import { Attribute, Component, OnInit } from '@angular/core';
import { Constants } from 'src/core/utils/constant';
import { IframepipePipe } from '../iframepipe.pipe';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  dashboardList = Constants.projectDashboard;
  constructor() { }
  currentIframe = this.dashboardList[0].iframeURL; //Setting Default Value.
  ngOnInit(): void {

  }

  setIframeURL( index: number) {
    this.currentIframe = this.dashboardList[index].iframeURL;
  }
}
