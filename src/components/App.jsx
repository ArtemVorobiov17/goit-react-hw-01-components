import Profile from "./Profiles/Profile";
import Statistics from "./Statistics/Statistics";
import FriendsList from "./Friends/FriendsList";
import TransactionHistory from "./Transaction/TransactionHistory";
import data from "data/data";
import user from "data/user";
import friends from "data/friends";
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div>
      <div>
        <div>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
        </div>
        <div>
          <FriendsList friends={friends} />
        </div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
