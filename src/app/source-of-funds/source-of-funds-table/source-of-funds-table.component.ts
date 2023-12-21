import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SourceOfFundsResult, SourceOfFundsEntry} from "../source-of-funds.result";

@Component({
  selector: 'app-source-of-funds-table',
  templateUrl: './source-of-funds-table.component.html',
  styleUrls: ['./source-of-funds-table.component.css']
})
export class SourceOfFundsTableComponent implements OnInit, OnChanges {

  @Input() entries: SourceOfFundsEntry[]
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
