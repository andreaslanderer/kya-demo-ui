import {Component, Input } from '@angular/core';
import {FamilySituation } from "./family-situation";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ProfessionalBackground} from "../professional-background/professional-background.result";

@Component({
  selector: 'app-family-situation',
  templateUrl: './family-situation.component.html',
  styleUrls: ['./family-situation.component.css']
})
export class FamilySituationComponent {

  backendUrl = environment.backendUrl
  partnerId = ""
  isLoading = false
  familySituation: FamilySituation

  constructor(private http: HttpClient) { }

  onProcess() {
    this.isLoading = true
    this.http.post(`${this.backendUrl}/familySituationNew`, { partnerId: this.partnerId })
      .subscribe(
        data => {
          console.log(data)
          this.familySituation = data as FamilySituation
          this.isLoading = false
        },
        error => {
          console.error(error)
          this.isLoading = false
        }
      );
  }
}
