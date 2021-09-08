import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/core/utils/constant';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  labels = Constants.LABELS.footerArea;
  commonLabels = Constants.LABELS.commonLables;
  constantsURLs = Constants.URLs;
  errorLabels = Constants.LABELS.errorMessages;
  constructor() { }

  ngOnInit(): void {
  }

}
