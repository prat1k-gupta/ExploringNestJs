import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controllers';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  // imports: [PrismaModule], //accessing prisma module
  //No need of import because now we are using Global in auth module
  //imported the jwt module as we need it in our signin
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
