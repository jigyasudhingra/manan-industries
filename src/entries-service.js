import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase-config'

const EntriesCollectionRef = collection(db, 'entries')
class EntriesDataService {
  // eslint-disable-next-line class-methods-use-this
  addEntry = (newEntry) => {
    return addDoc(EntriesCollectionRef, newEntry)
  }
}

export default new EntriesDataService()
