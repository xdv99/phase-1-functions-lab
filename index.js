// Code your solution in this file!

const feetsPerBlock = 264;

function distanceFromHqInBlocks(street) {
    const scuberSt = 42;
    if (street >= scuberSt) {
        return street - scuberSt;
    } else {
        return scuberSt - street;
    }
}

function distanceFromHqInFeet (street) {
    return distanceFromHqInBlocks(street) * feetsPerBlock;
}

function distanceTravelledInFeet(from, to) {
    const distance = (to - from) * feetsPerBlock;
    return distance < 0 ? (distance * -1) : distance;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance < 400) {
        return 0;
    }
    else if (distance < 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}