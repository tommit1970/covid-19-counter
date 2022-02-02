// Når A-knappen trykkes vil telleren økes med en og deretter vise tallet på LED-display
input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showString("" + (counter))
})
// Når B-knappen trykkes vil telleren reduseres med en. Hvis telleren er null eller mer vil den vise tallet(gjøre en refresh på LED-display), hvis ikke vil den sette telleren til null, slik at vi unngår negative tall.
input.onButtonPressed(Button.B, function () {
    counter += -1
    if (counter >= 0) {
        basic.showString("" + (counter))
    } else {
        counter = 0
    }
})
// Når programmet starter settes telleren til null.
let counter = 0
counter = 0
