import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormComponent } from './aluno-formulario.component';

describe('AlunoFormularioComponent', () => {
  let component: AlunoFormComponent;
  let fixture: ComponentFixture<AlunoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlunoFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
