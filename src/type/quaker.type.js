import {LocationType} from './location.type.js'
import {MagnitudeType} from './magnitude.type.js'

export class QuakerType
{
    id;

    title;

    status;

    time;

    location;

    magnitude;

    tsunami;

    constructor(feature) {
        let properties = feature.properties

        this.id      = properties.id
        this.title   = properties.title
        this.time    = new Date(properties.time)
        this.tsunami = properties.tsunami

        this.location = new LocationType(feature)
        this.magnitude = new MagnitudeType(feature)
    }
}