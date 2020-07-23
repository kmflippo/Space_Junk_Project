class SpaceObject {
    
    constructor(name, shape) {
        this.name = name;
        this.shape = shape;
    }

    output(){
        return 'SpaceObject name: ' + name + ", shape: " + shape;
    }

    
}

let Sputnik = new SpaceObject("Sputnik", "Cyl");
function print(spaceObject){
    alert('SpaceObject name: ' + spaceObject.name + ", shape: " + spaceObject.shape);
}

function helloWorld(){
    alert("hello world");
}



