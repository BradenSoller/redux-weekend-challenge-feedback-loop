
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function ResetFeedback() {
    
const history = useHistory()

    const goToHome = () => {
history.push('./')
    }
    
    
    return (
        <>
        <h1>Thanks !</h1>
            <button data-testid="next" onClick={goToHome}>Leave new Feedback</button>
            </>
    )



}