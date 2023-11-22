import {Component, Input} from '@angular/core';
import {LiquidityEntry} from "../assets-and-liabilities.result";

@Component({
  selector: 'app-liquidity-table',
  templateUrl: './liquidity-table.component.html',
  styleUrls: ['./liquidity-table.component.css']
})
export class LiquidityTableComponent {

  @Input() entries: LiquidityEntry[]
  @Input() background: string

  opened = false

  open() {
    this.opened = true
  }

  close() {
    this.opened = false
  }
}
