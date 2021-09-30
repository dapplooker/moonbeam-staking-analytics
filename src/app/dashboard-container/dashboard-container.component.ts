import { Component, OnInit } from "@angular/core";
import { Constants } from "src/core/utils/constant";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-dashboard-container",
  templateUrl: "./dashboard-container.component.html",
  styleUrls: ["./dashboard-container.component.scss"],
})
export class DashboardContainerComponent implements OnInit {
  dashboardList = Constants.projectDashboard;
  queryURL = Constants.urlQuery;
  collator = " ";
  nominator = " ";
  currentTab = 0;
  currentIframe: any;
  constructor(private activatedRoute: ActivatedRoute,
    private route:Router) { }
  ngOnInit() {
    this.checkURL();
    if (location.pathname == '/collator') {
      this.currentTab = 0;
    }
    else if(location.pathname == '/nominator'){
      this.currentTab = 1;
      }
      this.currentIframe = this.dashboardList[this.currentTab].iframeURL;
  }
  checkURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.nominator = params["input_collator_address"];
      this.collator = params["input_nominator_address"];
      if (this.nominator != undefined) {
        this.currentIframe =
          this.dashboardList[this.currentTab].iframeURL +
          this.queryURL.collator +
          this.nominator;
      }
      if (this.collator != undefined) {
        this.currentIframe =
          this.dashboardList[this.currentTab].iframeURL +
          this.queryURL.nominator +
          this.collator;
      }
    });
  }
  setIframeURL(index: number) {
    if (index == 0) {

        this.route.navigate(['/collator']);
        this.currentIframe = this.dashboardList[index].iframeURL;

    }
    if (index == 1) {
        this.route.navigate(['/nominator']);
        this.currentIframe = this.dashboardList[index].iframeURL;
    }
  }
}
