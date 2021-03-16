/**
 * A vehicle.
 */
export interface Vehicle {
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  cargo_capacity: string;
  /**
   * The maximum length of time that this vehicle can provide consumables for its entire crew
   * without having to resupply.
   */
  consumables: string;
  /**
   * The cost of this vehicle new, in galactic credits.
   */
  cost_in_credits: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: Date;
  /**
   * The number of personnel needed to run or pilot this vehicle.
   */
  crew: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: Date;
  /**
   * An array of Film URL Resources that this vehicle has appeared in.
   */
  films: any[];
  /**
   * The length of this vehicle in meters.
   */
  length: string;
  /**
   * The manufacturer of this vehicle. Comma seperated if more than one.
   */
  manufacturer: string;
  /**
   * The maximum speed of this vehicle in atmosphere.
   */
  max_atmosphering_speed: string;
  /**
   * The model or official name of this vehicle. Such as All Terrain Attack Transport.
   */
  model: string;
  /**
   * The name of this vehicle. The common name, such as Sand Crawler.
   */
  name: string;
  /**
   * The number of non-essential people this vehicle can transport.
   */
  passengers: string;
  /**
   * An array of People URL Resources that this vehicle has been piloted by.
   */
  pilots: any[];
  /**
   * The hypermedia URL of this resource.
   */
  url: string;
  /**
   * The class of this vehicle, such as Wheeled.
   */
  vehicle_class: string;
}
