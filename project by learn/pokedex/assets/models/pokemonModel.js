class Pokemon {
    name;
    id
    type;
    types = [];
    img;
    constructor(name, id, type, types = [], img,) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.types = types;
        this.img = img;
    }
}