const beautifyPrice = (n: number): string => {
    return `$${n.toFixed(2)}`;
}

export default beautifyPrice;