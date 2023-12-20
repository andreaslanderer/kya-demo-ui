import {Component, Input} from '@angular/core';
import {AssetEntry} from "../assets-and-liabilities.result";

@Component({
  selector: 'app-asset-table',
  templateUrl: './asset-table.component.html',
  styleUrls: ['./asset-table.component.css']
})
export class AssetTableComponent {

  @Input() entries: AssetEntry[]
  @Input() background: string

  opened = false

  open() {
    this.opened = true
  }

  close() {
    this.opened = false
  }
}
