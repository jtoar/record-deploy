import { User } from 'src/models'

export const users = () => {
  return User.all()
}
