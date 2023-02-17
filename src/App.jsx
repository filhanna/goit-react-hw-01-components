import { Profile } from "./components/profile/Profile";
import user from './data/user.json';
import data from './data/data.json'
import friends from './data/friends.json'
import { Statistics } from "components/statistics/Statistics";
import { FriendList } from "components/friendList/FriendList";
export const App = () => {
  return (
    <div>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>

    </div>
  );
};
