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
import {CenterNotification} from '../models';
import {CenterNotificationRepository} from '../repositories';

export class CenterNotificationController {
  constructor(
    @repository(CenterNotificationRepository)
    public centerNotificationRepository : CenterNotificationRepository,
  ) {}

  @post('/center-notifications', {
    responses: {
      '200': {
        description: 'CenterNotification model instance',
        content: {'application/json': {schema: getModelSchemaRef(CenterNotification)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterNotification, {
            title: 'NewCenterNotification',
            exclude: ['id'],
          }),
        },
      },
    })
    centerNotification: Omit<CenterNotification, 'id'>,
  ): Promise<CenterNotification> {
    return this.centerNotificationRepository.create(centerNotification);
  }

  @get('/center-notifications/count', {
    responses: {
      '200': {
        description: 'CenterNotification model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CenterNotification) where?: Where<CenterNotification>,
  ): Promise<Count> {
    return this.centerNotificationRepository.count(where);
  }

  @get('/center-notifications', {
    responses: {
      '200': {
        description: 'Array of CenterNotification model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CenterNotification, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CenterNotification) filter?: Filter<CenterNotification>,
  ): Promise<CenterNotification[]> {
    return this.centerNotificationRepository.find(filter);
  }

  @patch('/center-notifications', {
    responses: {
      '200': {
        description: 'CenterNotification PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterNotification, {partial: true}),
        },
      },
    })
    centerNotification: CenterNotification,
    @param.where(CenterNotification) where?: Where<CenterNotification>,
  ): Promise<Count> {
    return this.centerNotificationRepository.updateAll(centerNotification, where);
  }

  @get('/center-notifications/{id}', {
    responses: {
      '200': {
        description: 'CenterNotification model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CenterNotification, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CenterNotification, {exclude: 'where'}) filter?: FilterExcludingWhere<CenterNotification>
  ): Promise<CenterNotification> {
    return this.centerNotificationRepository.findById(id, filter);
  }

  @patch('/center-notifications/{id}', {
    responses: {
      '204': {
        description: 'CenterNotification PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterNotification, {partial: true}),
        },
      },
    })
    centerNotification: CenterNotification,
  ): Promise<void> {
    await this.centerNotificationRepository.updateById(id, centerNotification);
  }

  @put('/center-notifications/{id}', {
    responses: {
      '204': {
        description: 'CenterNotification PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() centerNotification: CenterNotification,
  ): Promise<void> {
    await this.centerNotificationRepository.replaceById(id, centerNotification);
  }

  @del('/center-notifications/{id}', {
    responses: {
      '204': {
        description: 'CenterNotification DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.centerNotificationRepository.deleteById(id);
  }
}
