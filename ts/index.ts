import * as plugins from './healthy-ipc.plugins';

export type THealthyTestFunction = () => 'healhty' | 'unhealthy';

export interface IHealthTest {
  healthFunc;
}

export class HealthyIpc {
  registerHealthFunction;
}
