import { TestBed } from '@angular/core/testing';

import { ImagehandlerService } from './imagehandler.service';

describe('ImagehandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagehandlerService = TestBed.get(ImagehandlerService);
    expect(service).toBeTruthy();
  });
});
