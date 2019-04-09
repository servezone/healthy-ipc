import * as plugins from './healthy-ipc.plugins';

export type THealthyTestFunction = () => 'healhty' | 'unhealthy';

export interface IHealthTest {
  cronTime: string;
  healthFunc: THealthyTestFunction;
}

export class HealthyIpc {
  registerHealthFunction () {};
}
