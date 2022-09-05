function getClass() {
  class Test {
    constructor(a,b) {
      this.a = a;
      this.b = b;
    }
    #met() {
      console.log('met');
    }

    gg() {
      this.#met();
    }
  }

  return new Test();
}

export { getClass };