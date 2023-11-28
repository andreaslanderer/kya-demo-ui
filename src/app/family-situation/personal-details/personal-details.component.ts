import {Component, Input} from '@angular/core';
import {FamilySituation} from "../family-situation";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {

  @Input() familySituation: FamilySituation
}
