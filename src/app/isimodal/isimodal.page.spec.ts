import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsimodalPage } from './isimodal.page';

describe('IsimodalPage', () => {
  let component: IsimodalPage;
  let fixture: ComponentFixture<IsimodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsimodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsimodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
