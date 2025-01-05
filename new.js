import { endBenchmark, startBenchmark } from './benchmark.js'

class A {
    constructor(a) {
        this.a = a;
    }
    f1() {
        return this.a
    }
    f2() {
        return this.a
    }
    f3() {
        return this.a
    }
    f4() {
        return this.a
    }
    f5() {
        return this.a
    }
}

const benchmark = startBenchmark()
for (let i = 0; i < benchmark.iterations; i++) {
    new A(i).f1()
}
endBenchmark(benchmark)
