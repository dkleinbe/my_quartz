


# Wireguard

## Install on raspberry

source: [PiVPN : OpenVPN ou WireGuard sur un Raspberry Pi (Tuto)](https://www.cachem.fr/pivpn-openvpn-wireguard-raspberry-pi/)

Avant de commencer l’installation, pensez à mettre à jour votre Raspberry Pi. Ça ne prend que quelques minutes tout au plus. Ensuite, l’installation est très rapide et il n’y a qu’une commande à taper :  
curl -L https://install.pivpn.io | bash

## Port forwarding NAT/PAT

voir [[Ferret/Ferret_network]]

### On livebox

Enable port forwarding to TP-Link

![[Systems/attachements/Wireguard-1.png]]

### On TP-Link

Enable NAT forwarding to Raspberry

- Define static IP for Raspberry interface (see [[Systems/Raspberry bond interfaces]])
  
![[Systems/attachements/Wireguard.png]]

## Generate client's config

### Server side (raspberry au ferret)

```bash
sudo pivpn -a
```

### Client side

- get config file

```bash
scp denis@rasp-ferret:configs/debian-tipi.conf vpn_debian-tipi.conf
```

- then import config see: [[Systems/Wireguard#Create config from wireguard server export\|Create config from wireguard server export]]

## Create config from wireguard server export

```bash
sudo nmcli connection import type wireguard file ./vpn_ferret.conf
```

## Add route to Home assistant

### Manually for test purpose

```bash
sudo ip route add 192.168.0.110/32 dev vpn_ferret
```

### Then in vpn config file

#### Use the UI

```bash
nm-connection-editor
```

![[Systems/attachements/Pasted image 20240312190452.png]]

#### Or edit config file

Config file dir:   
Config file reference: [nm-settings-keyfile: NetworkManager Reference Manual](https://networkmanager.dev/docs/api/latest/nm-settings-keyfile.html)  

```ini
[ipv4]
address1=10.181.170.2/24
dns=9.9.9.9;149.112.112.112;
dns-search=~;
method=manual
; STARTS HERE
route1=192.168.0.110/32
; ENDS HERE
```

⚠️ Reload configuration ⚠️

```bash
sudo nmcli con reload
```

## open connection

```bash
sudo nmcli connection up vpn_ferret
```

Or use the UI (right top of the screen)

## Issues

### Enable logging

[Four Ways to View WireGuard Logs | Pro Custodibus](https://www.procustodibus.com/blog/2021/03/wireguard-logs/#iptables)

### no internet connection

run 

```bash
pivpn -d 
```

a few times, it detected some issue with the config (which was default/vanilla, so don't know why there was a problem), and it automatically fixed them. Then it started working.

Quand le setup de bonding sera fait:  
TODO: change interface (wlan0) to bond0 in setupVars.conf and run the script to add MASQUERADING for the bound interface

