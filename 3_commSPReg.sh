#!/bin/bash 
echo $1 $2 
geth --jspath . --exec "loadScript('nfv.js');nfvorg.commSPReg('$1','$2')" attach ipc:http://127.0.0.1:8545


