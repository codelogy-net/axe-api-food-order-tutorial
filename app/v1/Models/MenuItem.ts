import { Model } from 'axe-api';

class MenuItem extends Model {
  get fillable() {
    return ['name', 'price', 'menu_id'];
  }

  get validations() {
    return {
      name: 'required|min:2|max:50',
      price: 'required|numeric',
      menu_id: 'required|numeric',
    };
  }

  menu() {
    return this.hasOne('Menu', 'id', 'menu_id');
  }
}

export default MenuItem;
