eval `ssh-agent` && ssh-add ~/github && git add . && git commit -m "New Update $currentDate" && git push origin master 