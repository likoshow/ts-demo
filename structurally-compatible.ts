interface ScreenCoordinate {
  _type?: 'ScreenCoordinate';
  x: number;
  y: number;
}
interface PrintCoordinate {
  _type?: 'PrintCoordinate';
  x: number;
  y: number;
}
function sendToPrinter(pt: PrintCoordinate) {
  // ...
}
function getCursorPos(): ScreenCoordinate {
  // Not a real implementation
  return { x: 0, y: 0 };
}
// This should be an error
sendToPrinter(getCursorPos());