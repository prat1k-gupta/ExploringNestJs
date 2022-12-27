import { Module } from '@nestjs/common';
import { AuthController } from './auth.controllers';
import { AuthService } from './auth.service';

@Module({
  // imports: [PrismaModule], //accessing prisma module
  //No need of import because now we are using Global in auth module
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
