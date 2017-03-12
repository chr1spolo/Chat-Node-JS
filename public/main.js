var socket = io.connect('http://localhost:8000', { 'forceNew' : true});

socket.on('messages', function(data) {
  console.log(data);
  render(data);
});

function render(data) {

  var html = data.map(function(elem, index) {
    return(`<div>
              <b>${elem.author}</b> <br>
              <em>${elem.text}</em>
            </div>`);
  }).join(" <br> ");


  document.getElementById('messages').innerHTML = html;
}

function addMessage(element) {
  var payload = {
    author : document.getElementById('username').value,
    text   : document.getElementById('texto').value,
  };

  socket.emit('new-messages', payload);
  return false;
}
