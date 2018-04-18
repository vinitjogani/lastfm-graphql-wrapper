module.exports = {
    API_KEY: 'XXXXX',
    API_SECRET: 'XXXX',
    getRoot() {
        return 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' + this.API_KEY
    }
}