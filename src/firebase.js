import { initializeApp } from 'firebase/app';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDl8xDzkadwGjXMtEL4Vk1-OMCWe06UtwM',
  authDomain: 'theshepherd-77005.firebaseapp.com',
  databaseURL: 'https://theshepherd-77005-default-rtdb.firebaseio.com',
  projectId: 'theshepherd-77005',
  storageBucket: 'theshepherd-77005.appspot.com',
  messagingSenderId: '377153965613',
  appId: '1:377153965613:web:b9701304ccb7fcdac472a4',
  measurementId: 'G-Q0K4FG6XDH',
};

const app = initializeApp(firebaseConfig);

export default app;
