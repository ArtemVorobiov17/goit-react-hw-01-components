import PropTypes from "prop-types";
import css from './Friends.module.css';
import FriendsItem from "./FriendsItem";

function FriendsList({ friends }) {
    return (
        <ul className={css.friends__list}>
            {friends.map(item => (
                <FriendsItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </ul>
    );
}


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
};

export default FriendsList;