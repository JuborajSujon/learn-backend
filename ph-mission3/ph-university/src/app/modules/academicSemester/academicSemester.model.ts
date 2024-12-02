import { Schema, model } from 'mongoose';
import {
  TAcademicSemester,
  TAcademicSemesterName,
  TAcademicSemesterCode,
  TMonths,
} from './academicSemester.interface';

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const semeterName: TAcademicSemesterName[] = ['Autumn', 'Summer', 'Fall'];

const semesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: semeterName,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: semesterCode,
  },
  startMonth: {
    type: String,
    enum: Months,
  },
  endMonth: {
    type: String,
    enum: Months,
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
