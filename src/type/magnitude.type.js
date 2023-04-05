export class MagnitudeType
{
    mag;

    depth;

    constructor(feature) {
        let coordinates = feature.geometry.coordinates
        let properties  = feature.properties

        this.mag   = properties.mag
        this.depth = coordinates[2]
    }
}