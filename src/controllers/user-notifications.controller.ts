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
import {UserNotification} from '../models';
import {UserNotificationRepository} from '../repositories';

export class UserNotificationsController {
  constructor(
    @repository(UserNotificationRepository)
    public userNotificationRepository : UserNotificationRepository,
  ) {}

  @post('/user-notifications', {
    responses: {
      '200': {
        description: 'UserNotification model instance',
        content: {'application/json': {schema: getModelSchemaRef(UserNotification)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserNotification, {
            title: 'NewUserNotification',
            exclude: ['id'],
          }),
        },
      },
    })
    userNotification: Omit<UserNotification, 'id'>,
  ): Promise<UserNotification> {
    return this.userNotificationRepository.create(userNotification);
  }

  @get('/user-notifications/count', {
    responses: {
      '200': {
        description: 'UserNotification model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(UserNotification) where?: Where<UserNotification>,
  ): Promise<Count> {
    return this.userNotificationRepository.count(where);
  }

  @get('/user-notifications', {
    responses: {
      '200': {
        description: 'Array of UserNotification model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(UserNotification, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(UserNotification) filter?: Filter<UserNotification>,
  ): Promise<UserNotification[]> {
    return this.userNotificationRepository.find(filter);
  }

  @patch('/user-notifications', {
    responses: {
      '200': {
        description: 'UserNotification PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserNotification, {partial: true}),
        },
      },
    })
    userNotification: UserNotification,
    @param.where(UserNotification) where?: Where<UserNotification>,
  ): Promise<Count> {
    return this.userNotificationRepository.updateAll(userNotification, where);
  }

  @get('/user-notifications/{id}', {
    responses: {
      '200': {
        description: 'UserNotification model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(UserNotification, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UserNotification, {exclude: 'where'}) filter?: FilterExcludingWhere<UserNotification>
  ): Promise<UserNotification> {
    return this.userNotificationRepository.findById(id, filter);
  }

  @patch('/user-notifications/{id}', {
    responses: {
      '204': {
        description: 'UserNotification PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserNotification, {partial: true}),
        },
      },
    })
    userNotification: UserNotification,
  ): Promise<void> {
    await this.userNotificationRepository.updateById(id, userNotification);
  }

  @put('/user-notifications/{id}', {
    responses: {
      '204': {
        description: 'UserNotification PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userNotification: UserNotification,
  ): Promise<void> {
    await this.userNotificationRepository.replaceById(id, userNotification);
  }

  @del('/user-notifications/{id}', {
    responses: {
      '204': {
        description: 'UserNotification DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userNotificationRepository.deleteById(id);
  }
}
