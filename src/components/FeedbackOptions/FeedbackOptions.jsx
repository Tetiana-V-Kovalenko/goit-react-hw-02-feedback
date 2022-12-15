import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <div className={css.btn_container}>
        <button name="good" className={css.btn} onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="neutral" className={css.btn} onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name="bad" className={css.btn} onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </div>
  );
};
export default FeedbackOptions;
