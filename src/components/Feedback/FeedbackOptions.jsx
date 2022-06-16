import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map(button => {
        return (
            <button
                key={button}
                type='button'
                onClick={onLeaveFeedback}
                name={button}
                className={s.button}>
                {button}
            </button>
        )
    });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;