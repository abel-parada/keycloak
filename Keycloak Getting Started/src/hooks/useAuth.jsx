import { useEffect, useState ,useRef} from 'react';
import Keycloak from 'keycloak-js'


const client = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
  });

const useAuth = () => {
    const [isLogin, setLogin] = useState(false)
    const hasRun = useRef(false)

    const initializeKeycloak = async () => {
        try {
          const res = await  client.init({
              onLoad: "login-required",
            })
          setLogin(res);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(()=>{
        if(!hasRun.current) initializeKeycloak();
        hasRun.current = true; // Update the ref after making the API call
    },[])

    return isLogin;
};

export default useAuth;