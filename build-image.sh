test=`git branch | grep "*"`
currentBranch=${test:2}

docker build -t ntrphanikumaryupptv/yupptv:vg-web-$currentBranch .
docker push ntrphanikumaryupptv/yupptv:vg-web-$currentBranch
