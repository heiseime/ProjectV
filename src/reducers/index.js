import {
  RECEIVE_PROFILE_DATA
} from '../actions';

export default (state = {
  avatarUrl: '',
  profile: {}
}, action) => {
  switch (action.type) {
    case RECEIVE_PROFILE_DATA:
      const {login, bio, following, followers, company, name, location} = action.data
      return {
        ...state,
        avatarUrl: action.data.avatar_url,
        profile : {
          profileName: name,
          userName : login,
          bio : bio,
          following : following,
          followers : followers,
          company : company,
          location: location
        }
      }
    default:
      return state;
  }
};
