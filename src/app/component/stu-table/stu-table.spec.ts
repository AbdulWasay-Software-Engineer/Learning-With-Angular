import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StuTable } from './stu-table';

describe('StuTable', () => {
  let component: StuTable;
  let fixture: ComponentFixture<StuTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuTable],
    }).compileComponents();

    fixture = TestBed.createComponent(StuTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
