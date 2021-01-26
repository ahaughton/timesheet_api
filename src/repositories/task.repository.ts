import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TimesheetDsDataSource} from '../datasources';
import {Task, TaskRelations} from '../models';

export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype.userid,
  TaskRelations
  > {
  constructor(
    @inject('datasources.timesheetDS') dataSource: TimesheetDsDataSource,
  ) {
    super(Task, dataSource);
  }
}
