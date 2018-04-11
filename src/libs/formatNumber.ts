
const ranges = [
    { divider: 1e9 , suffix: 'B' },
    { divider: 1e6 , suffix: 'M' },
    { divider: 1e3 , suffix: 'k' }
  ];

export const formatNumber = (n: number) => {
    for (let i = 0; i < ranges.length; i++) {
        if (n >= ranges[i].divider) {
            return (Math.floor(n / ranges[i].divider)).toString() + ranges[i].suffix;
        }
    }
    return n && n.toString();
};

export const formatNumberCommas = (n: number) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDuration = (duraction: string) => {
    const array = duraction.match(/(\d+)(?=[MHS])/ig) || []; 
    var formatted = array.map((item: string) => {
        if (item.length < 2) {
            return `0${item}`;
        }
        return item;
    }).join(':');
    return formatted;
};
