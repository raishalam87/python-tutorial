// socket.js
import { io } from "socket.io-client";

const socket = io("https://d6c7865b-1b98-4d0a-90b3-c5ef8da85ca0-00-10wiszkdxg9pw.sisko.replit.dev", {
  transports: ["websocket"]  // ✅ Force websocket, disable polling
});

export default socket;
