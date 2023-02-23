const NavigationSidebar = () => {
  return (`
  <ul class="list-group mb-2">
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fab fa-twitter"></i>
  </a>
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa fa-home"></i>
    <span class="d-none d-lg-none d-xl-inline">Home</span>
  </a>
  <a class="list-group-item list-group-item-action active" href="#">
    <i class="fa fa-hashtag"></i>
    <span class="d-none d-lg-none d-xl-inline">Explore</span>
  </a>
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa fa-bell"></i>
    <span class="d-none d-lg-none d-xl-inline">Notifications</span>
  </a>
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa fa-envelope"></i>
    <span class="d-none d-lg-none d-xl-inline">Messages</span>
  </a>
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa fa-bookmark"></i>
    <span class="d-none d-lg-none d-xl-inline">Bookmarks</span>
  </a>
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa fa-list"></i>
    <span class="d-none d-lg-none d-xl-inline">Lists</span>
  </a>
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa fa-user"></i>
    <span class="d-none d-lg-none d-xl-inline">Profile</span>
  </a>
  <a class="list-group-item list-group-item-action" href="#">
    <span class="fa-stack">
      <i class="fas fa-circle fa-stack-2x"></i>
      <i class="fas fa-ellipsis-h fa-inverse fa-stack-1x"></i>
    </span>
    <span class="d-none d-lg-none d-xl-inline">More</span>
  </a>
</ul>

<button class="btn btn-primary w-100 rounded-pill">Tuit</button>

`);
}
export default NavigationSidebar;