import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

@Component({
  selector: 'app-swagger-ui',
  templateUrl: './apiswagger-ui.component.html',
})
export class APISwaggerUIComponent implements AfterViewInit {
  @ViewChild('swaggerUI', { static: true })
  private swaggerUIContainer!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.swaggerUIContainer.nativeElement) {
      const ui = SwaggerUIBundle({
        domNode: this.swaggerUIContainer.nativeElement, // Pass the container element directly
        presets: [SwaggerUIBundle['presets'].apis, SwaggerUIStandalonePreset],
        layout: 'BaseLayout',
        url: '../../assets/API.yaml', // Path to your Swagger JSON/YAML file
      });
    } else {
      console.error('Target container is not found in the DOM.');
    }
  }
}
