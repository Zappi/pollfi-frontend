import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';
import profileService from '../services/profile'


const ListedPollCard = (props) => {

    /*If found profile id matches to the listed poll creator id show delete button for 
    the user, so the user will be able to delete it */
    const profileId = () => {
        const foundProfile = profileService.getUserFromLocalStorage()

        if (foundProfile === null) {
            return null
        }

        return foundProfile.user.id
    }

    /*Creates the material-ui Card for single poll */
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

ListedPollCard.propTypes = {
    clickRemovePoll: PropTypes.func.isRequired,
    clickToOpen: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

export default ListedPollCard