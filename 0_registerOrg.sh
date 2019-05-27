#!/bin/bash 
echo $1 $2 $3 $4
geth --jspath . --exec "loadScript('nfv.js');nfvorg.registerOrg($1,$2,$3,'$4')" attach ipc:http://127.0.0.1:8545


