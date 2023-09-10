import { model, Schema, Document } from 'mongoose';
import { Relation } from '../enums/relations';
import { User } from '../users/userModel';

export interface IRelative extends Document {
  fullName: string;
  birthDate: string;
  country: string;
  relation: Relation;
  user: User;
}

export class Relative {
  id: string;
  constructor(
    public fullName: string,
    public birthDate: string,
    public country: string,
    public relation: Relation
  ) {
    this.id = Math.random().toString(36).substr(2, 9);
  }

  changeRelation(newRelation: Relation) {
    this.relation = newRelation;
  }
}

export const relatives: Relative[] = [];

export class UserRelatives {
  id: string;
  isVerified: boolean;

  constructor(public user: User, public relative: Relative) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.isVerified = false;
  }
}

export const userRelatives: UserRelatives[] = [];

export const RelativeSchema = new Schema<IRelative>({
  fullName: { type: String },
  birthDate: { type: String },
  country: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  relation: {
    type: String,
    enum: Object.values(Relation),
    default: Relation.choose,
  },
});

export const RelativeModel = model<IRelative>('relatives', RelativeSchema);
