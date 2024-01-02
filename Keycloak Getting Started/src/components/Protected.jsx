import  { useState, useEffect, useRef } from 'react';
import axios from 'axios'

const Protected = () => {
    const hasRun = useRef(false)
    const [docs, setDocs] = useState([]);

    const getData = async ()=>  {
        try{
            const {data} = await axios.get("/api/documents")
            setDocs(data)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(()=>{
        if (!hasRun.current) {
            getData();
            hasRun.current = true; // Update the ref after making the API call
        }
    },[])


    return docs ? <div>{docs.map((doc,i)=>(<li key={i}>{doc}</li>))}</div> : <div>Protected</div>

};

export default Protected;