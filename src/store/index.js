/* eslint-disable no-unused-vars */
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
    form_request: ``,
    is_form_request_error: false
  },
  mutations: {
    SET_FORM_REQUEST(state, payload) {
      state.form_request = payload;
    },
    SET_FORM_REQUEST_ERROR(state, payload) {
      state.is_form_request_error = payload;
    }
  },
  actions: {
    SEND_FORM_REQUEST: async (context, payload) => {
      await Axios.post(`${CORPORATE_DATA.formSendUrl}`, payload).then((resp) => {
        context.commit(`SET_FORM_REQUEST`, resp);
      });
    },
  },
  modules: {},
  plugins: [
    createLogger(),
  ],
})