#!/bin/sh

while true
do
screen -dmS apiLiv node index.js
screen -x apiLiv
sleep 3
done
