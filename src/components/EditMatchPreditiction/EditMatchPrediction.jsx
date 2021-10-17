import useReduxStore from '../../hooks/useReduxStore';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'


function EditMatchPrediction() {

    const store = useReduxStore();
    const dispatch = useDispatch()
    const history = useHistory()
    const [selectTeamPick, setSelectTeamPick] = useState('')
  


    const handleSelect = (event) => {
        setSelectTeamPick(event.target.value)
    }
    const handleSubmit = () => {

        dispatch({ type: 'MAKE_EDIT', payload: { id: store.setMatch.id, team: selectTeamPick } })

        history.push('/success')
    }
    return (
        <div>
            <table>
                <thead>

                    <tr>
                        <th>Date</th>

                        <th>Matches</th>

                        <th>Pick</th>

                    </tr>
                </thead>
            </table>
            {store.setMatch.date}

            {store.setMatch.home_team} vs {store.setMatch.away_team}
            <select onChange={handleSelect}>
                <option>select team</option>
                <option>{store.setMatch.home_team}</option>
                <option>{store.setMatch.away_team}</option>

            </select>
            <button onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default EditMatchPrediction
