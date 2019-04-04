let xhr = new XMLHttpRequest();

//Getting a xml data
const getNodeValue = function(obj,tag){
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

xhr.onload = function(){

    // xml data from xml file //
    let response = xhr.responseXML;

    // Searching 'event' elements //
    let events = response.getElementsByTagName('event');

    for( i=0; i< events.length; i++){
        let container, image, location, city, newline;

        // creating a container for xml object
        container = document.createElement('div');

        // getting a map value from xml object
        image = document.createElement('image');
        image.setAttribute('src', getNodeValue(events[i], 'map'));
        image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
        container.appendChild(image);

        // creating elements for location info section
        location = document.createElement('p');
        city = document.createElement('b');
        newline = document.createElement('br');

        // getting a location value from xml object
        city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));

        // insert location info into location section
        location.appendChild(newline);
        location.insertBefore(city, newline);

        location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));

        container.appendChild(location);

        document.getElementById('content').appendChild(container);

    }

}

// Creating a request
xhr.open('GET', 'file.xml', true);

// Sending a request
xhr.send(null);