$(document).ready(function() {
  $('#searchUser').on('keyup', function(e) {
    let username = e.target.value;

    // Make request to github
    $.ajax({
      url:'https://api.github.com/users/'+username,
      data: {
        client_id:'cd42f92d7d4ceee04a9a',
        client_secret: '8e7d7578fa1029b17544e774fc6414dd81252937'
      }
    }).done(function (user) {
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}">
              </div>

              <div class="col-md-9">

              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});