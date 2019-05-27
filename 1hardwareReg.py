import subprocess

hid = int(input("What's the id of your hardware"))
hid1 = str(hid)
subprocess.check_call(["/media/avivek/New Volume/Today/miner1/1_hardwareReg.sh",name,location,hSpec,swSpec,hid1])