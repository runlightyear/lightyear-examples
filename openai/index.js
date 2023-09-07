import { handler, getDeployList } from "@runlightyear/lightyear";
import "./src";

exports.handler = handler;
global.handler = handler;

exports.getDeployList = getDeployList;
global.getDeployList = getDeployList;
