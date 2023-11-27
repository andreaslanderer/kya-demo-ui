import {Component} from '@angular/core';
import {AssetsAndLiabilities} from "./assets-and-liabilities.result";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-assets-and-liabilities',
  templateUrl: './assets-and-liabilities.component.html',
  styleUrls: ['./assets-and-liabilities.component.css']
})
export class AssetsAndLiabilitiesComponent {

  backendUrl = environment.backendUrl;
  partnerId = ''
  isLoading = false
  assetsAndLiabilities?: AssetsAndLiabilities

  constructor(private http: HttpClient) { }

  onProcess() {
    this.isLoading = true
    this.http.post(`${this.backendUrl}/assetsAndLiabilitiesNew`, { partnerId: this.partnerId })
      .subscribe(
        data => {
          console.log(data)
          this.assetsAndLiabilities = data as AssetsAndLiabilities
          this.isLoading = false
        },
        error => {
          console.error(error);
          this.isLoading = false
        }
      );
  }
}
