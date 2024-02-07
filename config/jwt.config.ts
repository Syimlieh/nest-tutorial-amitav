import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import configuration from './configuration';

export const jwtConfig: JwtModuleAsyncOptions = {
  // for async we are using this useFactory
  useFactory: () => {
    return {
      secret: configuration().appSecret,
      signOptions: { expiresIn: '1h' },
    };
  },
};
