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
import {Camera} from '../models';
import {CameraRepository} from '../repositories';

export class CameraController {
  constructor(
    @repository(CameraRepository)
    public cameraRepository : CameraRepository,
  ) {}

  @post('/cameras', {
    responses: {
      '200': {
        description: 'Camera model instance',
        content: {'application/json': {schema: getModelSchemaRef(Camera)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Camera, {
            title: 'NewCamera',
            exclude: ['id'],
          }),
        },
      },
    })
    camera: Omit<Camera, 'id'>,
  ): Promise<Camera> {
    return this.cameraRepository.create(camera);
  }

  @get('/cameras/count', {
    responses: {
      '200': {
        description: 'Camera model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Camera) where?: Where<Camera>,
  ): Promise<Count> {
    return this.cameraRepository.count(where);
  }

  @get('/cameras', {
    responses: {
      '200': {
        description: 'Array of Camera model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Camera, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Camera) filter?: Filter<Camera>,
  ): Promise<Camera[]> {
    return this.cameraRepository.find(filter);
  }

  @patch('/cameras', {
    responses: {
      '200': {
        description: 'Camera PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Camera, {partial: true}),
        },
      },
    })
    camera: Camera,
    @param.where(Camera) where?: Where<Camera>,
  ): Promise<Count> {
    return this.cameraRepository.updateAll(camera, where);
  }

  @get('/cameras/{id}', {
    responses: {
      '200': {
        description: 'Camera model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Camera, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Camera, {exclude: 'where'}) filter?: FilterExcludingWhere<Camera>
  ): Promise<Camera> {
    return this.cameraRepository.findById(id, filter);
  }

  @patch('/cameras/{id}', {
    responses: {
      '204': {
        description: 'Camera PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Camera, {partial: true}),
        },
      },
    })
    camera: Camera,
  ): Promise<void> {
    await this.cameraRepository.updateById(id, camera);
  }

  @put('/cameras/{id}', {
    responses: {
      '204': {
        description: 'Camera PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() camera: Camera,
  ): Promise<void> {
    await this.cameraRepository.replaceById(id, camera);
  }

  @del('/cameras/{id}', {
    responses: {
      '204': {
        description: 'Camera DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cameraRepository.deleteById(id);
  }
}
