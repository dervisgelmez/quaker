import { ErrorResponse } from './error.response.js'
import { QuakersType } from './quakers.type.js'

export class ApiResponse
{
    status;
    count;
    data;

    constructor(response) {
        this.status = response.metadata.status
        this.count  = response.metadata.count

        if (this.success()) {
            this.data = new QuakersType(response)
        } else {
            this.data = new ErrorResponse()
        }
    }

    success() {
        return this.status === 200 && this.count > 0
    }
}