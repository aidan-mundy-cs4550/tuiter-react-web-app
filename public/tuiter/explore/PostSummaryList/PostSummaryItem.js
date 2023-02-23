const PostSummaryItem = (post) => {
  var body = `
  `
  if (post.topic != null) {
    body += `
    <p class="text-secondary mb-0">
      ${post.topic}
    </p>
    `
  }
  if (post.author != null) {
    body += `
    <p class="mb-0">
      ${post.author}
      <span class="fa-stack">

        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-check fa-inverse fa-stack-1x"></i>
      </span>
      <span class="text-secondary"> - ${post.time}</span>
    </p>
    `
  }
  if (post.title != null) {
    body += `
    <p class="mb-0">
      ${post.title}
    </p>
    `
  }
  if (post.summary != null) {
    body += `
    <p class="mb-0">
      ${post.summary}
    </p>
    `
  }
  if (post.tuits != null) {
    body += `
    <p class="text-secondary mb-0">
      ${post.tuits} Tuits
    </p>
    `
  }
 
  return (`
  <li class="list-group-item">
  <div class="row me-0">
    <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
      ${body}
    </div>
    <div class="col-sm-2 col-md-2 col-lg-2 col-lg-2 col-xl-2 col-xxl-2 p-0 rounded-3">
      <image class="w-100"
        src="${post.image}">
      </image>
    </div>
  </div>
</li>
`); }

export default PostSummaryItem;