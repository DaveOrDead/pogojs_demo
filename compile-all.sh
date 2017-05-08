#!/bin/bash
PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin
go build ../pogocore/pogo_compiler.go
find . -type f -name "*.pogo" > all_pogos.txt 2>/dev/null
for i in `cat all_pogos.txt |sort` ; do ./pogo_compiler $i > $i.pgsql ; (psql -ddb_pogo_js -Urole_test -q -f $i.pgsql ; rm $i.pgsql) & done
wait
rm pogo_compiler all_pogos.txt