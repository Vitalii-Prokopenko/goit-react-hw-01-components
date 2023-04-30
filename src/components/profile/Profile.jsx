// #1 User profile
import PropTypes from 'prop-types';
import css from 'components/profile/profile.module.css';


export const Profile = ({avatar, username, tag, location, stats}) => (
    <div className={css["user__profile"]}>
  <div className={css["user__description"]}>
    <img
      src={avatar}
      alt="User avatar"
      className={css["user__avatar"]}
    />
    <p className={css["user__name"]}>{username}</p>
    <p className={css["user__tag"]}>@{tag}</p>
    <p className={css["user__location"]}>{location}</p>
  </div>

  <ul className={css["user__stats"]}>
    <li className={css["user__stats-item"]}>
      <span className={css["user__label"]}>Followers</span>
      <span className={css["user__quantity"]}>{stats.followers}</span>
    </li>
    <li className={css["user__stats-item"]}>
      <span className={css["user__label"]}>Views</span>
      <span className={css["user__quantity"]}>{stats.views}</span>
    </li>
    <li className={css["user__stats-item"]}>
      <span className={css["user__label"]}>Likes</span>
      <span className={css["user__quantity"]}>{stats.likes}</span>
    </li>
  </ul>
</div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}
