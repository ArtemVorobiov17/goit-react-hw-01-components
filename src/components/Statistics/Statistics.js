import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import StatisticsItem from "./StatisticsItem";

function Statistics ({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.statistics__title}>{title}</h2>}
            <ul className={css.statistics__list}>
                {stats.map(item => (
                    <StatisticsItem
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
                ))}
            </ul>
        </section>
    );
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Statistics;