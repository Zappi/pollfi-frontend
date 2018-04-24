import React from 'react';
import { Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import profileService from '../services/profile'


const ListedPollCard = (props) => {

    const editPoll = (id) => {
        console.log("POLL EDITED")
    }

    const profileId = () => {
        const foundProfile = profileService.getUserFromLocalStorage()

        if (foundProfile === null) {
            return null
        }

        return profileService.getUserFromLocalStorage().user.id
    }


    return (
        <div className='listedPollCard'>
            <Card>
                <CardHeader
                    title={props.data.question}
                    onClick={() => props.clickToOpen(props.data.id)}
                />

                {profileId() === props.data.user._id &&
                    <CardActions>
                        <FlatButton label='Delete' onClick={() => props.clickRemovePoll(props.data.id)} />
                    </CardActions>
                }
            </Card>
        </div>
    )
}


export default ListedPollCard