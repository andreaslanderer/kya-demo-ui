import {Component, Input} from '@angular/core';
import {AssetEntry} from "../assets-and-liabilities.result";

@Component({
  selector: 'app-asset-table',
  templateUrl: './liquidity-table.component.html',
  styleUrls: ['./liquidity-table.component.css']
})
export class LiquidityTableComponent {

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
