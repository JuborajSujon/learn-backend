import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFacalty.interface';

const academicFacultySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
