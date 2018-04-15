const testObj = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
    f: {g: "g", h: "h"}
  }
}


const test2 = {...testObj};

test2.c.e = "this is a test";


console.log(testObj);
console.log(test2);