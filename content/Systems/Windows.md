---
{"publish":true,"created":"15.01.2022 - 17:45","modified":"21.03.2025 - 10:54","tags":["windows","kb"],"cssclasses":""}
---


#  Windows    

## Manage Credentials

- [Manage Credentials from Credential Manager using Command Prompt](https://www.thewindowsclub.com/manage-credential-manager-using-command-prompt) #credential
- [GitHub - GitCredentialManager/git-credential-manager: Secure, cross-platform Git credential storage with authentication to GitHub, Azure Repos, and other popular Git hosting services.](https://github.com/GitCredentialManager/git-credential-manager) #credential #git

### Windows : use git-credential-manager

- [git-credential-manager](https://github.com/git-ecosystem/git-credential-manager)

```bash
Description:
  Commands for interacting with the GitHub host provider

Usage:
  git-credential-manager github [command] [options]

Options:
  --no-ui         Do not use graphical user interface prompts
  -?, -h, --help  Show help and usage information

Commands:
  list              List all known GitHub accounts.
  login             Add a GitHub account.
  logout <account>  Remove a GitHub account.
```


#### Add github credential with a TOKEN avec git-credential-manager

`git-credential-manager.exe github login`

#### Check github credential avec git-credential-manager

`echo url=https://github.com/dkleinbe/Obsidian_vault.git | git credential fill`

#### Check github credential dans windows

Ouvrir :
`Panneau de configuration\Comptes d’utilisateurs\Gestionnaire d'identification`

![[Systems/attachements/Windows-2.png|600]]

## Add shortcut to taskbar

source: [How to pin either a Shortcut or a Batch file to the new Windows 7, 8 and 10 Taskbar and start menu? - Super User](https://superuser.com/questions/100249/how-to-pin-either-a-shortcut-or-a-batch-file-to-the-new-windows-7-8-and-10-task)

1. Create a shortcut to your batch file.
2. Get into shortcut property and change target to something like: `cmd.exe /C "path-to-your-batch"`.
3. Simply drag your new shortcut to the taskbar. It should now be pinnable.

## Switch between application windows in different virtual desktops

When using multiple virtual desktops, Alt+Tab will only switch between the apps on the current desktop by default. But you can change this behavior to switch between apps on all desktops, as follows.

- Run _Settings > System_
- Choose Multi-tasking
- Under "Virtual desktops", for "Pressing Alt+Tab shows windows that are open on", click the drop-down box and change the default "Only the desktop I’m using" to "All desktops"
- The effect is immediate.

From now on, Alt+Tab will switch between all applications

## Manage virtual memory

- Dans la barre de recherche  
![[Systems/attachements/Windows-1.png|300]]
- Options `Avancé`

![[Systems/attachements/Windows.png]]

## Disable hibernation (hyberfil.sys)

- run `powercfg -h off`
