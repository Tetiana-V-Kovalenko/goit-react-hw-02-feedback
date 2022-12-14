import css from './FeedbackOptions.module.css';
const FeedbackOptions = () => {
  return (
    <div>
      <h1 className={css.title}>Please leave feedback</h1>
      <div className={css.btn_container}>
        <button className={css.btn} onClick={() => {}}>
          Good
        </button>
        <button className={css.btn} onClick={() => {}}>
          Neutral
        </button>
        <button className={css.btn} onClick={() => {}}>
          Bad
        </button>
      </div>
    </div>
  );
};
export default FeedbackOptions;
