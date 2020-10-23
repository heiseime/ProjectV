import api from '../lib/api';

export const RECEIVE_PROFILE_DATA = 'RECEIVE_PROFILE_DATA';

export const fetchprofileName = () => (
  dispatch => api('https://api.github.com/users/supreetsingh247')
    .then(
      json => dispatch(receiveprofileName(json)),
    )
)

export const receiveprofileName = json => ({
  type: RECEIVE_PROFILE_DATA,
  data: json.data,
});

