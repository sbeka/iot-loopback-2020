import {Entity, model, property} from '@loopback/repository';

@model()
export class Skud extends Entity {
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
  photo?: string;

  @property({
    type: 'number',
  })
  microdistrict?: number;

  @property({
    type: 'boolean',
  })
  isOpen?: boolean;


  constructor(data?: Partial<Skud>) {
    super(data);
  }
}

export interface SkudRelations {
  // describe navigational properties here
}

export type SkudWithRelations = Skud & SkudRelations;
