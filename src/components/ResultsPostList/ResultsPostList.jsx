import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import useReduxStore from '../../hooks/useReduxStore';
import ResultsPostListItem from '../ResultsPostListItem/ResultsPostListItem';


function ResultsPostList() {

    const dispatch = useDispatch();
    const [postDate, setPostDate] = useState('');
 

    const store = useReduxStore();

    const handleSelect = (event) => {
        const newPostDate = event.target.value;
        setPostDate(newPostDate);

    }
    const handleFetchfixtures = () =>{
        
    dispatch({ type: 'FETCH_FIXTURES', payload: postDate })

    }

    return (
        <div>
       
        Date: <input type="date" value={postDate} onChange=  {handleSelect} />
        {store.setFixtures.map((fixture) => {
         return <ResultsPostListItem key={fixture.id}
         fixture={fixture} />
                    
            
            })}

        <button onClick={handleFetchfixtures}>Submit</button>
    

    </div >
    );
}

export default ResultsPostList
