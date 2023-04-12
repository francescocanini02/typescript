export const PI = 3.14;

export function calculateCirumcumference(diameter: number) {
    return diameter * PI;
}

export function calculateArea(diameter: number) {
    return Math.pow(diameter / 2, 2) * PI;
}
