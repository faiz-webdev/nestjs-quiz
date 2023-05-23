import { UserRoles } from 'src/modules/user/enums/user.enum';
import { User } from 'src/modules/user/user.entity';
import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class UserCreateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await getManager().query('TRUNCATE users');

    await factory(User)().create({
      name: 'John',
      email: 'john@jm.com',
      password: 'Password@123',
      role: UserRoles.ADMIN,
    });

    await factory(User)().createMany(20);
  }
}
