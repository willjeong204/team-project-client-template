import {readDocument, readEntireDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function getGameData(cb) {
  var gameData = readEntireDocument('games');
  emulateServerReturn(gameData, cb);
}

export function createProfile(img, userName, bio, eMail, steamName, companyName)
{
  var newStatusUpdate =
  {
      "likeCounter": [],
      "type": "statusUpdate",
      "contents": {
        "image": img,
        "user": userName,
        "postDate": time,
        "location": location,
        "contents": contents
      },
      // List of comments on the post
      "comments": []
  };
}
