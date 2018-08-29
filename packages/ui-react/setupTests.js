import { configure } from "enzyme";
import 'babel-polyfill';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

global.fetch = require("jest-fetch-mock");
