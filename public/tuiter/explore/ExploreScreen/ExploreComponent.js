import PostSummaryList
   from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="row mb-2 me-0">
    <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
      <div class="row border rounded-pill ms-0 bg-white">
        <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-flex align-items-center">
          <i class="fa fa-search"></i>
        </div>
        <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
          <input type="text" class="form-control border-0" placeholder="Search Tuiter">
        </div>
      </div>
    </div>
    <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-flex align-items-center">
      <i class="fa fa-cog fa-2x text-primary"></i>
    </div>
  </div>

  <ul class="nav nav-tabs mb-2">
    <li class="nav-item"><a class="nav-link active" href="../for-you.html">For you</a></li>
    <li class="nav-item"><a class="nav-link" href="../trending.html">Trending</a></li>
    <li class="nav-item"><a class="nav-link" href="../news.html">News</a></li>
    <li class="nav-item"><a class="nav-link" href="../sports.html">Sports</a></li>
    <li class="nav-item d-none d-sm-none d-md-block"><a class="nav-link" href="../entertainment.html">Entertainment</a></li>
  </ul>

  <div class="w-100 position-relative mb-2">
    <img class="w-100 z-0 position-relative"
      src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
    <div class="position-absolute z-3 bottom-0 ps-2">
      <h2 class="text-black">SpaceX's Starship</h2>
    </div>
  </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
