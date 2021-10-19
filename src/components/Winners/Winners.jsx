import React,{useState} from 'react'
import useReduxStore from '../../hooks/useReduxStore';
import { useSelector, useDispatch } from 'react-redux';
import setFixtures from '../../redux/reducers/fetchfixtures.reducer';



function Winners() {

    const dispatch = useDispatch()

    const store = useReduxStore();

    dispatch({type:'FETCH_FIXTURES_WINNERS'})



    return (
        <div>
            

            <h3> Winners so far</h3>
        
            <table>

                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Winners
