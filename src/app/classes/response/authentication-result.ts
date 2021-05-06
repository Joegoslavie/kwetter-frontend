import { KwetterUser } from "../models/kwetter-user";

export class AuthenticationResult {
    public succeeded : boolean;
    public message : string;

    public account : KwetterUser
}
