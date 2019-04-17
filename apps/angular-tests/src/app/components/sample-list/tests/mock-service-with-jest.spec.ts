import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleListComponent } from '../sample-list.component';
import { SampleListService } from '../../../services/sample-list.service';
import { Subject } from 'rxjs';
import { SampleListModel } from '../../../models/sample-list.model';

describe('SampleListComponent', () => {
  let component: SampleListComponent;
  let fixture: ComponentFixture<SampleListComponent>;

  let list: SampleListModel[] = [
      { id: "1", title: "Title 1" },
      { id: "2", title: "Title 2" }
  ]

  const mockSampleListSubject = new Subject<SampleListModel[]>();
  const mockSampleListService = {
    getSampleList: jest.fn(() => mockSampleListSubject)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleListComponent ],
      providers: [
          { provide: SampleListService, useValue: mockSampleListService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a list of all titles', () => {
    mockSampleListSubject.next(list);
    component.ngOnInit();
    fixture.detectChanges();

    const el = fixture.nativeElement;
    expect(el.textContent).toContain('Title 1');
    expect(el.textContent).toContain('Title 2');
  });
});
