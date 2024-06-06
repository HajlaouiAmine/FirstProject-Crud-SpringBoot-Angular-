import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriqueClientComponent } from './edit-historique-client.component';

describe('EditHistoriqueClientComponent', () => {
  let component: EditHistoriqueClientComponent;
  let fixture: ComponentFixture<EditHistoriqueClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHistoriqueClientComponent]
    });
    fixture = TestBed.createComponent(EditHistoriqueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
