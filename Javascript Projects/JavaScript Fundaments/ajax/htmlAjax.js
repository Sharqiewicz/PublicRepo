
//xhr is a object which will process the result
let xhr = new XMLHttpRequest();

// .open() prepare a request; (1.name of HTTP method, 2.URL adress of website which will operate request, 3. true = async)
xhr.open('GET', 'data/file.html', true);

// .send() - send a request to server
xhr.send(null);

// .onload - when server response
xhr.onload = function(){
    // .status - check object status
    if(xhr.status === 200){

        document.getElementById('content').innerHTML = xhr.responseText;
    }
}
