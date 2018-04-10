//init github
const github = new Github;
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser')

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if (userText !== '') {
    //Make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message ==='Not Found'){
          //show alert that user doesn't exist
         ui.showAlert('User not found','alert alert-danger')
        }else{
         
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
          
        }
      })
     
  }else{
    //clear profil
    ui.clearProfile()
  }
})