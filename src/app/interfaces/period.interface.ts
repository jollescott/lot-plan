import { LotCourse } from "./course.interface";

export type LotPeriodIndex = '1' | '2' | '3' | '4';
export type LotPeriodYear = '4' | '5';

export interface LotPeriod {
    index: LotPeriodIndex,
    year: LotPeriodYear,
    courses?: LotCourse[]
}