$('#submit-burger-btn').on('click', (event) => {
    event.preventDefault();
    const burger = $('#burger-name').val().toUpperCase().trim();
    if (!burger) {
    console.log('no message'); 
    return;
    } 
    const data = {
      burger_name: burger,
    };
    $.ajax({
      type: 'POST',
      url: '/',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (response) {
        console.log(response.message);
        location.reload();
      },
      error: function (err) {
        console.log(`Error ${err}`);
      },
    });
});

$('.burger-btn').on('click', (event) => {
  event.preventDefault();
  const id = event.target.id;
  $.ajax({
    type: 'PUT',
    url: `/${id}`,
    success: function (response) {
      console.log(response.message);
      location.reload();
    },
    error: function (err) {
      console.log(`Error ${err}`);
    },
  });
});

$('.burger--delete-btn').on('click', (event) => {
  event.preventDefault();
  const id = event.target.id;
  $.ajax({
    type: 'DELETE',
    url: `/${id}`,
    success: function (response) {
      console.log(response.message);
      location.reload();
    },
    error: function (err) {
      console.log(`Error ${err}`);
    },
  });
});