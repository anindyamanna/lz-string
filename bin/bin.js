#! /usr/bin/env node
var lzString = require("../libs/lz-string.js");
var fs = require("fs");

if (process.argv.length < 3) {
  console.error("Usage: lz-string <input_file>");
  process.exit(1);
}
if (process.argv[2] === "-c") {
  console.log(lzString.compressToEncodedURIComponent(process.argv[3]));
} else if (process.argv[2] == "-d") {
  console.log(lzString.decompressFromUTF16(process.argv[3]));
}
