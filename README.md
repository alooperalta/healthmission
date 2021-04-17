# healtmission

## What is the website about?
It's a blog website about the various events that will take place under EBSB.

## What should we know before-hand?
Knowledge of HTML, CSS, Javascript and Firebase is needed to work on this website. If you don't know it, don't worry we will take up sessions if you want to learn about something.

## What exactly we have to develop now?
There are a few pages to be made. Check the issues in the github repo : https://github.com/alooperalta/healthmission/issues

## How to start working?
1. Fork the master repo : https://github.com/alooperalta/healthmission
2. Clone it on your system
```
git clone https://github.com/<your github username>/healthmission.git
```
3. Add remote upstream 
```
git remote add upstream https://github.com/alooperalta/healthmission.git
```
4. Make your branch even with master
```
git remote update
git rebase upstream/master
git push -u orgin master
```
5. Make the changes you want to in the website
6. Push the changes to your repo
```
git add .
git commit -m "Message"
git push -u origin master
```
7. Create a pull request from your repo.