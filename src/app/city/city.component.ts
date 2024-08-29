import { Component, OnInit  } from '@angular/core';
import { filter, map, Observable, take } from 'rxjs';

interface City {
  name: string;
  code: string;
  country: string;
  flag: string;
  nameCode?: string;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  
  citiesPromise:City[] = [];
  citiesObservable:City[] = [];

  ngOnInit():void {
    //? PROMESA
    this.getCities.then((city:City) => {
      this.citiesPromise.push(city)
    })
    .catch(console.error)

    //* OBSERVABLE
    this.getCitiesObservables
    .pipe(
      filter(city => city.name !== 'London'),
      map((city) => {
        city.name =  `${city.name} - ${city.code}` 
        return city;
      }),
      take(3)
    )
    .subscribe((city: City) => {
      this.citiesPromise.push(city)
    }, (error) => {
      console.error(error);
    })

  }

  getCities: Promise<City> = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      const city: City =  this.randomCities();
      resolve(city); 
    }, 5000);
  })

  getCitiesObservables = new Observable<City>((observer => {
    const intervalId = setInterval(() => {
      const city:City = this.randomCities();
      observer.next(city);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }));


  randomCities(): City {
    const cities: City[] = [
      {
        name: '',
        code: '',
        country: '',
        flag: ''
      }
    ]

    const randomIndex = Math.floor(Math.random() * cities.length);

    return cities[randomIndex];
  }

}
