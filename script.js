// our authentication token is Ijk4ZTAzZjk2LTJiOGYtNDdkOC04NGQ3LTFkNTA5YTdmNDYzNCI.YdycJJrdDld1XCjtDK0nCaz9h_c
// just don't know how to use it
// let request = new XMLHttpRequest();
// request.open("GET", "https://discosweb.esoc.esa.int/api/objects", true);
// request.send();
// request.onload = () => {
//     console.log(request);
//     if(request.status == 200){
//         console.log(JSON.parse(request.response));
//     } else {
//         console.log(`error ${request.status} ${request.statusText}`);
//     }
// }
const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'http://pngimg.com/imgs/nature/earth/';
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);



var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach((spaceObject) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1');
            h1.textContent = spaceObject.title;
            
            container.appendChild(card);
            card.appendChild(h1);

            console.log(spaceObject.title);
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = 'ITS NOT WORKING'
        app.appendChild(errorMessage)
        console.log('error');
    }


}
request.send();
