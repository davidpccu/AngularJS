import { MyCopModule } from './my-cop.module';

describe('MyCopModule', () => {
  let myCopModule: MyCopModule;

  beforeEach(() => {
    myCopModule = new MyCopModule();
  });

  it('should create an instance', () => {
    expect(myCopModule).toBeTruthy();
  });
});
