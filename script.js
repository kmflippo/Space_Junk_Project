
let request = new XMLHttpRequest();
request.open("GET", "https://discosweb.esoc.esa.int/Ijk4ZTAzZjk2LTJiOGYtNDdkOC04NGQ3LTFkNTA5YTdmNDYzNCI.YdycJJrdDld1XCjtDK0nCaz9h_c");
request.send();
request.onload = () => {
    console.log(request);
    if(request.status === 200){
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status} ${request.statusText}`);
    }
}