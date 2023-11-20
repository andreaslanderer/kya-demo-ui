import { Component, Input, OnInit } from '@angular/core';
import { InstitutionBank } from '../kyc-result2';

@Component({
    selector: 'app-fundincome-table',
    templateUrl: './fundincome-table.component.html',
    styleUrls: ['./fundincome-table.component.css'],
})
export class FundIncomeTableComponent implements OnInit {

    @Input() incomingInstitutionBanks: InstitutionBank[] = [];

    ngOnInit(): void {
        // Hier können Sie Initialisierungslogik hinzufügen, falls notwendig
    }

}
