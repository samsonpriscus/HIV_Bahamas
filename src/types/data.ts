export interface HIVRate {
  year: number;
  rate: number;
}

export interface AgeGroupData {
  ageGroup: string;
  testingRate: number;
}

export interface STDData {
  name: string;
  percentage: number;
}

export interface GenderAgeData {
  ageGroup: string;
  male: number;
  female: number;
}