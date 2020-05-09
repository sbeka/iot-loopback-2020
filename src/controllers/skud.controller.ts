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
import {Skud} from '../models';
import {SkudRepository} from '../repositories';

export class SkudController {
  constructor(
    @repository(SkudRepository)
    public skudRepository : SkudRepository,
  ) {}

  @post('/skuds', {
    responses: {
      '200': {
        description: 'Skud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Skud)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Skud, {
            title: 'NewSkud',
            exclude: ['id'],
          }),
        },
      },
    })
    skud: Omit<Skud, 'id'>,
  ): Promise<Skud> {
    return this.skudRepository.create(skud);
  }

  @get('/skuds/count', {
    responses: {
      '200': {
        description: 'Skud model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Skud) where?: Where<Skud>,
  ): Promise<Count> {
    return this.skudRepository.count(where);
  }

  @get('/skuds', {
    responses: {
      '200': {
        description: 'Array of Skud model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Skud, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Skud) filter?: Filter<Skud>,
  ): Promise<Skud[]> {
    return this.skudRepository.find(filter);
  }

  @patch('/skuds', {
    responses: {
      '200': {
        description: 'Skud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Skud, {partial: true}),
        },
      },
    })
    skud: Skud,
    @param.where(Skud) where?: Where<Skud>,
  ): Promise<Count> {
    return this.skudRepository.updateAll(skud, where);
  }

  @get('/skuds/{id}', {
    responses: {
      '200': {
        description: 'Skud model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Skud, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Skud, {exclude: 'where'}) filter?: FilterExcludingWhere<Skud>
  ): Promise<Skud> {
    return this.skudRepository.findById(id, filter);
  }

  @patch('/skuds/{id}', {
    responses: {
      '204': {
        description: 'Skud PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Skud, {partial: true}),
        },
      },
    })
    skud: Skud,
  ): Promise<void> {
    await this.skudRepository.updateById(id, skud);
  }

  @put('/skuds/{id}', {
    responses: {
      '204': {
        description: 'Skud PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() skud: Skud,
  ): Promise<void> {
    await this.skudRepository.replaceById(id, skud);
  }

  @del('/skuds/{id}', {
    responses: {
      '204': {
        description: 'Skud DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.skudRepository.deleteById(id);
  }
}
