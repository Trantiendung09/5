import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mussic } from './mussic';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const mussics = [
      {id:1, image: '11', name_cs: 'Dung', name_bh:"Son dep trai" },
      {id:2,  image: '12', name_cs: 'Narco',  name_bh:"Son dep trai" },
      {id:3,  image: '13', name_cs: 'Bombasto',  name_bh:"Son dep trai" },
      {id:4,  image: '14', name_cs: 'Celeritas',  name_bh:"Son dep trai" },
      {id:5,  image: '15', name_cs: 'Magneta',  name_bh:"Son dep trai" },
      {id:6,  image: '16', name_cs: 'RubberMan',  name_bh:"Son dep trai" },
      {id:7,  image: '17', name_cs: 'Dynama',  name_bh:"Son dep trai" },
      {id:8,  image: '18', name_cs: 'Dr IQ', name_bh:"Son dep trai" },
      {id:9,  image: '19', name_cs: 'Magma',  name_bh:"Son dep trai"},
      {id:10, image: '20', name_cs: 'Tornado', name_bh:"Son dep trai"}
    ];
    return {mussics};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(mussics: Mussic[]): number {
    return mussics.length > 0 ? Math.max(...mussics.map(hero => hero.id)) + 1 : 11;
  }
}
