import Ember from 'ember'
import Unauthenticated from 'ember-simple-auth/mixins/unauthenticated-route-mixin'

export default Ember.Route.extend(Unauthenticated, {
  pageTitle: 'Login',
  outer: true
})
