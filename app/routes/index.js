import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookUp() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookUp', params);
    }
  }
});
