import { Api } from './api.js'
import {program} from 'commander'
import process from 'node:process'

export class Quaker {
    #api
    #options

    constructor() {
        // Command configuration for options and defines
        program
            .name('Quaker')
            .version('1.0.0')
            .option('-l --limit <integer>', 'Limit the results to the specified number of events', '15')
            .parse(process.argv)

        // Dependency injection
        this.#api     = new Api()
        this.#options = program.opts()

        // Get earthquake list by command options
        this.#api
            .getQuakers(this.#options)
            .then(function (response) {
                // @TODO: list in terminal
            })
    }
}