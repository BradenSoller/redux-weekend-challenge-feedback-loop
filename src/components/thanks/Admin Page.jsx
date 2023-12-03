import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

function AdminTable() {
    const dispatch = useDispatch()

    const Feedback = useSelector((store) => store.getFeedback)

    useEffect(() => {
      console.log('in useEffect');
     getFeedback()
    }, []);
  
    const getFeedback = () => {
      axios({
        method: 'GET',
        url: '/feedback'
      })
        .then((response) => {
            const feedbackArray = response.data
console.log(feedbackArray);
        dispatch({
          type: 'SET_FEEDBACK',
          payload: feedbackArray
        })
        })
        .catch((error) => {
          console.log('error on GET', error);
        });
    }



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comment</th>
                    </tr>
                </thead>

                <tbody>
                {Feedback.map((feeling) => {
                        return (
                            <tr key={feeling.id}>
                                <td>{feeling.feeling}</td>
                                <td>{feeling.understanding}</td>
                                <td>{feeling.support}</td>
                                <td>{feeling.comments}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default AdminTable;