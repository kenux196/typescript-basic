class TsStudy {
  run() {
    console.log('======= TS STUDY ==========');
    this.printCoord({ x: 3, y: 6 });
    this.printName({ first: 'kenux' });
    this.printName({ first: 'kenux', last: 'yun' });
    this.printId(101);
    this.printId('202');
    // this.printId({ myId: 22342 });
  }

  printCoord(pt: { x: number; y: number }) {
    console.log("coordinate's x value is " + pt.x);
    console.log("coordinate's y value is " + pt.y);
  }

  printName(obj: { first: string; last?: string }) {
    console.log('🚀 ~ TsStudy ~ printName ~ first:', obj.first);
    console.log('🚀 ~ TsStudy ~ printName ~ last:', obj.last);
    console.log(`${obj.first}, ${obj.last ? obj.last : ''}`);
  }

  printId(id: number | string) {
    console.log('Your ID is: ' + id);
  }
}

export default TsStudy;
