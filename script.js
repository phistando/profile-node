$(function (){


  $.ajax({
    url: 'http://localhost:7000/profile',

    type: 'GET',

    dataType: 'json',
  }).success(successFunction)
    .fail(failFunction);


function successFunction(data){

  $("#name").text(data.name);
  $("#email").text(data.email);
  $("#hobbies").text(data.hobbies);
  $("#description").text(data.description);

}

function failFunction(jqXHR, textStatus, errorThrown){
console.log(errorThrown);
}

});
