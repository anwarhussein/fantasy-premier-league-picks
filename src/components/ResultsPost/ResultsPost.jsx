import { useDispatch } from 'react-redux';
import React, {useState} from 'react'

function ResultsPost() {

    const dispatch = useDispatch();
    const [postDate, setPostDate] = useState();

    const handleSelect = (event) =>{
        setPostDate(event.target.value);

        dispatch({type:'ADD_RESULTS',payload: postDate})

    }

    return (
        <div>
           Date:<input type="date" value={postDate} onChange={handleSelect}/>
        </div>
    )
}

export default ResultsPost
