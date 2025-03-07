#!/usr/bin/env bash

nvm use
npm ci
npm build
node --watch build/index.js
