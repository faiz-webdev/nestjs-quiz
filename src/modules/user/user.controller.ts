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
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User,
  })
  @ApiBadRequestResponse({ description: 'User cannot register. Try again!' })
  async userRegistration(
    @Body(SETINGS.VALIDATION_PIPE)
    body: UserRegisterReqDTO,
  ): Promise<User> {
    return this.userService.userRegistration(body);
  }
}
