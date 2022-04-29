test=`git branch | grep "*"`
currentBranch=${test:2}

aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 989431465196.dkr.ecr.ap-south-1.amazonaws.com

docker build -t ntrphanikumaryupptv/yupptv:vg-web-$currentBranch -t 989431465196.dkr.ecr.ap-south-1.amazonaws.com/vg-web:$currentBranch .
docker push 989431465196.dkr.ecr.ap-south-1.amazonaws.com/vg-web:$currentBranch
