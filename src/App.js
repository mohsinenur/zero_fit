// import './styles.css';

import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './lib/helper/supabaseClient';
import {Auth} from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './pages/nav/sidebar';
import Home from './pages/homePage';
import Goal from './pages/goalPage';


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
            localStorage.setItem('supabaseSession', JSON.stringify(session));
            break;
          
          case "SIGNED_OUT":
            setUser(null);
            localStorage.removeItem('supabaseSession');
            break;
          
          default:
        }
      }
    );

    const storedSession = localStorage.getItem('supabaseSession');
    if (storedSession) {
      setUser(JSON.parse(storedSession)?.user);
    }

    return () => {
      authListener.subscription.unsubscribe();
    }
    
  }, [])

  return (
    <Router>
    <div>
      {
        user ? (
          <>
          <Sidebar />
            <div style={{ marginLeft: '250px', padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/goals" element={<Goal />} />
              </Routes>
            </div>
          </>
        ) : (
          <>
            <div className="container p-5"  style={{ maxWidth: '400px' }}>
              <div className="row justify-content-center">
              <h3 className="text-center">ZERO FITNESS</h3>
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
            </div>
          </div>
          </>
        )
      }
    </div>
    </Router>
  )
}

