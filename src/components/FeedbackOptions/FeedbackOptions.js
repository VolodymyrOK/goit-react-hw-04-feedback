import PropTypes from 'prop-types';
import { Button, ButtonList, ButtonListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => (
  <ButtonList>
    {options.map(option => (
      <ButtonListItem key={option}>
        <Button type="button" onClick={() => onLeaveFeedBack(option)}>
          {option}
        </Button>
      </ButtonListItem>
    ))}
  </ButtonList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedBack: PropTypes.func,
};
