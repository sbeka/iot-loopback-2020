import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Sensor} from '../models';
import {SensorRepository} from '../repositories';

export class SensorController {
  constructor(
    @repository(SensorRepository)
    public sensorRepository : SensorRepository,
  ) {}

  @post('/sensors', {
    responses: {
      '200': {
        description: 'Sensor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sensor)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensor, {
            title: 'NewSensor',
            exclude: ['id'],
          }),
        },
      },
    })
    sensor: Omit<Sensor, 'id'>,
  ): Promise<Sensor> {
    return this.sensorRepository.create(sensor);
  }

  @get('/sensors/count', {
    responses: {
      '200': {
        description: 'Sensor model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Sensor) where?: Where<Sensor>,
  ): Promise<Count> {
    return this.sensorRepository.count(where);
  }

  @get('/sensors', {
    responses: {
      '200': {
        description: 'Array of Sensor model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Sensor, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Sensor) filter?: Filter<Sensor>,
  ): Promise<Sensor[]> {
    return this.sensorRepository.find(filter);
  }

  @patch('/sensors', {
    responses: {
      '200': {
        description: 'Sensor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensor, {partial: true}),
        },
      },
    })
    sensor: Sensor,
    @param.where(Sensor) where?: Where<Sensor>,
  ): Promise<Count> {
    return this.sensorRepository.updateAll(sensor, where);
  }

  @get('/sensors/{id}', {
    responses: {
      '200': {
        description: 'Sensor model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Sensor, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sensor, {exclude: 'where'}) filter?: FilterExcludingWhere<Sensor>
  ): Promise<Sensor> {
    return this.sensorRepository.findById(id, filter);
  }

  @patch('/sensors/{id}', {
    responses: {
      '204': {
        description: 'Sensor PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensor, {partial: true}),
        },
      },
    })
    sensor: Sensor,
  ): Promise<void> {
    await this.sensorRepository.updateById(id, sensor);
  }

  @put('/sensors/{id}', {
    responses: {
      '204': {
        description: 'Sensor PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sensor: Sensor,
  ): Promise<void> {
    await this.sensorRepository.replaceById(id, sensor);
  }

  @del('/sensors/{id}', {
    responses: {
      '204': {
        description: 'Sensor DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sensorRepository.deleteById(id);
  }
}
