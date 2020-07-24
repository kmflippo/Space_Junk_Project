class SpaceObject {
    
    constructor(name, shape) {
        this.name = name;
        this.shape = shape;
    }

    getName(){
        return name;
    }

    getShape(){
        return shape;
    }

    output(){
        return 'SpaceObject name: ' + name + ", shape: " + shape;
    }

    
}

var TempDatabase = [];
TempDatabase.push(new SpaceObject("Sputnik", "Cyl"));
TempDatabase.push(new SpaceObject("satno", "Sphere"));





function print(spaceObject){
    alert('SpaceObject name: ' + spaceObject.name + ", shape: " + spaceObject.shape);
}





