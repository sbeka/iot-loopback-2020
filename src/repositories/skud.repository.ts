import {DefaultCrudRepository} from '@loopback/repository';
import {Skud, SkudRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SkudRepository extends DefaultCrudRepository<
  Skud,
  typeof Skud.prototype.id,
  SkudRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Skud, dataSource);
  }
}
