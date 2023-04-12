#[EC2] 更新時會用到的指令

在 EC2 console 按連線，選擇 SSL 會有給一串指令，接著複製指令。
在放置 key 的資料夾打開 git bash，貼上複製的指令，便可以連線了。
連線後，cd 到資料夾。

```bash
cd ~/fileName
```

接著用 git pull 手動更新!!!

```bash
git pull origin branchName
```

斷開現有的連結

```bash
sudo fuser -k 3000/tcp
```

想要先測試不先熱線的話

```bash
python3 app.py
```

確認沒問題，或者就是直接熱線。

```bash
nohup python3 /home/ubuntu/fileName/app.py &
```

MySQL 需要設定時，先登錄 MySQL

```bash
mysql -u root -p
```
