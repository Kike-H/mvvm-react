export interface Characters {
    info:    Info;
    results: Character[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface Character {
    id:       number;
    name:     string;
    status:   Status;
    species:  string;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCharacters(json: string): Characters {
        return JSON.parse(json);
    }

    public static charactersToJson(value: Characters): string {
        return JSON.stringify(value);
    }
}
