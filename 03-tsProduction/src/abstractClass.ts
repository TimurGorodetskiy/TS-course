abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;

  getReelsTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log('Sepia');
  }
}

// const tima = new TakePhoto('test', 'test');

const myInstagram = new Instagram('test', 'test', 8);
myInstagram.getSepia();
myInstagram.getReelsTime();
export {};
