


# dnsmasq

Man: [dnsmasq(8): lightweight DHCP/caching DNS server - Linux man page](https://linux.die.net/man/8/dnsmasq)
## Install

Source: [Comment utiliser votre Raspberry Pi comme serveur DNS local ? – RaspberryTips](https://raspberrytips.fr/serveur-dns-local-raspberry-pi/)

## Restart service

```bash
service dnsmasq restart
```

## Enable logging

In file: 

```ini
# For debugging purposes, log each DNS query as it passes through
# dnsmasq.
# DKL
log-queries 
# 
log-facility=/var/log/dnsmasq.log
```
