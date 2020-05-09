import {Entity, model, property} from '@loopback/repository';

@model()
export class Telemetry extends Entity {
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
    type: 'number',
  })
  data?: number;

  @property({
    type: 'array',
    itemType: 'object',
  })
  history?: object[];

  @property({
    type: 'number',
  })
  userId?: number;

  @property({
    type: 'string',
  })
  type?: string;


  constructor(data?: Partial<Telemetry>) {
    super(data);
  }
}

export interface TelemetryRelations {
  // describe navigational properties here
}

export type TelemetryWithRelations = Telemetry & TelemetryRelations;
