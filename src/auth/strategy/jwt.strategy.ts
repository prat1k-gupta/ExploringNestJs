import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

//This will get the token from our header extract it and check if it is valid or not
//It is to validate the access token
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('SECRET'),
    });
  }
  async validate(payload: { sub: number; email: string }) {
    // console.log(payload);
    //this payload will be appended to user and can be used by req.user where the guard is called
    const user = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });
    delete user.hash;
    return user;
  }
}
