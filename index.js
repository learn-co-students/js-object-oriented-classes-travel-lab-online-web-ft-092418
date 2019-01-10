
class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    let distance = Math.abs(this.beginningLocation["vertical"] - this.endingLocation["vertical"])
    distance += Math.abs(eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endingLocation["horizontal"]))
    return distance;
  }

  estimatedTime(bool = false) {
    switch (bool) {
      case false:
      return this.blocksTravelled()/3
        break;
      default:
      return this.blocksTravelled()/2
    }

  }
}
