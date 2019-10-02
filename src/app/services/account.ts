import User from '../infra/mappings/user'

export const create = async (user):Promise<void> => {
  await User.create(user)
}
