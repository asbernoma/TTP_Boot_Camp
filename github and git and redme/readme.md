# How To Work With Multiple Github Accounts on a single Machine

- 5 steps to setup:

## Steps
- [Step 1](#step-1) : Create SSH keys for all accounts
- [Step 2](#setp-2) : Add SSH keys to SSH Agent
- [Step 3](#step-3) :Add SSH public key to the Github
- [Step 4](#steps-4) :Create a config File and Make Host Entries
- [Step 5](#step-5) :Cloning Github repositories using different accounts

## Step 1:
### Create SSH keys for all accounts
First make sure your current directory is your **.ssh** folder.
```sh
     $ cd ~/.ssh
```
### Syntax for generating unique ssh key for ann account is:
 `ssh-keygen -t rsa -C "your-email-address" -f "github-username" `
- Then enter a password for it (it can be empty)

## Adding or changing a passphrase
- You can change the passphrase for an existing private key without regenerating the keypair by typing the following command:

`ssh-keygen -p -f ~/.ssh`
OR
`ssh-keygen -p -f C:\Users\asbbe\.ssh\githubusername`
- you can type `ls` to see what you have the one have next to it `.pub` is and ssh key

- Tip: If you want `ssh-agent` to forget your key after some time, you can configure it to do so by running `ssh-add -t <seconds>`.
` cd ~/.ssh `
## Step 2:
### Add SSH keys to SSH Agent
Now we have the keys but it cannot be used until we add them to the SSH Agent.
```sh
     ssh-add -K ~/.ssh/githubusername
```