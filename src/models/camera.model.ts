import {Entity, model, property} from '@loopback/repository';

@model()
export class Camera extends Entity {
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
    type: 'date',
  })
  date?: string;

  @property({
    type: 'number',
  })
  userId?: number;


  constructor(data?: Partial<Camera>) {
    super(data);
  }
}

export interface CameraRelations {
  // describe navigational properties here
}

export type CameraWithRelations = Camera & CameraRelations;
