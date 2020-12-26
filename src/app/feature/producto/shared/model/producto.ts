export class Producto {
    id: string;
    timeDeparture: Date;
    arrival: string;
    cost: Float32Array
    isReprogrammed: boolean;

    constructor(id: string, timeDeparture: Date, arrival: string, cost: Float32Array, isReprogrammed: boolean) {
        this.id = id;
        this.timeDeparture = timeDeparture;
        this.arrival = arrival;
        this.cost = cost;
        this.isReprogrammed = isReprogrammed;
    }
}
