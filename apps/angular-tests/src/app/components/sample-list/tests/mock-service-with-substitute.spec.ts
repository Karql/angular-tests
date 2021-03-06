import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleListComponent } from '../sample-list.component';
import { SampleListService } from '../../../services/sample-list.service';
import { Subject, of } from 'rxjs';
import { SampleListModel } from '../../../models/sample-list.model';

import { ConfigureFn, configureTests, NgSubstitute } from '@angular-tests/testing';

describe('SampleListComponent', () => {
  let component: SampleListComponent;
  let fixture: ComponentFixture<SampleListComponent>;

  let list: SampleListModel[] = [
      { id: "1", title: "Title 1" },
      { id: "2", title: "Title 2" }
  ]

  // + strong typings
  // + works with refactor
  // + nice api
  // + does not call class constructor
  // - try to find which metods are not mocked yet
  const mockSampleListService = NgSubstitute.for<SampleListService>();
  mockSampleListService.getSampleList().returns(of(list));

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        declarations: [ SampleListComponent ],
        providers: [
            { provide: SampleListService, useValue: mockSampleListService }
        ]
      })
    }

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(SampleListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  }));

  it('should display a list of all titles', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const el = fixture.nativeElement;
    expect(el.textContent).toContain('Title 1');
    expect(el.textContent).toContain('Title 2');
  });

  it('check what happen for not mocked method', () => {
    component.doSomething();
  })
});
