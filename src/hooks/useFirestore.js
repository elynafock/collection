import { useState, useEffect} from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';

const useFirestore = (path) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(projectFirestore, path), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snap) => {  
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents);
        });

        return () => unsub();

    }, [path])

    return { docs };
}

export default useFirestore;