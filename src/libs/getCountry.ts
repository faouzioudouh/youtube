const buildRequest = (url: string, callback: (this: XMLHttpRequestEventTarget, ev: Event) => any) => {
    const oReq = new XMLHttpRequest();
    oReq.onload = callback;
    oReq.open("get", url);
    oReq.send(null);
}

const getUserCountry = () => {
    buildRequest('https://ipinfo.io', () => {

    });
};