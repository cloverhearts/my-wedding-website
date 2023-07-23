import Vue from 'vue'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../../firebaseConfig'

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth();

Vue.prototype.$firebase = app;
Vue.prototype.$analytics = analytics;
Vue.prototype.$firebaseDB = db;
Vue.prototype.$firebaseAuth = auth;
