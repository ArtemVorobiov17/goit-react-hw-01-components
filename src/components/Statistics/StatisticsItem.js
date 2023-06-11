import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function StatisticsItem({ id, label, percentage }) {
    return (
        <li className={css.statistics__item} key={id}>
            <span className={css.statistics__label}>{label}</span>
            <span className={css.statistics__percentage}>{percentage}%</span>
        </li>
    )
}


StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}


export default StatisticsItem;