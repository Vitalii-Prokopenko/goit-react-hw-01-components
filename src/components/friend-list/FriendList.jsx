// #3 Friendlist
import PropTypes from 'prop-types';
import css from 'components/friend-list/friend-list.module.css';
import { FriendListItem } from 'components/friendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={css['friend__list']}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
