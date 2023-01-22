/**
 * Describes the course level G1, G2 or A.
 */
export type LotCycle = 'G1' | 'G2' | 'A';

/**
 * @field courseId Unique identifier for the course in Lot.
 * @field courseCode Unique course code for the course in Lot.
 * @field name The English name of the course.
 * @field credits The number of HP/credits for the courcse.
 * @field cycle The course cycle or "level".
 */
export interface LotCourse {
    courseId: number;
    courseCode: string;
    name: string;
    credits: number;
    cycle: LotCycle;
}