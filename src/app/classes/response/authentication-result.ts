import { KwetterUser } from "../models/kwetter-user";

export class AuthenticationResult {
    public succeeded : boolean;
    public errorCode : number;
    public message : string;

    public account : KwetterUser
}
