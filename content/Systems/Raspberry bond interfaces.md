```ini
[ipv4]
address1=192.168.0.10/24,192.168.0.1
dns=192.168.1.1;
method=manual
```2


# Raspberry bond interfaces

## Cleanup previous mess ;)

### remove unused interfaces config in /etc/network/interfaces.d 

- bond0
- wg0.conf

### Re activated interfaces.d

Change in /etc/network.interfaces  
 DKL source /etc/network/interfaces.d/*  
To  
source /etc/network/interfaces.d/*

## Enabling Network manager wired Interface Management

If you want NetworkManager to handle interfaces that are enabled in /etc/network/interfaces:

Set managed=true in /etc/NetworkManager/NetworkManager.conf.

`sudo service NetworkManager restart`

## Disable dhcpcd service

```bash
sudo systemctl disable dhcpcd.service
# reboot
sudo reboot
```

## Set static ip to bond interface

Set ip, gateway and dns addresses  
In file :  `/etc/NetworkManager/system-connections/bond0.nmconnection`

>>>>>>1

## Modify wireguard setupvars

To take bond0 interface name into account

In the pivpn config file:

`/etc/pivpn/wireguard/setupVars.conf`

Change wlan0 to bond0 (bond interface name)  
So that iptables can be setup properly

### Set Iptables MASQUERADE rules

- run pivpn to check config

```bash
pivpn -d
```

- Fix Ipatables if necessary

