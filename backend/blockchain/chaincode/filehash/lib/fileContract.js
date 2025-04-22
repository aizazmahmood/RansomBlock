'use strict';

const { Contract } = require('fabric-contract-api');

class FileContract extends Contract {

  async initLedger(ctx) {
    console.info('FileContract ledger initialized');
  }

  async storeFileHash(ctx, fileID, hashValue) {
    const exists = await ctx.stub.getState(fileID);
    if (exists && exists.length > 0) {
      throw new Error(`File ${fileID} already exists.`);
    }

    const fileRecord = {
      hash: hashValue,
      timestamp: new Date().toISOString()
    };

    await ctx.stub.putState(fileID, Buffer.from(JSON.stringify(fileRecord)));
    console.info(`Stored hash for file ${fileID}`);
    return JSON.stringify(fileRecord);
  }

  async verifyFileHash(ctx, fileID, newHashValue) {
    const fileData = await ctx.stub.getState(fileID);
    if (!fileData || fileData.length === 0) {
      throw new Error(`File ${fileID} not found.`);
    }

    const record = JSON.parse(fileData.toString());
    const match = record.hash === newHashValue;

    return JSON.stringify({ match, storedHash: record.hash });
  }

  async getFileHash(ctx, fileID) {
    const data = await ctx.stub.getState(fileID);
    if (!data || data.length === 0) {
      throw new Error(`No hash found for file: ${fileID}`);
    }
    return data.toString();
  }
}

module.exports = FileContract;
