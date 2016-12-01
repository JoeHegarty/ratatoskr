import { RatatoskrAPI } from "../api/ratatoskr-api";
import { Types } from "../types";
import { ActorActivation } from "./actor-activation";
import { ActorId, ActorType } from "./actor-types";

class ActorContext {
    public actorType: ActorType;
    public actorId: ActorId;
    public api: RatatoskrAPI;
    private activation: ActorActivation;

    constructor(actorType: ActorType, actorId: ActorId, api: RatatoskrAPI, activation: ActorActivation) {
        this.api = api;
        this.actorId = actorId;
        this.actorType = actorType;
        this.activation = activation;
    }

    public registerTimer(name: string, intervalMs: number, recurring: boolean, callback: (...args: any[]) => void) {
        this.activation.registerTimer(name, intervalMs, recurring, callback);
    }

    public unregisterTimer(name: string) {
        this.activation.unregisterTimer(name);
    }

    public registerReminder(name: string, triggerSecs: number) {
        // TODO: Implement
    }
}

export { ActorContext };
