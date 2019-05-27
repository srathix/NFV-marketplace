#!/bin/bash 
echo $1 $2 $3
geth --jspath . --exec "loadScript('nfv.js');nfvorg.vnfTypeReg('$1','$2','$3')" attach ipc:http://127.0.0.1:8545


