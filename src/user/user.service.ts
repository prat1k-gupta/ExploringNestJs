import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getMe() {
    return 'user created';
  }
}
