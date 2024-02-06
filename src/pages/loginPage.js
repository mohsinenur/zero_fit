import {Auth} from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {useNavigate} from 'react-router-dom';
import { supabase } from '../lib/helper/supabaseClient';

function Login() {
  return (
    <div className="container p-5">
        <div className="row justify-content-center">
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
  );
}

export default Login;
