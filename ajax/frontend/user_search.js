const followToggle = require ('./follow_toggle')

class UsersSearch {
   constructor(el) {
     $el = $(el);
     this.$input = this.$el.find('input[name=username]');
     this.$ul = this.$el.find('.users');
    
     this.$input.on('input', this.handleInput.bind(this));
    
   }
   
   
   handleInput(event) {
     APIUtil.searchUsers(this.$input.val);
   }
   
   // users is passed in as an array
   renderResults(users){
    this.$ul.empty();
    for (i = 0 ; i < users.length ; i++){
      const user = users[i];
      let $li = $("<li>");
      // assigning the anchor attribute for ea user
      let $a = $("<a>");
      $a.text()
      
      $a.attr('href', '');
    
      
      
      const $followToggle = $('<button></button>');
      let followToggle = new FollowToggle($followToggle);
      $li.append($a);
      
      
    }
    
     
   }
}