export interface Fruits {
    name: string,
    calories: number;
}

export interface MixedData {
    name: string;
    age: number;
    fruits: Fruits[];
}

export as namespace $;
