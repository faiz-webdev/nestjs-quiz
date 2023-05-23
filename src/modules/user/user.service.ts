import { Injectable } from '@nestjs/common';
import { UserRegisterReqDTO } from './dto/user-register-req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async userRegistration(req: UserRegisterReqDTO): Promise<User> {
    const user = new User();
    user.name = req.name;
    user.email = req.email;
    user.password = req.password;
    await user.save();
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return User.findOne({ where: { email: email } });
  }

  async getUserById(id: number): Promise<User | undefined> {
    return User.findOne({ where: { id } });
  }
}
