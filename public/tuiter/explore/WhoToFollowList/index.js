import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
           <ul class="list-group">
           <li class="m-0 list-group-item">
              Who to follow
            </li>
           ${who.map(item => {
    return (WhoToFollowListItem(item));
  }).join('')
    }
           </ul>
`);
}

export default WhoToFollowList;