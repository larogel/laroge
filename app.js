const server = require('express'),
      md5 = require('md5'),
      client = require('./models/client'),
      express = require('express');

class User {
  constructor(user, music, films, player) {
    this.user = user;
    this.music = music;
    this.player = player;
    this.films = films;
  }
  
  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
      
  serialize() {
    return {
      user: this.user,
      music: this.music
    }; 
  }
  
}

class Client {
}

class Device {
}

class Method {
      constructor() {}
}


class Server {

  constructor(port, ip) {
    this.express = express.create(ip+':'+port)
  }

}

module.exports = Server;
