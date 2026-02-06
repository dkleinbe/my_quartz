---
{"publish":true,"created":"2025.06.18 13:53","modified":"2025.12.11 11:29","tags":["windows","kb"],"cssclasses":""}
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

## Reset graphic driver

`<win>` + `<ctrl>` + `<shift>` + `B`
## Limit processor performance

source: [Tuning the MSI Stealth GS65 Laptop for Less Heat and Fan Noise - Eric Cheng](https://echeng.com/articles/tuning-msi/)

### **Disable Intel Turbo Boost**

Stable, low heat. CPU will max out at 2.09GHz instead of ~3.9GHz, but has full GPU performance. Very quiet and cool.  
Disable Intel Turbo Boost by setting max CPU to 98% (from 100%)

- Control Panel->Power Options
- Create a Power Plan (in left menu)
- Select “Balanced” to start from, and change Plan Settings
- Change Advanced Power Settings
- Scroll down to “Processor power management”
- Change “Maximum processor state” to 98% for both “On battery” and “Plugged in”

Now, you can choose this power profile when you’re doing things that require GPU and not CPU, or when you just want super quiet, cool performance, like when the computer is on your lap. I’ve been switching to the processor-limited plan for daily use when I’m not editing or encoding video.

![[Systems/attachements/Windows-3.png|400]]  

You can use a utility called [PowerPlanSwitcher](https://l.workplace.com/l.php?u=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fp%2Fpowerplanswitcher%2F9nblggh556l3%3Factivetab%3Dpivot%253Aoverviewtab&h=AT3WX0jp1LsMLcq0r3E3-BLxB3h0z_pRolixlOWY0Joy9KFLtUFtPP3dFaqkLZKKoMRz4G27jXuPctVMG-YVY4WO8eND2LYUDGqNN5n9N-VDBweOUnYBrWBSFL4xP-TrCEwsV_P66aN2g8FhuZUb&__tn__=-UK-R&c[0]=AT27IyudpeJ6z57K5le8wZ37QrVI5WNGU1YYXHGx--bDJCns1lamJkr11vXDFey0mKmoxURqJuMKgoc5ANV0Ph2uZW7BEyKDwOOO9qdSP7M74qaoDHF36oEaStL_cKgxpb1CAhVmomrTjfX9n-fIraYEjz0KkRMwTyk) for two-click power plan changes from the taskbar.