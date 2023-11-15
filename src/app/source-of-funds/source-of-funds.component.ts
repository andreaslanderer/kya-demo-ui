import { Component, Input } from '@angular/core';
import { SourceOfFundsKycResult } from './kyc-result2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-source-of-funds',
  templateUrl: './source-of-funds.component.html',
  styleUrls: ['./source-of-funds.component.css']
})
export class SourceOfFundsComponent {
  @Input() kycResult2: SourceOfFundsKycResult;
  isLoading: boolean = false; // Initial auf false gesetzt

  plannedInitialInvestmentChf: number;
  serverResponse: any;

  constructor(private http: HttpClient) {}

  processInput(): void {
    console.log('Process Data button clicked');
    console.log('Processing input:', this.plannedInitialInvestmentChf);

    this.isLoading = true; // Spinner anzeigen
    const url = 'http://localhost:3000/sourceOfFundsNew';
    const data = { text: this.plannedInitialInvestmentChf.toString() };

    this.http.post(url, data).subscribe(
        response => {
          this.serverResponse = response;
          this.isLoading = false; // Spinner ausblenden
        },
        error => {
          console.error('Error:', error);
          this.isLoading = false; // Spinner ausblenden auch bei Fehler
        }
    );
  }
}
