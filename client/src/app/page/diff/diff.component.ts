import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { diff_match_patch } from 'diff-match-patch';

var PR = window["PR"]

const left = `    int length;
    int breadth;
    int height;
    int getVolume() {
        return (length * breadth * height);
    }`;
const right = `    int lengtha;
    int breadth;
    int height;
    int getVolume() {
        return (length * breadth * height);
    }`;

@Component({
  selector: 'page-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.scss']
})
export class DiffComponent implements AfterViewChecked {
  code = left;
  constructor() { }

  ngAfterViewChecked() {
      console.log('ngAfterViewChecked')
      PR.prettyPrint();
      
      const diff = new diff_match_patch();
      const diffs = diff.diff_main( left, right );
      console.log(diffs)
  }
}
