import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorators';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  @UseGuards(new JwtGuard())
  getMe(@GetUser('id') userId: number, @GetUser() user: User) {
    console.log({ userId, user });
    return this.userService.getMe();
  }
}
