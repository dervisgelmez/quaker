export class LocationType
{
    place;

    lng;

    lat;

    constructor(feature) {
        let coordinates = feature.geometry.coordinates
        let properties  = feature.properties

        this.place = properties.place
        this.lng   = coordinates[0]
        this.lat   = coordinates[1]
    }
}