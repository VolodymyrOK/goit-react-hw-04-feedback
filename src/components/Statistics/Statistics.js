import PropTypes from 'prop-types';
import { ButtonReload, StatList, StatListItem } from './Statistics.styled';

export const Statistics = ({
  entries,
  total,
  positivePercentage,
  onReload,
}) => (
  <>
    <StatList>
      {entries.map(([key, data]) => (
        <StatListItem key={key}>
          {key}: <span>{data}</span>
        </StatListItem>
      ))}
      <StatListItem>
        Total:
        <span>{total()}</span>
      </StatListItem>
      <StatListItem>
        Positive feedback:
        <span>{positivePercentage()}%</span>
      </StatListItem>
    </StatList>
    <ButtonReload onClick={onReload}>Reset</ButtonReload>
  </>
);

Statistics.propTypes = {
  entries: PropTypes.array,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
  onReload: PropTypes.func,
};