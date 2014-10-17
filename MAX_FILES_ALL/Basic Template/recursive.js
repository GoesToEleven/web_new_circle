

function parseObject(object) {
    for (property in object) {
        if (typeof property == "object") {
            parseObject(object[property])
        } else {
            console.log(property + ": " + object[property])
        }
    }
}