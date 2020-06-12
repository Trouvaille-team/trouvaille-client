// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest-canvas-mock')

configure({ adapter: new Adapter() });
const mockGeolocation = { getCurrentPosition: jest.fn(), watchPosition: jest.fn() };

const mockContext = {
  "value": {
    "user": {
      "id": 2,
      "username": "ian"
    },
    "showMenu": false,
    "userInterests": [
      "Camping",
      "Monuments",
      "Parks"
    ],
    "userTrip": {
      "destination": "Chicago",
      "numDetours": "",
      "maxRadius": 6000,
      "maxTime": ""
    },
    "toggleMenu": "ƒ () {}",
    "addUserInterests": "ƒ () {}",
    "removeUserInterests": "ƒ () {}",
    "clearUserInterests": "ƒ () {}",
    "setTrip": "ƒ () {}",
    "waypoints": "[{…}, {…}, {…}]",
    "setWaypoints": "ƒ () {}",
    "setEndCoords": "ƒ () {}",
    "endCoords": "{lat: 41.8781139, lng: -87.6297872}",
    "setOriginCoords": "ƒ () {}",
    "originCoords": "{lat: 43.030898699999995, lng: -87.98246619999999}",
    "processLogin": "ƒ () {}",
    "setUser": "ƒ () {}",
    "processLogout": "ƒ () {}",
    "setRadius": "ƒ () {}",
    "radius": 6000
  }
}
global.navigator.geolocation = mockGeolocation;