import {useState, useEffect } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
  
    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file)
        const collectionRef = collection(projectFirestore, 'images');
    
        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                const createdAt = serverTimestamp();
                addDoc(collectionRef, { url, createdAt })
                setUrl(url);
            });
        })

    },[file])

    return {progress, url, error }
}

export default useStorage;
