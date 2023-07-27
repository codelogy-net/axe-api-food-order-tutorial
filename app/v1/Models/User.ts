import { Model } from 'axe-api';

class User extends Model {
  get fillable() {
    return ['email', 'firstName', 'lastName', 'password'];
  }

  get validations() {
    return {
      email: 'required|min:3|max:100|email',
      firstName: 'required|min:2|max:50',
      lastName: 'required|min:2|max:50',
      password: 'required|min:6|max:100',
    };
  }

  get hiddens() {
    return ['password'];
  }
}

export default User;
