import { initializeApp } from 'firebase/app';

const apiKey = process.env.NEXT_PUBLIC_APIKEY;
const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGEID;
const appId = process.env.NEXT_PUBLIC_APPID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);

export default app;
