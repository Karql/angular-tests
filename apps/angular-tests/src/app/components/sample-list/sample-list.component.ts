import { Component, OnInit } from '@angular/core';
import { SampleListModel } from '../../models/sample-list.model';
import { SampleListService } from '../../services/sample-list.service';

@Component({
  selector: 'angular-tests-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {
  list: SampleListModel[];

  constructor(private sampleListService: SampleListService) { }

  ngOnInit() {
    this.sampleListService.getSampleList().subscribe(list => this.list = list);
  }
}