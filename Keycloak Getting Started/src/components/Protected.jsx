import  { useState, useEffect, useRef } from 'react';
import axios from 'axios'

const Protected = ({token}) => {
    const hasRun = useRef(false)
    const [docs, setDocs] = useState([]);

    const getData = async (options={})=>  {
        try{
            const {data} = await axios.get("/api/documents", options)
            setDocs(data)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(()=>{
        if (!hasRun.current) {

            const config ={
                headers: {
                    authorization: `Bearer ${token}`,
                }
            }

            getData(config);
            hasRun.current = true; // Update the ref after making the API call
        }
    },[])


    return docs ? <div>{docs.map((doc,i)=>(<li key={i}>{doc}</li>))}</div> : <div>Protected</div>

};

export default Protected;