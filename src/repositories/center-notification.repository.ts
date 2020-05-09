import {DefaultCrudRepository} from '@loopback/repository';
import {CenterNotification, CenterNotificationRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CenterNotificationRepository extends DefaultCrudRepository<
  CenterNotification,
  typeof CenterNotification.prototype.id,
  CenterNotificationRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CenterNotification, dataSource);
  }
}
