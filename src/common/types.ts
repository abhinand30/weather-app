export interface WeatherInterface {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  
  export interface Sys {
    country: string;
    sunrise: number;
    sunset: number;
  }
  
  export interface Clouds {
    all: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }
  
  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }
  
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface Coord {
    lon: number;
    lat: number;
  }

export interface weatherProps{
    weatherData:WeatherInterface
}

export interface LocationInterface {
    name: string;
    local_names?: Localnames;
    lat: number;
    lon: number;
    country: string;
    state?: string;
  }
  
  export interface Localnames {
    en: string;
    el: string;
    cs: string;
    ml: string;
    he: string;
    th: string;
    ar: string;
    de: string;
    bn: string;
    ko: string;
    pt: string;
    ur: string;
    fr: string;
    eo: string;
    ne: string;
    ru: string;
    hi: string;
    lv: string;
    ms: string;
    pa: string;
    zh: string;
    my: string;
    te: string;
    es: string;
    kn: string;
    ja: string;
    oc: string;
    ta: string;
    ku: string;
    uk: string;
    fa: string;
    tt: string;
  }
  export interface searchProps {
    setLocation: (value: string) => void
  }

  export interface titleProps{
    name:string;
    weather:{
      description:string;
      main:string;
    }
    temp:number;
    country:string;
  }