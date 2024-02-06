import { supabase } from '../lib/helper/supabaseClient';
import React, { useState, useRef } from 'react';
// import {useNavigate} from 'react-router-dom';

function Home({user}) {

    // const navigate = useNavigate();

    const inputTitle = useRef();
    const inputType = useRef();
    const inputStartAt = useRef();
    const inputEndAt = useRef();
    const inputGoalAmount = useRef();
    const inputGoalUnit = useRef();
    const [error, setState] = useState(null);


    const logout = async () => {
        await supabase.auth.signOut();
    };

    const handleCreateGoal = async () => {
        const title = inputTitle.current.value;
        const type = inputType.current.value;
        const start_at = inputStartAt.current.value;
        const end_at = inputEndAt.current.value;
        const goal_amount = inputGoalAmount.current.value;
        const goal_unit = inputGoalUnit.current.value;

        const res = await supabase
            .from("goals")
            .insert({title, type, start_at, end_at, goal_amount, goal_unit, user_id: user.id})
            .select("*")
            .single();

        console.log(res);

    };

    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <header className="App-header">
                        <h1 className="mb-4 text-center">Set Your Goal</h1>
                        <form>
                            <div className="mb-3">
                                <input className="form-control" ref={inputTitle} placeholder="Title" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" ref={inputType} placeholder="Type" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" ref={inputStartAt} placeholder="Ex: 2024-02-06 13:15" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" ref={inputEndAt} placeholder="Ex: 2024-02-06 13:25" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" ref={inputGoalAmount} placeholder="Goal Amount" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" ref={inputGoalUnit} placeholder="Goal Unit" />
                            </div>
                            <button type="button" className="btn btn-primary mb-3 ms-auto" onClick={handleCreateGoal}>Add Goal</button>
                        </form>
                        <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default Home;