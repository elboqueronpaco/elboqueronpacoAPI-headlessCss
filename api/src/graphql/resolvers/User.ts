import { iAuthPayload, iCreateUserInput, iLoginInput, iModels, iUser } from "interfaces";
import { doLogin } from '../../libs/auth'

export default {
  Query: {
    getUsers: (
      _: object,
      _args: object,
      { models }: { models: iModels }
    ): iUser[] => models.User.findAll()
  },
  Mutation: {
    createUser: (
      _: object,
      { input}: { input: iCreateUserInput},
      { models }: { models: iModels }
    ): iUser => models.User.create({...input}),
    login: (
      _: object,
      {input}: { input: iLoginInput},
      { models }: { models: iModels}
    ): Promise<iAuthPayload> => doLogin(input.email, input.password, models)
  }
}
