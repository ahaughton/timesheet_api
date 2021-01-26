import {Entity, model, property} from '@loopback/repository';

@model()
export class Task extends Entity {
  @property({
    type: 'number',
    generated: true,
    id: true,
  })
  userid?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  jobdescription: string;

  @property({
    type: 'date',
    required: true,
  })
  timestart: string;

  @property({
    type: 'date',
  })
  timestop?: string;

  @property({
    type: 'string',
    required: true,
  })
  projectname: string;

  @property({
    type: 'string',
  })
  jobcategory?: string;

  @property({
    type: 'string',
  })
  customer?: string;


  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TaskWithRelations = Task & TaskRelations;
