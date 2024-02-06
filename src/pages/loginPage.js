import {createClient} from '@supabase/supabase-js';
import {Auth} from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {useNavigate} from 'react-router-dom';

const supabase = createClient(
    "https://pwlbbqxxxschcnxockcb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bGJicXh4eHNjaGNueG9ja2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3ODE0MTEsImV4cCI6MjAyMjM1NzQxMX0.dkpiahb2VbY7j-tGNsE1eRtqvGY3kKCPFV8V1Gy-VVw"
)

function Login() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event, session) => {
        if(event === 'SIGNED_IN' && session){
            navigate("/success");
        }else{
            navigate("/login");
        }
    })
  return (
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
  );
}

export default Login;
