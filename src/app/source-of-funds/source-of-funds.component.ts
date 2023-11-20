import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { SourceOfFundsKycResult } from './kyc-result2';

@Component({
  selector: 'app-source-of-funds',
  templateUrl: './source-of-funds.component.html',
  styleUrls: ['./source-of-funds.component.css']
})
export class SourceOfFundsComponent {
  @Input() kycResult2: SourceOfFundsKycResult;
  isLoading: boolean = false;

  plannedInitialInvestmentChf: number;
  serverResponses: any[] = [];

  constructor(private http: HttpClient) {}

  processInput(): void {
    this.isLoading = true;
    const data = { text: this.plannedInitialInvestmentChf.toString() };

    console.log('Sending POST request:', data);

    const incomeMiscellaneousRequest = this.http.post('http://localhost:3000/incomeMiscellaneous', data);
    const incomeBusinessRequest = this.http.post('http://localhost:3000/incomeFromBusinessActivities', data);
    const incomeRealEstateRequest = this.http.post('http://localhost:3000/incomeFromRealEstateSales', data);
    const incomeInheritanceRequest = this.http.post('http://localhost:3000/incomeFromInheritance', data);
    const incomeFromSalesInterestRequest = this.http.post('http://localhost:3000/incomeFromSalesInterest', data);

    forkJoin([incomeMiscellaneousRequest, incomeBusinessRequest, incomeRealEstateRequest, incomeInheritanceRequest, incomeFromSalesInterestRequest]).subscribe(
      responses => {
        this.serverResponses = responses;
        this.isLoading = false;

        console.log('Full Responses:', responses);
        console.log('Server Responses:', this.serverResponses);
      },
      error => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }

  // Methode zum Erhalten der Schlüssel eines Objekts
  public getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Methode zur Überprüfung, ob eine Variable ein Array ist
  public isArray(obj: any): boolean {
    return Array.isArray(obj);
  }

  // Methode zur Überprüfung, ob eine Variable ein Objekt ist
  public isObject(obj: any): boolean {
    return obj != null && typeof obj === 'object' && !Array.isArray(obj);
  }
}
