export default class JSONBroadcastChannelService {
    constructor(channel) {
        this.broadcast = new BroadcastChannel(channel);
    }

    sendJSONMessage(messageObj) {
        const parsedMessageObj = JSON.stringify(messageObj);
        this.broadcast.postMessage(parsedMessageObj);
    }

    handleJSONMessage(func) {
        this.broadcast.onmessage = (event) => {
            const messageData = JSON.parse(event.data);
            func(messageData);
        };
    }
}