
class Driver{
  constructor(name , startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(yearInt) {
    return yearInt - this.startDate.getFullYear() ;
  }

}


class Route{
  constructor(beginningLocation , endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){

    return Math.abs(this.endingLocation.vertical-this.beginningLocation.vertical)+
    Math.abs(eastWest.indexOf(this.endingLocation.horizontal)-eastWest.indexOf(this.beginningLocation.horizontal));
  }

  estimatedTime(peak ){
    if (peak){
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }

  }



}


let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
