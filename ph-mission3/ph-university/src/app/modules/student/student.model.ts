import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMethods,
  StudentModel,
  TUserName,
} from './student.interface';
import validator from 'validator';
import bcrypt from 'bcrypt';
import config from '../../config';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    require: [true, 'First name is required'],
    trim: true,
    // validate: {
    //   validator: function (value: string) {
    //     const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNamestr === value;
    //   },
    //   message: '{VALUE} is not a capitalize format',
    // },
  },
  middleName: { type: String, trim: true },

  lastName: {
    type: String,
    maxlength: [20, 'Last name is too long, not more than 20 characters'],
    trim: true,
    require: [true, 'Last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not a valid last name',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, require: [true, 'Father name is required'] },
  fatherOccupation: {
    type: String,
    require: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    require: [true, 'Father contact no is required'],
  },
  motherName: { type: String, require: [true, 'Mother name is required'] },
  motherOccupation: {
    type: String,
    require: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    require: [true, 'Mother contact no is required'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, require: [true, 'Guardian Name is required'] },
  occupation: {
    type: String,
    require: [true, 'Guardian occupation is required'],
  },
  contactNo: {
    type: String,
    require: [true, 'Guardian contact no is required'],
  },
  address: { type: String, require: [true, 'Guardian address is required'] },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: [true, 'Password is required'],
      maxlength: [20, 'Password is too long, not more than 20 characters'],
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message:
          "The gender field can only be one of the following values: 'male', 'female', 'other'.",
      },
      required: true,
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not a valid email',
      },
    },
    contactNo: { type: String, required: [true, 'Contact no is required'] },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact no is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message:
          "The bloodGroup field can only be one of the following values: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'.",
      },
      required: true,
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian is required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian is required'],
    },
    profileImg: { type: String },
    isActive: {
      type: String,
      enum: {
        values: ['active', 'blocked'],
        message:
          "The isActive field can only be one of the following values: 'active', 'blocked'.",
      },
      default: 'active',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    toJSON: { virtuals: true },
  },
);

// pre save middleware / hooks : will work on create() and save()
studentSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook: we will save the data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  // hashing password and save into database
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// post save middleware / hooks
studentSchema.post('save', function (doc, next) {
  // console.log(this, 'post hook: we saved our data');

  // after the save password will be removed
  doc.password = '';

  next();
});

// Query middleware
studentSchema.pre('find', function (next) {
  // console.log(this, 'pre hook: we will find the data');

  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  // console.log(this, 'pre hook: we will find the data');

  this.find({ isDeleted: { $ne: true } });
  next();
});

// [{ $match: { isDeleted: { $ne: true } },  { '$match': { id: 'S55437' } }}]

studentSchema.pre('aggregate', function (next) {
  // console.log(this, 'pre hook: we will find the data');

  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// creatnig a custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// virtual property
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
