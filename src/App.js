// import './styles.css';

import React, {useEffect, useState} from 'react';
import { supabase } from './lib/helper/supabaseClient';
import {Auth} from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Home from './pages/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  const [user, setUser] = useState(null);

  useEffect(()=> {
    const session = supabase.auth.getSession();
    setUser(session?.user);

    const {data: authListener} = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch(event){
          case "SIGNED_IN":
            setUser(session?.user);
            break;
          
          case "SIGNED_OUT":
            setUser(null);
            break;
          
          default:
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    }
    
  }, [])

  return (
    <div>
      {
        user ? (
          <>
            <Home user={user} />
          </>
        ) : (
          <>
            <div className="App">
              <header className="App-header">
                <Auth 
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                    providers={['discord']}
                />
              </header>
            </div>
          </>
        )
      }
    </div>
  )
}

