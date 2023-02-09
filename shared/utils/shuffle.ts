/**
 * Метод для сортировки массива в случайном порядке
 */
export const shuffle = <T>([...arr]): T[] => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};
