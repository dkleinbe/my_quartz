


# Network Manager

## interfaces

### cli
```bash
nmcli
```

### gnome

```bash
nm-connection-editor
```

### terminal

```bash
nmtui
```

## List connections

```bash
nmcli -f NAME,DEVICE,FILENAME connection show
```

## Bonding interfaces

[Chapter 3. Configuring a network bond | Red Hat Product Documentation](https://docs.redhat.com/fr/documentation/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/configuring-network-bonding_configuring-and-managing-networking#creating-a-network-bond-to-enable-switching-between-an-ethernet-and-wireless-connection-without-interrupting-the-vpn_configuring-network-bonding)

```bash
# create bond onnection
nmcli connection add type bond con-name bond0 ifname bond0 bond.options "mode=active-backup"
# bond wired connection to bond0
sudo nmcli connection modify uuid 2aabf3ba-5ba8-3e0e-bae5-a366da30b829 master bond0
# bond wi-fi connection to bond0
sudo nmcli connection modify Freebox_SORYP24 master bond0
# Set the device associated with the Ethernet connection as primary device of the bond
nmcli con modify bond0 +bond.options "primary=enp2s0f1"
# Configure that NetworkManager automatically activates ports when the bond0 device is activated
nmcli connection modify bond0 connection.autoconnect-slaves 1
#Activate connection
nmcli connection up bond0
```

> [!attention] switch OFF bond connection to use other wifi network
>
>```bash
>nmcli connection down bond0
>```

#### View the bond configuration information

```bash
cat /proc/net/bonding/bond0
```


## Config files samples


> [!note]+ bond0.nmconnection
>
>```bash title="Systems/Code_files/bond/bond0.nmconnection"
>  [connection]
> id=bond0
> uuid=4a789360-7886-497f-b955-11f0f0f277da
> type=bond
> autoconnect-priority=10
> autoconnect-slaves=1
> interface-name=bond0
> timestamp=1720632746
> 
> [bond]
> downdelay=2000
> miimon=1000
> mode=active-backup
> primary=enp2s0f1
> updelay=0
> 
> [ipv4]
> method=auto
> 
> [ipv6]
> addr-gen-mode=stable-privacy
> method=auto
> 
> [proxy]
> 
> ```


> [!note]+ Wired connection 1.nmconnection
>
>```bash title="Systems/Code_files/bond/Wired connection 1.nmconnection"
>  [connection]
> id=Wired connection 1
> uuid=2aabf3ba-5ba8-3e0e-bae5-a366da30b829
> type=ethernet
> interface-name=enp2s0f1
> master=bond0
> slave-type=bond
> timestamp=1720633902
> 
> [ethernet]
> 
> ```


> [!note]+ Freebox_SORYP24.nmconnection
>
>```bash title="Systems/Code_files/bond/Freebox_SORYP24.nmconnection"
>  [connection]
> id=Freebox_SORYP24
> uuid=5e41345d-1b15-4500-80e3-3cfd5fd4a689
> type=wifi
> master=bond0
> slave-type=bond
> timestamp=1720633903
> 
> [wifi]
> mode=infrastructure
> ssid=Freebox_SORYP24
> 
> [wifi-security]
> key-mgmt=wpa-psk
> psk=XXXXXXXXXXXXXXXXXXXXX
> 
> ```


