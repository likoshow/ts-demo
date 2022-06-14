interface Thing { /* nothing here */ }
function doSomething(a: Thing) {
  // mysterious implementation here
}
// Expected some or all of these to be errors
doSomething(window);
doSomething(42);
doSomething('huh?');
doSomething({a:1});