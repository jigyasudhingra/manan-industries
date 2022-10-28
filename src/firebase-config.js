import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB2fy3uDiWOT2cRMsqaKNFMqyazF0DEUjE',
  authDomain: 'manan-industries.firebaseapp.com',
  projectId: 'manan-industries',
  storageBucket: 'manan-industries.appspot.com',
  messagingSenderId: '1046216004749',
  appId: '1:1046216004749:web:32282f32b69b7428773ec4',
  measurementId: 'G-X46E8GFFZE',
}

const app = initializeApp(firebaseConfig)
// eslint-disable-next-line import/prefer-default-export
export const db = getFirestore(app)
export const storage = getStorage()
