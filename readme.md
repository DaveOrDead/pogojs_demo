# PogoJS

A lightweight JS library to accompany Pogo applications.


## Getting started (Mac)

### Set up Pogo Environment

Download and install the latest versions of:

1.  [Golang](https://golang.org/dl/) - please use version 1.6 to be consistent with the server version
2.  [Postgres.app](http://postgresapp.com/) - please use version 9.5 to be consistent with the server version

Then in a terminal window:

1.  `export GOPATH=~/gocode` (Specifies the path to Go libraries)
2.  `go get github.com/lib/pq` (Postgres library for Go)

Start up Postgres.app and try running `psql` in the terminal window. If you get the response
“command not found”, you’ll need to add [psql to your path](http://pogostack.com/faq.html#command_not_found).


### Create local database

```
create role role_test login createdb;
create database db_pogo_js owner role_test;
\password role_test
# set password as test
\c db_pogo_js role_test
\i ../pogocore/seed/seed.sql
```

### Compile Pogo files.

When developing this is handled by npm scripts on save, but for initial set up manual compilation can be achieved by opening a second terminal window and running `cd [path/to/local/repo]/web2/crm/` and running `./compile-all.sh`


### Set up localhost domain name

Add the following entry to your `hosts` file.

```
127.0.0.1       dev.pogojs.com
```


### Start Pogo server

From the root open a new terminal window and run: `export GOPATH=~/gocode ; go run ../pogocore/pogo_server.go`
* Visit [http://localhost:4200](http://localhost:4200).


### Frontend

* From the root directory Run `npm install` from the command line.
* Run `npm start`

ES6 transpiling, cocatonation and imports. It also sets up watch tasks for JS and Pogo files.

