import { Component, OnInit } from '@angular/core';
import { SampleListModel } from '../../models/sample-list.model';
import { SampleListService } from '../../services/sample-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-tests-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {
  list$: Observable<SampleListModel[]>;

  constructor(private sampleListService: SampleListService) { }

  ngOnInit() {
    this.list$ = this.sampleListService.getSampleList();
  }
}