// #2 Statistics
import PropTypes from 'prop-types';
import css from 'components/statistics/statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css["statistics__wrap"]}>
    {title && <h2 className={css["statistics__title"]}>{title}</h2>}

    <ul className={css["statistics__list"]}>
      {stats.map(stat => (
        <li key={stat.id} className={css["statistics__item"]}>
          <span className={css["statistics__label"]}>{stat.label}</span>
          <span className={css["statistics__percentage"]}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};
