const WhoToFollowListItem = (who) => {
  return (`
  <li class="list-group-item">
  <div class="row m-0">
    <div class="col-lg-2 col-xl-2 col-xxl-2 d-flex align-items-center p-0">
      <image class=" w-100 rounded-circle"
        src="${who.avatarIcon}">
      </image>
    </div>
    <div class="col-lg-6 col-xl-6 col-xxl-6 ps-2 pe-0">
      ${who.userName}
      <span class="fa-stack">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-check fa-inverse fa-stack-1x"></i>
      </span>
      <p class="text-secondary mb-0">@${who.handle}</p>
    </div>
    <div class="col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-center ps-0 pe-2">
      <button class="btn btn-primary btn-sm rounded-pill me-3 ms-auto">Follow</button>
    </div>
  </div>
</li>
`); }

export default WhoToFollowListItem;