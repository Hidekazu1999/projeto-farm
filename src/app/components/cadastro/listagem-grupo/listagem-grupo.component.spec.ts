import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGrupoComponent } from './listagem-grupo.component';

describe('ListagemGrupoComponent', () => {
  let component: ListagemGrupoComponent;
  let fixture: ComponentFixture<ListagemGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
