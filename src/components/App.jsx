import user from 'user.json';
import {Profile} from 'components/profile/Profile';

export const App = () => {
  return (
    <>
    <div
      style={{
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  </>
  );
};
