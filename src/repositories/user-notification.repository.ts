import {DefaultCrudRepository} from '@loopback/repository';
import {UserNotification, UserNotificationRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserNotificationRepository extends DefaultCrudRepository<
  UserNotification,
  typeof UserNotification.prototype.id,
  UserNotificationRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(UserNotification, dataSource);
  }
}
