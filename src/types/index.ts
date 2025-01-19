export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: Gender;
  description: string;
  image: string;
  affiliation: Affiliation;
  deletedAt: null;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export enum Affiliation {
  ArmyOfFrieza = "Army of Frieza",
  Freelancer = "Freelancer",
  ZFighter = "Z Fighter",
}