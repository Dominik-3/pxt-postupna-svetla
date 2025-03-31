type Color = {
    h: number ;
    s: number ;
    l: number ;
}

let hascolor: Array<number> = [];
const banckColor: Color = {h: 0, s: 0, l: 0}
const colorTree: Array<Color> = [
    {h: 0, s: 100, l: 50},
    {h: 60, s: 100, l: 50 },
    {h: 160, s: 100, l: 50 },
    {h: 240, s: 100, l: 50 },
    {h: 285, s: 100, l: 50 }
]

let colorCount: number = 9

const stripLength = 17;
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)

basic.forever(function(){
    for (let i = 0; i < hascolor.length; i++){
        const count = hascolor[i];
        const place = (stripLength - count) / 2;
        const color = colorTree[i % colorTree.length];

        strip.clear();

        for (let j = place; j < place + count; j++) {
            strip.setPixelColor(j, neopixel.hsl(color.h, color.s, color.l));
        }

        strip.show();
        basic.pause(300);
    }
})