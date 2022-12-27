import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // we want this module globally so we are making it global and we want the service to be exported as a global service and that can be used by any module in src folder
//prisma service is used in auth service without getting imported
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
