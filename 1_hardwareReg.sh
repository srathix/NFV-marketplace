#!/bin/bash 
echo $1 $2 $3 $4 $5
geth --jspath . --exec "loadScript('nfv.js');nfvorg.hardwareReg('$1','$2','$3','$4','$5')" attach ipc:http://127.0.0.1:8545


