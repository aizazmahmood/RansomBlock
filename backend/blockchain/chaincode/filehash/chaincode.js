'use strict';

const shim = require('fabric-shim');
const FileContract = require('./lib/fileContract');

shim.start(new FileContract());
