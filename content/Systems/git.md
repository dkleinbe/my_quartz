---
{"publish":true,"created":"2025.09.04 15:22","modified":"2025.09.11 16:21","tags":["dev","git","kb"],"cssclasses":""}
---


# GIT

## Doc

- [Git - Reference](https://git-scm.com/docs)
- [Git - Book](https://git-scm.com/book/en/v2)
- [Git Immersion](https://gitimmersion.com/)

## List staged files

```bash
git diff --staged --name-only
```

## Branches

source: [Git - Branches et fusions : les bases](https://git-scm.com/book/fr/v2/Les-branches-avec-Git-Branches-et-fusions%C2%A0:-les-bases)

### Create branch

Create a new branch and switch to that branch

```bash
git switch -c new_branch
```

or

```bash
git checkout -b new_branch
```

### Push a new local branch to a remote Git

source: [How do I push a new local branch to a remote Git](https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too)

```bash
git push -u origin <branch>
```

### Delete branch locally and remotely

source: [version control - How do I delete a Git branch locally and remotely? - Stack Overflow](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely)

#### Delete Local Branch

To delete the _**local**_ branch, use one of the following:

```bash
git branch -d <branch_name>
git branch -D <branch_name>
```

- The `-d` option is an alias for `--delete`, which only deletes the branch if it has already been fully merged in its upstream branch.
- The `-D` option is an alias for `--delete --force`, which deletes the branch "irrespective of its merged status." [Source: `man git-branch`]
- As of [Git v2.3](https://github.com/git/git/blob/master/Documentation/RelNotes/2.3.0.txt), `git branch -d` (delete) learned to honor the `-f` (force) flag.
- You will receive an error if you try to delete the currently selected branch.

#### Delete Remote Branch

As of [Git v1.7.0](https://github.com/gitster/git/blob/master/Documentation/RelNotes/1.7.0.txt), you can delete a _**remote**_ branch using

```bash
$ git push <remote_name> --delete <branch_name>
# or
$ git push origin --delete <remote-branch-name>
```

which might be easier to remember than

```bash
$ git push <remote_name> :<branch_name>
```

#### Fetch changes

Finally, execute the following on other machines to propagate changes:

```bash
# Fetch changes from all remotes and locally delete 
# remote deleted branches/tags etc
# --prune will do the job :-;
git fetch --all --prune
```

## Change the commit author for a single commit

source: [git - How can I change the commit author for a single commit? - Stack Overflow](https://stackoverflow.com/questions/3042437/how-can-i-change-the-commit-author-for-a-single-commit)

- Reset author for the current repo:

```bash
git config --local user.name "Alex Smith"
git config --local user.email alex@email.com
```

- Now reset the author of your commit without edit required:

```bash
    git commit --amend --reset-author --no-edit
```

## Options de pull

source: [Configurer le pull en mode "rebase" • Comprendre Git](https://comprendre-git.com/fr/config/git-pull-rebase/)

## Rewriting history

source: [Git - Rewriting History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages)

## Stop tracking and ignore changes to a file

- source:  [How to stop tracking and ignore changes to a file in Git? - Stack Overflow](https://stackoverflow.com/questions/936249/how-to-stop-tracking-and-ignore-changes-to-a-file-in-git)
- Just calling `git rm --cached` on each of the files you want to remove from revision control should be fine
- see also: [Git - Maintenance and Data Recovery](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery)

## Git update-index --skip-worktree, and how I used to hate config files

- source:  [Git update-index --skip-worktree, and how I used to hate config files](https://compiledsuccessfully.dev/git-skip-worktree/)
- Set flag

```bash
git update-index --skip-worktree <file_name>
```

- Remove flag

```bash
git update-index --no-skip-worktree <file_name>
```

##  Formatting (LF-style) and Whitespace 

- [Git - Git Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_formatting_and_whitespace)

## Reset to remote branch state

```bash
git fetch origin
git reset --hard origin/main
```

## Manage credentials

- see [[Systems/Windows#Manage Credentials]]

## Configuring a remote repository for a fork

- source:  [Configuring a remote repository for a fork - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork)

1. List the current configured remote repository for your fork.

```bash
git remote -v
> origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
> origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
```

2. Specify a new remote _upstream_ repository that will be synced with the fork.

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git
```

3. Verify the new upstream repository you've specified for your fork.

```bash
git remote -v
> origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
> origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
> upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
> upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
```

## Syncing a fork

Sync a fork of a repository to keep it up-to-date with the upstream repository.

Before you can sync your fork with an upstream repository, you must configure a remote that points to the upstream repository in Git. For more information, see [Configuring a remote repository for a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork).

1. Open Terminal.
    
2. Change the current working directory to your local project.
    
3. Fetch the branches and their respective commits from the upstream repository. Commits to `BRANCH-NAME` will be stored in the local branch `upstream/BRANCH-NAME`.

```shell
git fetch upstream
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY
>  * [new branch]      main     -> upstream/main
```

4. Check out your fork's local default branch - in this case, we use `main`.

```shell
git checkout main
> Switched to branch 'main'
```

5. Merge the changes from the upstream default branch - in this case, `upstream/main` - into your local default branch. This brings your fork's default branch into sync with the upstream repository, without losing your local changes.

```bash
git merge upstream/main
> Updating a422352..5fdff0f
> Fast-forward
>  README                    |    9 -------
>  README.md                 |    7 ++++++
>  2 files changed, 7 insertions(+), 9 deletions(-)
>  delete mode 100644 README
>  create mode 100644 README.md
```

6. If your local branch didn't have any unique commits, Git will perform a fast-forward. For more information, see [Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) in the Git documentation.

```bash
 git merge upstream/main
 > Updating 34e91da..16c56ad
 > Fast-forward
 >  README.md                 |    5 +++--
 >  1 file changed, 3 insertions(+), 2 deletions(-)
 ```

   7. If your local branch had unique commits, you may need to resolve conflicts. For more information, see [Addressing merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts).

>[!tip]  
>Syncing your fork only updates your local copy of the repository. To update your fork on GitHub.com, you must [push your changes](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository).

## Configurer le pull en mode "rebase"

source: [Configurer le pull en mode "rebase" • Comprendre Git](https://comprendre-git.com/fr/config/git-pull-rebase/)

## Tag

source: [Git - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)  
Git supports two types of tags: _lightweight_ and _annotated_.

### Create annotated tag

```bash
git tag -a v1.4 -m "my version 1.4"
```

### Create lightweight tag

```bash
git tag v1.4-lw
```

### Pushing tag

```bash
git push origin v1.5
```

### Delete tag

source: [How To Delete Local and Remote Tags on Git – devconnected](https://devconnected.com/how-to-delete-local-and-remote-tags-on-git/)

#### Delete a local Git tag

**In order to delete a local Git tag, use the “git tag” command with the “-d” option.**

```bash
git tag -d <tag_name>
```

For example, if you wanted to delete a local tag named “v1.0” on your commit list, you would run

```bash
git tag -d v1.0
> Deleted tag 'v1.0' (was 808b598)
```

If you try to delete a Git tag that does not exist, you will simply be notified that the tag does not exist.

```bash
git tag -d v2.0
> error: tag 'v2.0' not found.
```

If you want to make sure that tags were correctly deleted, simply list your existing tags using the tag command and the “-l” option.

```bash
git tag -l
> <empty>
```

#### Delete a remote Git tag

**In order to delete a remote Git tag, use the “git push” command with the “–delete” option and specify the tag name.**

```bash
git push --delete origin tagname
```

Back to the previous example, if you want to delete the remote Git tag named “v1.0”, you would run

```bash
it push --delete origin v1.0

>To https://github.com/SCHKN/repo.git
> - [deleted]         v1.0
```

To delete a remote Git tag, you can also use the “git push” command and specify the tag name using the refs syntax.

```bash
git push origin :refs/tags/<tag>
```

Back to the example, in order to delete a tag named “v1.0”, you would run

```bash
git push origin :refs/tags/v1.0

> To https://github.com/SCHKN/repo.git
> - [deleted]         v1.0
```

> Why should we specify the **“refs/tags”** instead of just specifying the tagname?

In some cases, your tag may have the same name as your branch.

If you tried to delete your Git tag without specifying the “[refs/tags](https://git-scm.com/book/en/v2/Git-Internals-Git-References)” you would get the following error

```bash
it push origin :v1.0

> error: dst refspec v1.0 matches more than one.
> error: failed to push some refs to '<repository>'
```

As a consequence, you need to specify that you are actually trying to delete a Git tag and not a Git repository.

