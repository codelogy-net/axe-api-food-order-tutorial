import { Model } from 'axe-api';

class Order extends Model {
  get fillable() {
    return ['quantity', 'menu_item_id', 'user_id'];
  }

  get validations() {
    return {
      quantity: 'required|numeric',
      menu_item_id: 'required|numeric',
      user_id: 'required|numeric',
    };
  }

  menuItem() {
    return this.hasOne('MenuItem', 'id', 'menu_item_id');
  }

  user() {
    return this.hasOne('User', 'id', 'user_id');
  }
}

export default Order;
