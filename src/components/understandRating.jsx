import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function UnderstandingRating() {
     let [understanding,setUnderstanding] = useState('')

   const history = useHistory()

    const dispatch = useDispatch()
    
    const HandleUnderstanding = (e) => {
        e.preventDefault()

        dispatch({
            type: "SET_UNDERSTANDING",
            payload:  understanding
            
            
        })
        history.push("./support")
}

    return (
    <div>
      <h1>How well are you understanding the content ?</h1>
      <form > 
        <input  
          data-testid="input"
          placeholder={'1-5'}
          value={understanding}
          type={"number"}
          onChange={(event) => setUnderstanding(event.target.value)}     
       />
          <button data-testid="next" onClick={HandleUnderstanding}>Next</button>      
      </form>
    </div>
)
    
}