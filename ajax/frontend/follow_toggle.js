const APIUtil = require('./api_util')


class FollowToggle {
  constructor(el){
    this.$el = $(el); 
    this.userId = this.$el.data("user-id"); 
    this.followState = this.$el.data("initial-follow-state"); 
    this.render(); 
    this.$el.on('click', this.handleClick.bind(this)); 
  }
  
  handleClick(event){
    const followToggle = this;
    this.$el.prop("disabled", true)
    if (this.followState == "followed"){
      APIUtil.unfollowUser(this.userId);
      this.followState = "unfollowed";   
      this.render(); 
    } else{
      debugger; 
      APIUtil.followUser(this.userId);
      this.followState = "followed";
      this.render(); 
    }
  }    
  
  render(){
    if(this.followState === "unfollowed"){
      this.$el.text("Follow!");
      this.$el.prop("disabled",false)
    }else{
      this.$el.text("Unfollow!");
      this.$el.prop("disabled",false)
    
    }  
  } 
  
}

module.exports = FollowToggle;