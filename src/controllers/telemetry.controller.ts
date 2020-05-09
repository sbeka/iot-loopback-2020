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
import {Telemetry} from '../models';
import {TelemetryRepository} from '../repositories';

export class TelemetryController {
  constructor(
    @repository(TelemetryRepository)
    public telemetryRepository : TelemetryRepository,
  ) {}

  @post('/telemetries', {
    responses: {
      '200': {
        description: 'Telemetry model instance',
        content: {'application/json': {schema: getModelSchemaRef(Telemetry)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Telemetry, {
            title: 'NewTelemetry',
            exclude: ['id'],
          }),
        },
      },
    })
    telemetry: Omit<Telemetry, 'id'>,
  ): Promise<Telemetry> {
    return this.telemetryRepository.create(telemetry);
  }

  @get('/telemetries/count', {
    responses: {
      '200': {
        description: 'Telemetry model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Telemetry) where?: Where<Telemetry>,
  ): Promise<Count> {
    return this.telemetryRepository.count(where);
  }

  @get('/telemetries', {
    responses: {
      '200': {
        description: 'Array of Telemetry model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Telemetry, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Telemetry) filter?: Filter<Telemetry>,
  ): Promise<Telemetry[]> {
    return this.telemetryRepository.find(filter);
  }

  @patch('/telemetries', {
    responses: {
      '200': {
        description: 'Telemetry PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Telemetry, {partial: true}),
        },
      },
    })
    telemetry: Telemetry,
    @param.where(Telemetry) where?: Where<Telemetry>,
  ): Promise<Count> {
    return this.telemetryRepository.updateAll(telemetry, where);
  }

  @get('/telemetries/{id}', {
    responses: {
      '200': {
        description: 'Telemetry model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Telemetry, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Telemetry, {exclude: 'where'}) filter?: FilterExcludingWhere<Telemetry>
  ): Promise<Telemetry> {
    return this.telemetryRepository.findById(id, filter);
  }

  @patch('/telemetries/{id}', {
    responses: {
      '204': {
        description: 'Telemetry PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Telemetry, {partial: true}),
        },
      },
    })
    telemetry: Telemetry,
  ): Promise<void> {
    await this.telemetryRepository.updateById(id, telemetry);
  }

  @put('/telemetries/{id}', {
    responses: {
      '204': {
        description: 'Telemetry PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() telemetry: Telemetry,
  ): Promise<void> {
    await this.telemetryRepository.replaceById(id, telemetry);
  }

  @del('/telemetries/{id}', {
    responses: {
      '204': {
        description: 'Telemetry DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.telemetryRepository.deleteById(id);
  }
}
