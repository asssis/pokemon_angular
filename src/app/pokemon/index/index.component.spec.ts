import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IndexComponent } from './index.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IndexComponent
      ],
    }).compileComponents();
  });

  it('check variaveis', () => {
    inject([IndexComponent], (app: IndexComponent) => {
    expect(app.pageSize).toEqual(60);
    })
  });

  it('check service pokemon', () => {
    inject([IndexComponent], (app: IndexComponent) => {
    expect(app.CarregarDados()).isNot
    })
  });
});
