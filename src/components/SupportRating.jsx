import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function SupportRating() {
    let [supportRate, setSupportRate] = useState('')

   const history = useHistory()

    const dispatch = useDispatch()
    
    const HandleSupport = (e) => {
        e.preventDefault()

        dispatch({
            type: "SET_SUPPORT",
            payload:  supportRate
            
            
        })
        history.push("./comment")
}

    return (
    <div>
      <h1>How well are you being supported ?</h1>
      <form > 
         <input  
          data-testid="input"
          placeholder={'1-5'}
          value={supportRate}
          type={"number"}
          onChange={(event) => setSupportRate(event.target.value)}     
         />
          <button data-testid="next" onClick={HandleSupport}>Next</button>      
      </form>
    </div>
)



}