function createSampleData() {
   localStorage.setItem(1, "q:james1@manofstone.com:0:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae earum amet tenetur, perferendis voluptatibus eius pariatur corporis soluta, illum odio quis iure voluptas dolor ea, impedit! Fugiat quas in, perspiciatis.");
   localStorage.setItem(2, "q:james2@manofstone.com:3:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae earum amet tenetur, perferendis voluptatibus eius pariatur corporis soluta, illum odio quis iure voluptas dolor ea, impedit! Fugiat quas in, perspiciatis.");
   localStorage.setItem(3, "q:james4@manofstone.com:10:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae earum amet tenetur, perferendis voluptatibus eius pariatur corporis soluta, illum odio quis iure voluptas dolor ea, impedit! Fugiat quas in, perspiciatis.");
   localStorage.setItem(4, "q:james5@manofstone.com:10:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae earum amet tenetur, perferendis voluptatibus eius pariatur corporis soluta, illum odio quis iure voluptas dolor ea, impedit! Fugiat quas in, perspiciatis.");
   localStorage.setItem(5, "q:james5@manofstone.com:10:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae earum amet tenetur, perferendis voluptatibus eius pariatur corporis soluta, illum odio quis iure voluptas dolor ea, impedit! Fugiat quas in, perspiciatis.");
 }

function renderQuestionCard(id, email, text) {
  var questionHTML = '<div class="col-md-6"> <div class="well"> <div class="media"> <a class="pull-left" href="question-details.html?id=' + id + '"> <img class="media-object img-circle" src="http://www.gravatar.com/avatar/118eafde997b09ac977f5ed25993ff5f?s=128 " alt="..."> </a> <div class="media-body"> <h4 class="media-heading">' + email + ' asks</h4> <p>' + text + '</p> <a href="question-details.html" class="btn btn-info pull-right">View Answers &raquo;</a> </div> </div> </div>'
  $('.replace-with-data').append(questionHTML);
}

function parseLocalStorageData() {
    var i = -1;
    while ( ++i < localStorage.length ) {
      // retrieve the value of the current key
      key = localStorage.key( i );
      // retrieve the value of the current item
      var item = localStorage.getItem( key );
      var splitItem = item.split(":");
      // loop through data and add element
      var type =   splitItem[0];
      var email =  splitItem[1];
      var rating = splitItem[2];
      var text =   splitItem[3];

      renderQuestionCard(i, email,text);
    }
}

function addQuestion() {
  return "";
  var email = $('form#submit-a-question input#email').val();
  var question = $('form#submit-a-question textarea#question').val();
  var newItemNumber = localStorage.length + 1;
  if (email && question) {
    localStorage.setItem(newItemNumber, "q:" + email + ":10:" + question);
    $('#askQuestionModal').modal('hide');
    // remove all questions before replacing
    $('.replace-with-data').html('');
    parseLocalStorageData();
  } else {
    alert("there was an error");
  }
}

function clearLocalStorage() {
  localStorage.clear();
  // remove all questions before replacing
  $('.replace-with-data').html('');
  parseLocalStorageData();
}

createSampleData();
parseLocalStorageData();
