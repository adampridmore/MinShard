rem Run Shard A
start runServer_a.bat

rem Run Shard B
start runServer_b.bat

rem Run config servers
start runConfigServer_1.bat
start runConfigServer_2.bat
start runConfigServer_3.bat

rem Run mongos
start runMongos.bat