import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Comment() {
    let [comment, setComment] = useState('')

   const history = useHistory()

    const dispatch = useDispatch()
    
    const HandleComment = (e) => {
        e.preventDefault()

        dispatch({
            type: "SET_COMMENT",
            payload: comment
            
            
        })
        history.push("./review")
}

    return (
    <div>
      <h1>Any comments you wanna leave ?</h1>
      <form > 
         <input
          data-testid="input"    
          placeholder={'text'}
          value={comment}
          type={"text"}
          onChange={(event) => setComment(event.target.value)}     
         />
          <button data-testid="next" onClick={HandleComment}>Next</button>      
      </form>
    </div>
)



}