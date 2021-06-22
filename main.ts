let P1 = 0;
let P0 = 0;
basic.showString("Program Started Successfully");
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    # # # # #
    `);
basic.pause(15000);
basic.clearScreen();
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, P0);
    pins.digitalWritePin(DigitalPin.P1, P1);
});
input.onButtonPressed(Button.A, function () {
    if (P0 === 1) {
        P0 = 0;
        basic.clearScreen();
        basic.showString("P0 Off!");
    } else if (P0 === 0) {
        P0 = 1
        basic.clearScreen();
        basic.showString("P0 On!");
    }
});
input.onButtonPressed(Button.B, function () {
    if (P1 === 0) {
        P1 = 1;
        basic.clearScreen();
        basic.showString("P1 On!");
    } else if (P1 === 1) {
        P1 = 0
        basic.clearScreen();
        basic.showString("P1 Off!");
    }
});