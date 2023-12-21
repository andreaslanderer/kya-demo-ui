import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SourceOfFundsResult} from "./source-of-funds.result";

@Component({
  selector: 'app-source-of-funds',
  templateUrl: './source-of-funds.component.html',
  styleUrls: ['./source-of-funds.component.css']
})
export class SourceOfFundsComponent {

  backendUrl = environment.backendUrl;
  partnerId = ''
  isLoading = false
  sourceOfFunds?: SourceOfFundsResult

  constructor(private http: HttpClient) { }

  onProcess() {
    this.isLoading = true;
    this.http.post(`${this.backendUrl}/sourceOfFundsNew`, { partnerId: this.partnerId })
      .subscribe(
        data => {
          try {
            this.sourceOfFunds = data as SourceOfFundsResult
            console.log(this.sourceOfFunds);
          } catch (error) {
            console.error("Invalid response from backend", error);
          }
          this.isLoading = false;
        },
        error => {
          console.error(error);
          this.isLoading = false;
        }
      );
  }
}
