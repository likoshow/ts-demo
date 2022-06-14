// Strings here are arbitrary, but must be distinct
type SomeUrl = string & {'this is a url': {}};
type FirstName = string & {'person name': {}};

// Add type assertions
let x = '' as SomeUrl;
let y = 'bob' as FirstName;
x = y; // Error

// OK
let xs: string = x;
let ys: string = y;
xs = ys;