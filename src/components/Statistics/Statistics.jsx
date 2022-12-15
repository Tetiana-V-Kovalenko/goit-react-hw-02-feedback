import css from './Statistics.module.css';

import NotificationMessage from './NotificationMessage';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statisticsContainer}>
      {total ? (
        <ul className={css.statisticsList}>
          <li className={css}>
            <p className={css}>Good:{good}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css}>Neutral:{neutral}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css}>Bad:{bad}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css}>Total:{total}</p>
          </li>
          <li className={css.statisticsItem}>
            <p className={css}>
              Positive feedback:{Math.round(positivePercentage)}%
            </p>
          </li>
        </ul>
      ) : (
        <NotificationMessage />
      )}
    </div>
  );
};
export default Statistics;
