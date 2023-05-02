// #3 FriendlistItem
import PropTypes from 'prop-types';
import css from 'components/friendListItem/friendlistitem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css['friend__item']}>
    <span
      className={css['friend__status']}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img
      className={css['friend__avatar']}
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css['friend__name']}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
