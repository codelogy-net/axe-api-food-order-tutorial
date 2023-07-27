import { Model } from 'axe-api';

class Statistics extends Model {
  get fillable() {
    return ['name', 'uid', 'total'];
  }

  get validations() {
    return {
      name: 'required|min:3|max:50',
      uid: 'required',
      total: 'required'
    };
  }
}

export default Statistics;
