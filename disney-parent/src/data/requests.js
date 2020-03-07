// export const images = [
//  "https://i.imgur.com/kiWvGsf.png",
//  "https://i.imgur.com/X3UvJgv.png",
//  "https://i.imgur.com/mULNDvy.png"
// ]
import {v4 as uuidv4 } from 'uuid'

export const requests = [
  {
    "request": "Need a quick swap if possible!",
    "time": "12:00 A.M.",
    "children": "2",
    "ride": "Avatar Flight of Passage",
    "location": "Tomorrowland",
    "message": "asdfas",
    "isAccepted": true,
    "id": uuidv4()
  },
  {
    "request": "Anyone around that can swap with us??",
    "time": "10:00 A.M.",
    "children": "1",
    "ride": "Test Track",
    "location": "Tomorrowland",
    "message": "asdfas",
    "isAccepted": false,
    "id": uuidv4()
  },
  {
    "request": "Anyone around that can swap with us??",
    "time": "12:30 P.M.",
    "children": "3",
    "ride": "Splash Mountain",
    "location": "Tomorrowland",
    "message": "asdfas",
    "isAccepted": false,
    "id": uuidv4()
  },

]