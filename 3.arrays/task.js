//Mission #1

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    return arr1.every( (item, index) => item === arr2[index] ) ? true : false;
}


//Mission #2
function getUsersNamesInAgeRange(users, gender) {
    if (!users.length) {
        return 0;
    }
    let result = 0;
    if (gender === 'мужской') {
        let ageArray = users.filter(user => user.gender === 'мужской').map(item => item.age);
        result = getMiddleAge(ageArray);
    } else if (gender === 'женский') {
        let ageArray = users.filter(user => user.gender === 'женский').map(item => item.age);
        result = getMiddleAge(ageArray);
    } else {
        return 0;
    }
    return result;
}

function getMiddleAge(array) {
    return array.reduce((acc, item, index, arr) => {
        acc += item;
        if (index === arr.length - 1) {
            return acc / arr.length
        }
        return acc;
    }, 0)
} 