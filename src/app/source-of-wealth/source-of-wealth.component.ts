import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SourceOfWealth, SourceOfWealthResult} from "./source-of-wealth.result";

@Component({
  selector: 'app-source-of-wealth',
  templateUrl: './source-of-wealth.component.html',
  styleUrls: ['./source-of-wealth.component.css']
})
export class SourceOfWealthComponent {

  backendUrl = environment.backendUrl;
  partnerId = ''
  isLoading = false
  sourceOfWealth?: SourceOfWealthResult

  constructor(private http: HttpClient) { }

  onProcess() {
    this.isLoading = true;
    this.http.post(`${this.backendUrl}/sourceOfWealthNew`, { partnerId: this.partnerId })
      .subscribe(
        data => {
          try {
            this.sourceOfWealth = data as SourceOfWealthResult
            console.log(this.sourceOfWealth);
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
