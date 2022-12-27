import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    //hash the password
    const hash = await argon.hash(dto.hash);

    //save the user in db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash: hash,
      },
    });
    //return the saved user
    return user;
  }

  signin() {
    return 'user signed in';
  }
}
