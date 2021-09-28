import { Attribute, Component, OnInit } from "@angular/core";
import { Constants } from "src/core/utils/constant";
import { IframepipePipe } from "../iframepipe.pipe";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
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

  constructor(private activatedRoute: ActivatedRoute) { }

  currentIframe = this.dashboardList[0].iframeURL; //Setting Default Value.
  ngOnInit() {
    this.checkURL();
  }
  checkURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.nominator = params["input_collator_address"];
      this.collator = params["input_nominator_address"];
      var element1 : HTMLElement = document.getElementById('tab_0') as HTMLElement;
      var element2 : HTMLElement = document.getElementById('tab_1') as HTMLElement;
      debugger;
      if(this.nominator != undefined){
        element1.click();
      }
      if(this.collator != undefined){
        element2.click();
      }
    });
  }
  setIframeURL(index: number) {
    if (index == 0) {
      if (this.nominator == undefined) {
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
