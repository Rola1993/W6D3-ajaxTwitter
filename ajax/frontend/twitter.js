const FollowToggle = require('./follow_toggle');


// $(document).ready(function() {
// 
// });

$(function() {
  $('nav.users-search').each((idx, el) => new UsersSearch(el));
  $('button.follow-toggle').each((idx, el) => new FollowToggle(el, {}));
});