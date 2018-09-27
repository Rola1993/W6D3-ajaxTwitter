const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  }, 
  unfollowUser: id => {
    return $.ajax({
    method: "DELETE",
    url: `/users/${id}/follow`,
    dataType: 'JSON'
    }); 
  },
  searchUsers: (query) => {
    return $.ajax({
      method: "GET",
      url: `/users/search`,
      data: { query
      },
      dataType: 'JSON'
    });
  }
}; 

module.exports = APIUtil; 