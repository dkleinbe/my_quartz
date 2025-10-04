```bash
$ sudo nano /etc/dkms/framework.conf

mok_signing_key="/var/lib/shim-signed/mok/MOK.priv"
mok_certificate="/var/lib/shim-signed/mok/MOK.der"
```2


# nVidia driver

## Install driver

_Source:[fr/NvidiaGraphicsDrivers - Debian Wiki](https://wiki.debian.org/fr/NvidiaGraphicsDrivers#Debian_12_.2BAKs_Bookworm_.2BALs-)_

1. Ajoutez les éléments « contrib », « non-free » et « non-free-firmware » à /etc/apt/sources.list, par exemple :

```bash
    # Debian Bookworm
    deb http://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
```

2. Mettez à jour la liste des paquets disponibles, puis installez le paquet [nvidia-driver](https://packages.debian.org/nvidia-driver "DebianPkg"), ainsi que le micrologiciel nécessaire :

```bash
    sudo apt update
    sudo apt install nvidia-driver firmware-misc-nonfree
```    

DKMS construira le module nvidia pour votre système via le paquet [nvidia-kernel-dkms](https://packages.debian.org/nvidia-kernel-dkms "DebianPkg").

À-propos de [SecureBoot](https://wiki.debian.org/SecureBoot) : 

- si vous avez activé [SecureBoot](https://wiki.debian.org/SecureBoot), vous devez signer les modules résultants. Des instructions détaillées sont disponibles [ici](https://wiki.debian.org/fr/SecureBoot#Utiliser_la_cl.2BAOk_pour_signer_les_modules).

1. Redémarrez votre ordinateur pour charger le nouveau pilote.

### Signe packages (secure boot)

_sources_: 

- [R1BNC's Blog](https://r1bnc.com/post/93/)
- [fr/SecureBoot - Debian Wiki](https://wiki.debian.org/fr/SecureBoot#Utiliser_la_cl.2BAOk_pour_signer_les_modules)

This assumes that we have Secure Boot enabled, by default the Nvidia driver will not work on a secure boot enabled machine. We need to sign the kernel module for it to work under Secure Boot (SB).

We can determine the current state of secure boot doing the following:

```bash
$ sudo mokutil --sb-state

SecureBoot enabled
```

To generate a new key, execute the commands below:

```bash
$ sudo apt install sbsigntool
$ sudo mkdir -p /var/lib/shim-signed/mok/
$ sudo cd /var/lib/shim-signed/mok/
$ sudo openssl req -new -x509 -newkey rsa:2048 -keyout MOK.priv -outform DER -out MOK.der -days 36500 -subj "/CN=My Name Here/"

Enter PEM pass phrase:
Verifying - Enter PEM pass phrase:

$ sudo openssl x509 -inform der -in MOK.der -out MOK.pem

```

Be sure to specify and remember the pass phrase of the key.

Enrolling the generated key to our system:

```bash
$ sudo mokutil --import /var/lib/shim-signed/mok/MOK.der
$ sudo mokutil --test-key /var/lib/shim-signed/mok/MOK.der

/var/lib/shim-signed/mok/MOK.der is already in the enrollment request
```

For the dkms to sign kernel modules automatically, we need to add the configuration values to the file: `/etc/dkms/framework.conf`.

>>>>>>5

If the dkms does appear not sign the modules, we need to append the following to the same file **/etc/dkms/framework.conf**:

```bash
$ sudo nano /etc/dkms/framework.conf

sign_tool="/etc/dkms/sign_helper.sh"
```

Now, create the sign_helper script file.

```bash
$ sudo nano /etc/dkms/sign_helper.sh

/lib/modules/"$1"/build/scripts/sign-file sha512 /root/.mok/client.priv /root/.mok/client.der "$2"
```

Set the file be executable:

```bash
$ sudo chmod +x /etc/dkms/sign_helper.sh
```

Setting the environment variables:

```bash
VERSION="$(uname -r)"
SHORT_VERSION="$(uname -r | cut -d . -f 1-2)"
MODULES_DIR=/lib/modules/$VERSION
KBUILD_DIR=/usr/lib/linux-kbuild-$SHORT_VERSION
```

Signing the NVIDIA modules:

```bash
cd "$MODULES_DIR/updates/dkms"
echo -n "Passphrase for the private key: "

read -s KBUILD_SIGN_PIN
export KBUILD_SIGN_PIN

find -name \*.ko | while read i; do sudo --preserve-env=KBUILD_SIGN_PIN "$KBUILD_DIR"/scripts/sign-file sha256 /var/lib/shim-signed/mok/MOK.priv /var/lib/shim-signed/mok/MOK.der "$i" || break; done
sudo update-initramfs -k all -u
```

Signing the kernel:

```bash
cd /var/lib/shim-signed/mok/
sudo sbsign --key MOK.priv --cert MOK.pem "/boot/vmlinuz-$VERSION" --output "/boot/vmlinuz-$VERSION.tmp"
sudo mv "/boot/vmlinuz-$VERSION.tmp" "/boot/vmlinuz-$VERSION"
```

To confirm that we have signed the module, execute the following on the dkms directory:

```bash
cd "$MODULES_DIR/updates/dkms"
sudo  modinfo nvidia-current.ko
```

```
...
filename:       /lib/modules/6.1.0-13-amd64/updates/dkms/nvidia-current.ko
firmware:       nvidia/525.125.06/gsp_tu10x.bin
firmware:       nvidia/525.125.06/gsp_ad10x.bin
alias:          char-major-195-*
version:        525.125.06
supported:      external
license:        NVIDIA
srcversion:     XXX
alias:          pci:z
alias:          pci:x
alias:          pci:y
depends:        drm
retpoline:      Y
name:           nvidia
vermagic:       6.1.0-13-amd64 SMP preempt mod_unload modversions
sig_id:         PKCS#7
signer:         r1bnc
sig_key:        XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX
sig_hashalgo:   sha256
```

We can now restart the machine.

### Enable Wayland

_sources: 

- [NvidiaGraphicsDrivers - Debian Wiki](https://wiki.debian.org/NvidiaGraphicsDrivers#Wayland)

and executed this line to disable the blocking rule:

```bash
$ sudo ln -s /dev/null /etc/udev/rules.d/61-gdm.rules
```

## Optimus

_source:__[NVIDIA Optimus - Debian Wiki](https://wiki.debian.org/NVIDIA%20Optimus#Using_NVIDIA_PRIME_Render_Offload)

- Launch application on GPU:

```bash
$ __NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia application
```

# Tools

## nVidia System Management Interface

```bash
$ nvidia-smi
```