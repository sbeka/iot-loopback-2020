import {DefaultCrudRepository} from '@loopback/repository';
import {Camera, CameraRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CameraRepository extends DefaultCrudRepository<
  Camera,
  typeof Camera.prototype.id,
  CameraRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Camera, dataSource);
  }
}
