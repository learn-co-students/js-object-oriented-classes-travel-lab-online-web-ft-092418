let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ]

class Driver {
    constructor(name, startDate){
        this.name = name 
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year){
        return year - this.startDate.getFullYear()
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled(){
        let eastWestD = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)

        if (eastWestD < 0) {
            eastWestD = eastWestD * -1
        }

        let northSouthD = this.beginningLocation.vertical - this.endingLocation.vertical

        if (northSouthD < 0) {
            northSouthD = northSouthD * -1
        }

        return eastWestD + northSouthD
    }

    estimatedTime(peakHours){
        if (peakHours){
            return Math.round((this.blocksTravelled() / 2))
        }
        else {
            return Math.round((this.blocksTravelled() / 3))
        }
    }
}