let xhr = new XMLHttpRequest();

xhr.onload = function()
{

// data from file parsed by JSON object into variable
    responseObject = JSON.parse(xhr.responseText);

    // string where we will have our parsed json data into html
    let newContent = "";

    // preparing a html code to insert into website
    for (i = 0; i < responseObject.events.length; i++) {
        newContent += ' <div class="event"> ';
        newContent += `<img src="${responseObject.events[i].map}"`;
        newContent += `alt="${responseObject.events[i].location}" />`;
        newContent += `<br><b> ${responseObject.events[i].location} </b></br>`;
        newContent += ` ${responseObject.events[i].date} </p> `;
        newContent += `</div>`;
    }

    document.getElementById('content').innerHTML = newContent;
}

// Sending a request
xhr.open('GET', 'file.json', true);
xhr.send(null);