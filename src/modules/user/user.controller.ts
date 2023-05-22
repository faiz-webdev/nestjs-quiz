import {
  Body,
  Controller,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterReqDTO } from './dto/user-register-req.dto';
import { SETINGS } from 'src/app.utils';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async userRegistration(
    @Body(SETINGS.VALIDATION_PIPE)
    body: UserRegisterReqDTO,
  ): Promise<User> {
    return this.userService.userRegistration(body);
  }
}
