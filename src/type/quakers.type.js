import { QuakerType } from './quaker.type.js'

export class QuakersType
{
    quakes = [];

    constructor(response) {
        response.features.forEach(feature => {
            this.quakes.push(new QuakerType(feature))
        })
    }
}