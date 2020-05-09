import {Entity, model, property} from '@loopback/repository';

@model()
export class Sensor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  imei?: string;

  @property({
    type: 'string',
  })
  icon?: string;

  @property({
    type: 'number',
  })
  data?: number;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  userId?: number;


  constructor(data?: Partial<Sensor>) {
    super(data);
  }
}

export interface SensorRelations {
  // describe navigational properties here
}

export type SensorWithRelations = Sensor & SensorRelations;
