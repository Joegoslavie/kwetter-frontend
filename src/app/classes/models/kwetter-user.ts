import { KwetterProfile } from "./kwetter-profile";
import { Tweet } from "./tweet";

export class KwetterUser {

    public id : number;
    public username : string;
    public email : string;
    public token : string;
    public profile : KwetterProfile;
    public timeline : Tweet[];
}
