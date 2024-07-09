export function truncateString(str: string, num: number = 250): string {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + "...";
}