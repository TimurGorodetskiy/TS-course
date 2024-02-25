"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelsTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burstMode) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    getSepia() {
        console.log('Sepia');
    }
}
// const tima = new TakePhoto('test', 'test');
const myInstagram = new Instagram('test', 'test', 8);
myInstagram.getSepia();
myInstagram.getReelsTime();
