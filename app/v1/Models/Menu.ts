import { Model } from 'axe-api';

class Menu extends Model {
  get fillable() {
    return ['name', 'description'];
  }

  get validations() {
    return {
      name: 'required|min:3|max:50',
      description: 'required|min:2|max:255'
    };
  }
}

export default Menu;
