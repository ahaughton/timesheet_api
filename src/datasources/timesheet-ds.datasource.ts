import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'timesheetDS',
  connector: 'mongodb',
  url: 'mongodb+srv://ahaughton:tajaudit01@cluster0.ltrw5.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
  host: 'cluster0.ltrw5.gcp.mongodb.net',
  port: 27017,
  user: 'ahaughton',
  password: 'tajaudit01',
  database: 'timesheetdb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TimesheetDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'timesheetDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.timesheetDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
