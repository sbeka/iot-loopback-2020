import {Entity, model, property} from '@loopback/repository';

@model()
export class CenterNotification extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  userId?: number;

  @property({
    type: 'string',
  })
  text?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'number',
  })
  district?: number;


  constructor(data?: Partial<CenterNotification>) {
    super(data);
  }
}

export interface CenterNotificationRelations {
  // describe navigational properties here
}

export type CenterNotificationWithRelations = CenterNotification & CenterNotificationRelations;
