type Subscriber = (token: string) => void;

let isRefreshing = false;

let subscribers: Subscriber[] = [];

export function getIsRefreshing() {
    return isRefreshing;
}

export function setRefreshing(value: boolean) {
    isRefreshing = value;
}

export function subscribeTokenRefresh(callback: Subscriber) {
    subscribers.push(callback)
}

export function notifySubscribers(token: string) {
    subscribers.forEach((callback) => callback(token));
    subscribers = [];
}

export function clearSubscribers() {
    subscribers = [];
}
