import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class MessageRespository extends Repository<Message> {}

export { MessageRespository };