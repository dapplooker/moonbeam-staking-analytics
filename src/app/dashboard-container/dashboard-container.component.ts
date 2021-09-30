import { Attribute, Component, OnInit } from "@angular/core";
import { Constants } from "src/core/utils/constant";
import { IframepipePipe } from "../iframepipe.pipe";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";

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
     //Setting Default Value.

  }
  checkURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.nominator = params["input_collator_address"];
      this.collator = params["input_nominator_address"];
      var tab1Button : HTMLElement = document.getElementById('tab_0') as HTMLElement;
      var tab2Button : HTMLElement = document.getElementById('tab_1') as HTMLElement;
      if(this.nominator != undefined){
        tab1Button.click();
      }
      if(this.collator != undefined){
        tab2Button.click();
      }
    });
  }
  setIframeURL(index: number) {
    if (index == 0) {

      if (this.nominator == undefined) {
        this.route.navigate(['/collator']);
        this.currentIframe = this.dashboardList[index].iframeURL;
      } else if (this.nominator != undefined) {
        this.currentIframe =
          this.dashboardList[index].iframeURL +
          this.queryURL.collator +
          this.nominator;
        //alert(this.dashboardList[index].iframeURL +this.queryURL.collator +this.nominator);
      }
    }
    if (index == 1) {

      if (this.collator == undefined) {
        this.route.navigate(['/nominator']);
        this.currentIframe = this.dashboardList[index].iframeURL;
      } else if (this.collator != undefined) {
        this.currentIframe =
          this.dashboardList[index].iframeURL +
          this.queryURL.nominator +
          this.collator;
        //alert(this.dashboardList[index].iframeURL +this.queryURL.nominator +this.collator);
      }
    }
  }
}
