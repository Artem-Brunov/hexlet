function getClass() {
  class Test {
    constructor() {

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