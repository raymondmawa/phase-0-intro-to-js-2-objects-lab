const employee = {
    name : 'Sam',
    streetAddress : "11 Broadway",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj['name'] = 'Sam';

    newObj['streetAddress'] = '11 Broadway'
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj,) {
    
    delete obj.key
    return obj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}
