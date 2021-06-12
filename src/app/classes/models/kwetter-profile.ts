import { Tweet } from "./tweet";

export class KwetterProfile {

    public username : string;
    public displayName : string;
    public description : string;
    public location : string;
    public websiteUrl : string;

    public tweets : Tweet[];
    public following : KwetterProfile[];
    public followers : KwetterProfile[];

    public mentions : Tweet[];
    public blocked : KwetterProfile[];
}
