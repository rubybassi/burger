$('#submit-burger-btn').on('click', (event) => {
    event.preventDefault();
    const burger = $('#burger-name').val().toUpperCase().trim();
    if (!burger) {
    console.log('no message'); 
    return;
    } 
    console.log('button sumbitted', burger);
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
  console.log('id', id);
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