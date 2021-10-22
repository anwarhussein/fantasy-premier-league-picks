import React, { useEffect } from 'react'
import useReduxStore from '../../hooks/useReduxStore';
import { useDispatch } from 'react-redux';




function Winners() {

    const dispatch = useDispatch()

    const store = useReduxStore();
    useEffect(() => {

        dispatch({ type: 'FETCH_FIXTURES_WINNERS' })
    }, [dispatch])


    return (
        <div>

            <h3> Winners so far</h3>
            <table>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Points
                    </th>
                </tr>
            </table>
            {store.setWinners.map((user) => {
                return <table>
                    <tbody>
                        <tr>
                            <td>
                                {user.username}
                            </td>
                            <td>
                                {user.count}
                            </td>
                        </tr>
                    </tbody>
                </table>
            })}

        </div>
    )
}

export default Winners
