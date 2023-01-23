import {
  createStore
} from 'vuex';
import Axios from 'axios';

import {
  createLogger
} from 'vuex';

import {
  CORPORATE_DATA
} from '../constants';


export default createStore({
  state: {
    form_request: ``
  },
  mutations: {
    SET_FORM_REQUEST(state, payload) {
      state.form_request = payload;
    },
  },
  actions: {
    SEND_FORM_REQUEST: async (context, payload) => {
      await Axios.post(`${CORPORATE_DATA.formSendUrl}`, payload).then((resp) => {
        context.commit(`SET_FORM_REQUEST`, resp);
      }).catch((error) => {
        context.commit(`SET_FORM_REQUEST`, error);
      })
    },
  },
  modules: {},
  plugins: [
    createLogger(),
  ],
})