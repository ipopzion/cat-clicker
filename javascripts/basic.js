export function getText(dom) {
    return dom.innerText;
}

export function getBigInt(dom) {
    return BigInt(getText(dom));
}

export function setBigInt(dom, newNumber) {
    dom.innerText = newNumber;
}

export function addBigIntToField(dom, newNumber) {
    const previousNumber = getBigInt(dom);
    setBigInt(dom, previousNumber + BigInt(newNumber));
}

export function addOne(dom) {
    addBigIntToField(dom, 1);
}
