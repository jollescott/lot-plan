import { CourseCreditsPipe } from './course-credits.pipe';

describe('PeriodCreditsPipe', () => {
  it('create an instance', () => {
    const pipe = new CourseCreditsPipe();
    expect(pipe).toBeTruthy();
  });
});
