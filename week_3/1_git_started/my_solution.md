## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
git add marks files so that Git knows about them, adding them to be committed on your next commit.

#### branch
git branch allows you to make a 'branch' of the repo you are working in so you can make your own edits, rather than in the master repo.

#### checkout
git checkout lets you open up a repo and navigate it, in the sense that you are checking it out, or looking at it. 

#### clone
git clone makes a complete copy of a repo into a new directory, while forking an initial branch from the repo for you. This is kind of like the fork button in github.com

#### commit
git commit is the most necessary of steps to make sure your edits are commited to the repo. You run the command, most often, git commit -m "comment here". You need to make a comment every time you commit.

#### fetch
git featch does what it sounds like, it fetches things from a different repo. Using the command will fetch all branches of a repo and store them locally on your computer.

#### log
git log displays an entire log of commits. This one seems pretty straight forward.

#### merge
git merge allows you to merge your work from a branch (git branch command from above) back to your master branch.

#### pull
git pull is used to 'grab' files to your local repoository if you aren't working online. All changes made to the master can be pulled down using this command.

#### push
git push makes your changes on your local computer available online. You use this command to make all commits visible online.

#### reset
git reset lets you make a file go back to the the original pull file. This is useful if you made a commit to something and you want to use the file that someone updated on the master. You can reset your changes and fetch the new one.

#### rm
git rm removes files from your index or the tree.

#### status
git status tells you all the files that are sitting with changes and need to be add to commit. It will also tell you added files that need to be commited.

## Release 4: Git Workflow

- Push files to a remote repository
	- Step 1: Make changes to a file and save those changes.
	- Step 2: git add 'filename' so Git can recognize them.
	- Step 3: git commit -m "comment" to add the the changes to your repo
	- Step 4: git push -u the repo to make them available online.
- Fetch changes
	- Step 1: git fetch 'repo name' (this gives us the master of the repo)
	- Step 2: git checkout 'master repo name' (this will checkout the repo and ready it for merge)
	- Step 3: git merge 'repo/master' (this will merge all changes with the new)
- Commit locally
	- Step 1: Make changes to a file and save
	- Step 2: git commit -m "comment"