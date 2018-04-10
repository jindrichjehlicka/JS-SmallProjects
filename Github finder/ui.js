class UI {
  constructor() {
    this.profile = document.getElementById('profile');
   

  }

  showProfile(user) {
    //display user info
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class = "col-md-3">
        <img class = "img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View profile</a>
        </div>
     
      <div class = "col-md-9">
        <span class="badge badge-primary mb-1">Public repos: ${user.public_repos}</span>
        <span class="badge badge-secondary mb-1">Public Gistss: ${user.public_gists}</span>
        <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
        <span class="badge badge-info mb-1">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member since:  ${new Date(user.created_at).toLocaleDateString()}</li>
          </ul>
      </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
  `;
  }
  
  showRepos(repos){
    let output = '';
    repos.forEach((repo)=>{
      output += `
      <div class="card card-body mb-2>
        <div class = "row">
          <div class="col-md-6">
           <a href="${repo.html_url}" target="_blank"></a>${repo.name}
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary mb-1">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary mb-1">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success mb-1">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `
    })

    //output repositores
    document.getElementById('repos').innerHTML = output;
  }

  //show alert msg
  showAlert(message, className) {
    //clear old alert
    this.clearAlert()
    //create a div
    const div = document.createElement('div');
    //add classes
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    //get a parent
    const container = document.querySelector('.searchContainer');
    //get search box
    const search = document.querySelector('.search');

    //insert alert

    container.insertBefore(div, search);

    setTimeout(()=>{
      this.clearAlert()
    },3000)

  }

  // clearAlertMessage
  clearAlert() {
    const currentAlert = document.querySelector('.alert')

    if (currentAlert) {
      currentAlert.remove()
    } 
  }

  //clear profile
  clearProfile() {
    this.profile.innerHTML = ''
  }


}