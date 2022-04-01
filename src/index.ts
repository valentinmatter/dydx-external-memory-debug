import { DydxClient } from "@dydxprotocol/v3-client";

new DydxClient("https://api.dydx.exchange");

console.log(process.memoryUsage());
