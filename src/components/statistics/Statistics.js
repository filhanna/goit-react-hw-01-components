import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = props => {
  const { title, stats } = props;
  const empty = true;
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{empty && title}</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};