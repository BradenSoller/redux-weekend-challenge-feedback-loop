
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function AddFeeling() {
    let [feeling, setFeelings] = useState('')

   const history = useHistory()

    const dispatch = useDispatch()
    
    const HandleFeeling = (e) => {
        e.preventDefault()

        dispatch({
            type: "SET_FEELINGS",
            payload: feeling
            
            
        })
        history.push("./understanding")
}

    return (
    <div>
      <h1>How well are you feeling today ?</h1>
     <form >
        <input  
          data-testid="input"
          placeholder={'1-5'}
          value={feeling}
          type={"number"}
          onChange={(event) => setFeelings(event.target.value)}     
        />
          <button data-testid="next" onClick={HandleFeeling}>Next</button>      
      </form>
    </div>
)



}