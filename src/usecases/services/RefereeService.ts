import { Rules } from "../Rules";

export class RefereeService {
    seem(play1: string, play2: string) {
        return Rules(play1, play2)
    }

}