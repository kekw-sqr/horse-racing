#!/bin/bash

set -e

yarn workspace contracts run e2e:node 2>&1 > node.log &

pid=$!

yarn workspace contracts run e2e:deploy

echo "Using local contracts"
cat contracts/e2e/contracts.json

yarn cy:run

kill -9 $pid
