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
  paramName = Constants.queryParamName;
  routes = Constants.queryRoutes;
  collator = " ";
  nominator = " ";
  currentTab = 0;
  currentIframe = this.dashboardList[0].iframeURL;
  tabKeys = new Map([
    ["collator", 1],
    ["nominator", 0]
]); 
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}
  ngOnInit() {
    this.checkURL();
    this.currentTab = this.parseQueryParam(location.pathname);
    this.currentIframe = this.dashboardList[this.currentTab].iframeURL;
  }
  parseQueryParam(route: String): number {
    switch (route) {
      case this.routes.collator:
        return this.tabKeys.get("collator") || 1;

      case this.routes.nominator:
        return this.tabKeys.get("nominator") || 0;

      default:
        return 0;
    }
  }
  checkURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.nominator = params[this.paramName.nominator];
      this.collator = params[this.paramName.collator];
      if (this.nominator) {
        this.currentIframe =
          this.dashboardList[this.currentTab].iframeURL +
          this.queryURL.collator +
          this.nominator;
      }
      if (this.collator) {
        this.currentIframe =
          this.dashboardList[this.currentTab].iframeURL +
          this.queryURL.nominator +
          this.collator;
      }
    });
  }
  setIframeURL(index: number) {
    switch (index) {
      case this.tabKeys.get("collator"):
        this.route.navigate([this.routes.collator]);
        this.currentIframe = this.dashboardList[index].iframeURL;
        break;

      case this.tabKeys.get("nominator"):
        this.route.navigate([this.routes.nominator]);
        this.currentIframe = this.dashboardList[index].iframeURL;
        break;

      default:
        this.route.navigate([this.routes.collator]);
        break;
    }
  }
}
