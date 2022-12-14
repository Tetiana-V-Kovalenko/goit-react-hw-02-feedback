import css from './Statistics.module.css';
const Statistics = ({ good_f, neutral_f, bad_f }) => {
  return (
    <div className={css.statisticsContainer}>
      <h2 className={css.secondTitle}>Statistics</h2>
      <ul className={css.statisticsList}>
        <li className={cssc}>
          <p className={css}>Good:{good_f}</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css}>Neutral:{neutral_f}</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css}>Bad:{bad_f}</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css}>Total:</p>
        </li>
        <li className={css.statisticsItem}>
          <p className={css}>Positive feedback:</p>
        </li>
      </ul>
    </div>
  );
};
export default Statistics;
