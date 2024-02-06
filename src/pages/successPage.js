import {createClient} from '@supabase/supabase-js';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const supabase = createClient(
    "https://pwlbbqxxxschcnxockcb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bGJicXh4eHNjaGNueG9ja2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3ODE0MTEsImV4cCI6MjAyMjM1NzQxMX0.dkpiahb2VbY7j-tGNsE1eRtqvGY3kKCPFV8V1Gy-VVw"
)

function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.data){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        } 
        getUserData();
    }, []);

    async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        navigate("/login");
    }

    return (
        <div className="App">
        <header className="App-header">
            { Object.keys(user).length !== 0 ?
                <>
                    <h1>Success</h1>
                    <button onClick={() => signOutUser()}>Sign Out</button>
                </>
            :   <>
                    <h1>User is not logged in</h1>
                    <button onClick={() => navigate("/")}>Go Back To Home</button>
                </>
            
            }
        </header>
        </div>
    );
}

export default Success;
