import { getCustomRepository, Repository } from "typeorm"
import { UsersRepository } from "../repositories/UserRepository"
import { User } from "../entities/User"

class UsersService {
    public usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        // Verify if user exists
        const userExists = await this.usersRepository.findOne({
            email,
        });

        // if user exists, return user
        if (userExists) {
            return userExists;
        }
        // if user doest not exist, save to DB
        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        return user;
    }
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
        return user;
      }
}

export { UsersService };