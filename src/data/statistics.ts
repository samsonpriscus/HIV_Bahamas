import { HIVRate, AgeGroupData, STDData, GenderAgeData } from '../types/data';

export const hivRates: HIVRate[] = [
  { year: 2014, rate: 0.23 },
  { year: 2015, rate: 0.15 },
  { year: 2016, rate: 0.12 },
  { year: 2017, rate: 0.18 },
  { year: 2018, rate: 0.17 },
  { year: 2019, rate: 0.27 },
  { year: 2020, rate: 0.14 },
  { year: 2021, rate: 0.11 },
  { year: 2022, rate: 0.27 },
  { year: 2023, rate: 0.16 }
];

export const ageGroupData: AgeGroupData[] = [
  { ageGroup: "13-24", testingRate: 43.2 },
  { ageGroup: "25-40", testingRate: 23.6 },
  { ageGroup: "40+", testingRate: 12.1 }
];

export const stdData: STDData[] = [
  { name: "Chlamydia", percentage: 0.48 },
  { name: "Gonorrhea", percentage: 1.20 },
  { name: "Syphilis", percentage: 0.79 },
  { name: "Trichomoniasis", percentage: 14.60 },
  { name: "Hepatitis B", percentage: 6.56 }
];

export const genderAgeData: GenderAgeData[] = [
  { ageGroup: "13-24", male: 0.2, female: 0.3 },
  { ageGroup: "25-40", male: 0.8, female: 1.1 },
  { ageGroup: "40+", male: 0.7, female: 0.1 }
];