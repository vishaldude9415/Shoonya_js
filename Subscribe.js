const Api = require("./lib/RestApi");

api = new Api({});

let feedOpened = false;



const eventHandlerFeedUpdate = (tickData) => {
    console.log("feed update", tickData);
};

const openCallback = () => {
    feedOpened = true;
    console.log("Socket Connection Opened")
};

const eventHandlerOrderUpdate = () =>{
    console.log("Order Update Trigger");
}

api.start_websocket({
    order: eventHandlerOrderUpdate,
    quote: eventHandlerFeedUpdate,
    socket_open: openCallback
});




const waitForFeedOpen = () => {
    return new Promise((resolve) => {
        const checkFeedOpened = () => {
            if (feedOpened) {
                resolve();
            } else {
                setTimeout(checkFeedOpened, 1000); // Check every second
            }
        };
        checkFeedOpened();
    });
};




waitForFeedOpen().then(() => {

    api.subscribe('NFO|68108');

});

