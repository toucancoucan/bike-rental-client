const beautifyPrice = (n: number ): string => {
    return `${Math.round(n * 100) / 100}$`;
}

export default beautifyPrice;