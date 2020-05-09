import {DefaultCrudRepository} from '@loopback/repository';
import {Telemetry, TelemetryRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TelemetryRepository extends DefaultCrudRepository<
  Telemetry,
  typeof Telemetry.prototype.id,
  TelemetryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Telemetry, dataSource);
  }
}
