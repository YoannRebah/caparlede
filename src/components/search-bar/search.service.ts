import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor() { }

  private normalize(str: string): string {
    return str
      .toString()
      .normalize('NFD') // enlève les accents
      .replace(/[\u0300-\u036f]/g, '') // supprime les caractères diacritiques
      .toLowerCase()
      .trim();
  }

  private flattenObjectValues(obj: any): string[] {
    const result: string[] = [];

    const recurse = (value: any) => {
      if (value === null || value === undefined) return;

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        result.push(this.normalize(value.toString()));
      } else if (Array.isArray(value)) {
        value.forEach(item => recurse(item));
      } else if (typeof value === 'object') {
        Object.values(value).forEach(val => recurse(val));
      }
    };

    recurse(obj);
    return result;
  }

  genericSearch<T>(term: string, items: T[]): T[] {
    const query = this.normalize(term);
    if (!query) return items;

    return items.filter(item => {
      const flattenedValues = this.flattenObjectValues(item);
      return flattenedValues.some(value => value.includes(query));
    });
  }
}
