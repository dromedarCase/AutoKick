module.exports = function (size) {
    return {
        logSize: size,
        index: 0,
        messages: new Array(size),
        addMessage: function (msg) {
            // minimal ring buffer implementation
            this.messages[this.index] = msg;
            this.index = (this.index + 1) % this.logSize;
        }
    }
}
