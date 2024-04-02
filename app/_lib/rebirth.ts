import data from '@/data/birthrate.json';
import dataDetailed from '@/data/birthrate_detailed.json';

const chinaBirthPopulation = 12123210;
const hongKongBirthPopulation = 33200;
const macauBirthPopulation = 3712;
const taiwanBirthPopulation = 137413;

const totalPopulation =
  chinaBirthPopulation +
  hongKongBirthPopulation +
  macauBirthPopulation +
  taiwanBirthPopulation;

interface Region {
  id: string;
  name: string;
  total: number;
  male: number;
  female: number;
}

export const regions: Region[] = data.region.slice(1); // Do not include the first element

interface CategoryData {
  [order: string]: {
    male: number;
    female: number;
  };
}

export interface BirthData {
  id: number;
  name: string;
  display_name: string;
  town: CategoryData;
  city: CategoryData;
  countryside: CategoryData;
}

export interface BirthResult {
  province: string;
  id: number;
  category: string;
  gender: string;
  order: string;
  probability: number;
}

export const birthDataDetailed: BirthData[] = dataDetailed.slice(1);

export function simulateBirth(): BirthResult {
  const randomNumber = Math.random() * totalPopulation;

  let cumulativePopulation = 0;
  for (const region of dataDetailed) {
    if (region.name === 'national') continue;
    for (const category of ['town', 'city', 'countryside'] as const) {
      for (const order of [
        'one',
        'two',
        'three',
        'four',
        'five_plus'
      ] as const) {
        for (const gender of ['male', 'female'] as const) {
          let population = region[category][order][gender];
          if (!isSpecialProvince(region.name)) {
            population *= 10;
          }
          cumulativePopulation += population;
          if (cumulativePopulation > randomNumber) {
            const probability = population / totalPopulation;
            return {
              id: region.id,
              province: region.display_name,
              gender: gender,
              category:
                category === 'town'
                  ? '城镇'
                  : category === 'city'
                    ? '城市'
                    : '乡村',
              order:
                order === 'one'
                  ? '一'
                  : order === 'two'
                    ? '二'
                    : order === 'three'
                      ? '三'
                      : order === 'four'
                        ? '四'
                        : '五及以上',
              probability: probability
            };
          }
        }
      }
    }
  }

  return {
    id: 0,
    province: '',
    gender: '',
    category: '',
    order: '',
    probability: 0
  };
}

export function calculateBirthProbability(
  province: string,
  category: 'city' | 'town' | 'countryside',
  gender: 'male' | 'female',
  order: string
): { population: number; probability: number } {
  const region = birthDataDetailed.find(item => item.name === province);
  if (!region) {
    return { population: 0, probability: 0 };
  }

  let categoryData;
  switch (category) {
    case 'town':
      categoryData = region.town;
      break;
    case 'city':
      categoryData = region.city;
      break;
    case 'countryside':
      categoryData = region.countryside;
      break;
    default:
      return { population: 0, probability: 0 };
  }

  const genderData = categoryData[order][gender];
  let population = genderData;
  if (!isSpecialProvince(province)) {
    population *= 10;
  }
  const probability = population / totalPopulation;

  return { population, probability };
}

function isSpecialProvince(province: string): boolean {
  return ['xiang_gang', 'ao_men', 'tai_wan'].includes(province);
}

export function translateGender(gender: string): string {
  switch (gender) {
    case 'male':
      return '男';
    case 'female':
      return '女';
    default:
      return gender;
  }
}

export function translateGenderChild(gender: string): string {
  switch (gender) {
    case 'male':
      return '男孩';
    case 'female':
      return '女孩';
    default:
      return gender;
  }
}
