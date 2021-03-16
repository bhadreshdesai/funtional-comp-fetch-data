/**
 * A Star Wars film
 */
export interface Film {
  /**
   * The people resources featured within this film.
   */
  characters: any[];
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: Date;
  /**
   * The director of this film.
   */
  director: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: Date;
  /**
   * The episode number of this film.
   */
  episode_id: number;
  /**
   * The opening crawl text at the beginning of this film.
   */
  opening_crawl: string;
  /**
   * The planet resources featured within this film.
   */
  planets: any[];
  /**
   * The producer(s) of this film.
   */
  producer: string;
  /**
   * The release date at original creator country.
   */
  release_date: Date;
  /**
   * The species resources featured within this film.
   */
  species: any[];
  /**
   * The starship resources featured within this film.
   */
  starships: any[];
  /**
   * The title of this film.
   */
  title: string;
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The vehicle resources featured within this film.
   */
  vehicles: any[];
}
