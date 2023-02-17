import PropTypes from 'prop-types';

// function randomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

export const Statistics = props => {
  const { title, stats } = props;
  const empty = true;
  return (
    <section className="statistics">
      <h2 className="title">{empty && title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
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
