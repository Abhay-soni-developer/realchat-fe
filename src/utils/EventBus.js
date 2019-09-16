//this eventbus will have 2 methods listen, notify

const events = {
    snackNotification: {
        contexts: [],
        actions: []
    }
}

const eventManager = {

    // this method add a listener for anyRegistered event in eventManager
    listen(eventName, context, callback) {
        if (typeof (eventName) === 'string' && context && callback) {
            Object.keys(events).find(registeredEvent => {
                if (eventName === registeredEvent) {
                    events[eventName].contexts.push(context)
                    events[eventName].actions.push(callback)
                    return true
                } else {
                    // if there is no event added in events corresponding to passed eventName false is returned
                    return false
                }
            })
        } else {
            //if any of the field mentioned above are absent this error is returned
            throw new Error('eventName, context and callback are required parameters')
        }
    },


    //this methods notifies all the listener of the Registered Event
    notify(eventName, data) {
        if (typeof (eventName) === 'string') {
            events[eventName].contexts.forEach((context, index) => {
                console.log(eventName, data, context)
                events.snackNotification.actions[0].call(context, data)
            })
        }
    }

}



export default eventManager;