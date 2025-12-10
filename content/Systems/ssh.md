```
PasswordAuthentication yes
```5


# ssh

## Ajouter un client

### Sur le client

- Generate a public key using `ssh-keygen`
- Enable passwd authentication sur le serveur (see [[Systems/ssh#sur le serveur]])
- Copy your public key:

```
ssh-copy-id -i ~/.ssh/id_rsa.pub USER@HOST -p PORT
```

- Disable passwd authentication sur le serveur 

### sur le serveur

-  Re-enable passwd authentication in `/etc/ssh/sshd_config`

>>>>>>1

Then restart the service:

```
service sshd restart
```

## Utiliser le fichier de configuration SSH

- [Utiliser le fichier de configuration SSH pour ses connexions distantes.](https://www.rix.fr/blog/cours/utiliser-la-configuration-ssh-client)

## Enable environment variables

on the server, make sure to allow client to pass certain environment variables in your `/etc/ssh/sshd_config` config file:

```config
AcceptEnv LANG LC_* FOO BAR* MY_VARIABLE
```