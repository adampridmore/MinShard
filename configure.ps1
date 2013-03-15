& mongo.exe MNAB-DEV15L:30000 --eval "rs.initiate()";
& mongo.exe MNAB-DEV15L:30100 --eval "rs.initiate()";
& mongo.exe MNAB-DEV15L:30200 --eval "rs.initiate()";

Start-Sleep -s 5

& mongo.exe MNAB-DEV15L:40000 setup_shards.js
