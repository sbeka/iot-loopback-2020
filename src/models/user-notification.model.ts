import {Entity, model, property} from '@loopback/repository';

@model()
export class UserNotification extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

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
  userId?: number;


  constructor(data?: Partial<UserNotification>) {
    super(data);
  }
}

export interface UserNotificationRelations {
  // describe navigational properties here
}

export type UserNotificationWithRelations = UserNotification & UserNotificationRelations;
