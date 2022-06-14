class A {
  size: number;
  constructor() {
    this.size = 10;
  }
}

class B {
  size: number;
  constructor() {
    this.size = 10;
  }
}

function AA(a: A) {
  return a.size;
}

function BB(b: B) {
  return b.size;
}

AA(new A());
BB(new B());

// no error
AA(new B());
