import ModalFunctionality from 'discourse/mixins/modal-functionality';
import { setting } from 'discourse/lib/computed';
import { action } from "@ember/object";
import showModal from "discourse/lib/show-modal";

export default Ember.Controller.extend(ModalFunctionality, {
  login: Ember.inject.controller(),

  ssoEnabled: setting('enable_discourse_connect'),

  actions: {
    externalLogin(provider) {
      this.get('login').send('externalLogin', provider);
    }
  },
  
  @action
  showLoginGate(event) {
    event?.preventDefault();
    showModal("login");
  },
    
  @action
  showCreateAccountGate(event) {
    event?.preventDefault();
    showModal("createAccount", {
      modalClass: "create-account",
    });
  },
});
