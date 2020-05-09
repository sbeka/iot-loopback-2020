import {DefaultCrudRepository} from '@loopback/repository';
import {Sensor, SensorRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SensorRepository extends DefaultCrudRepository<
  Sensor,
  typeof Sensor.prototype.id,
  SensorRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Sensor, dataSource);
  }
}
