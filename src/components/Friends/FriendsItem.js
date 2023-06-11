import PropTypes from 'prop-types';
import css from './Friends.module.css'

function FriendsItem({ avatar, name, isOnline, id }) {
    return (
        <li className={css.friends__item} key={id}>
            {isOnline ?
                (<span className={css.friends__online}></span>) :
                (<span className={css.friends__offline}></span>)
            }
            <img className={css.friends__avatar} src={avatar} name={name} width='50' />
            <p className={css.friends__name}>{name}</p>
        </li>
    );
}

FriendsItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}

export default FriendsItem;