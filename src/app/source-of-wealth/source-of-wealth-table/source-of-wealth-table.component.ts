import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SourceOfWealth, SourceOfWealthEntry} from "../source-of-wealth.result";

@Component({
  selector: 'app-source-of-wealth-table',
  templateUrl: './source-of-wealth-table.component.html',
  styleUrls: ['./source-of-wealth-table.component.css']
})
export class SourceOfWealthTableComponent implements OnInit, OnChanges {

  @Input() entries: SourceOfWealthEntry[]
  @Input() background: string

  opened = false

  open() {
    this.opened = true
  }

  close() {
    this.opened = false
  }

  ngOnInit(): void {
    console.log("(INIT) Table entries: ", this.entries)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("(CHANGE) Table entries: ", this.entries)
  }
}
