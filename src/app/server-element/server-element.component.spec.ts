import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerElementComponent } from './server-element.component';
import { ServerElment } from '../model/server-element.model';

describe('ServerElementComponent', () => {
  let component: ServerElementComponent;
  let fixture: ComponentFixture<ServerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerElementComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name of the server in the panel heading', () => {
    const mockElement: ServerElment = { name: 'Test Server', type: 'server', content: 'Test Content' };
    component.element = mockElement;

    fixture.detectChanges(); // Trigger change detection

    const compiled = fixture.nativeElement as HTMLElement;
    const panelHeading = compiled.querySelector('.panel-heading');
    expect(panelHeading?.textContent).toContain('Test Server');
  });

  it('should display content in red for servers', () => {
    const mockElement: ServerElment = { name: 'Test Server', type: 'server', content: 'Test Content' };
    component.element = mockElement;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const strongElement = compiled.querySelector('strong');
    expect(strongElement).toBeTruthy();
    expect(strongElement?.style.color).toBe('red');
    expect(strongElement?.textContent).toContain('Test Content');
  });

  it('should display content in italics for blueprints', () => {
    const mockElement: ServerElment = { name: 'Test Blueprint', type: 'blueprint', content: 'Blueprint Content' };
    component.element = mockElement;

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const emElement = compiled.querySelector('em');
    expect(emElement).toBeTruthy();
    expect(emElement?.textContent).toContain('Blueprint Content');
  });
});
