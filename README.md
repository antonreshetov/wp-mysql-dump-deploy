# WP MySQL Dump Deploy

Dump the local wordpress database, replace the local path on server path and deploy.

## System Preparation

To use this, you'll need the following things installed on your machine.

1. [NodeJs](http://nodejs.org/) - use the installer.
2. [GulpJS](https://github.com/gulpjs/gulp) - `npm install -g gulp` (mac users may need sudo)

## Local Installation

Clone this repo, or download it into a directory and run `npm install` from inside the directory.

## MySQL Preparation

Modify configuration:

```bash
nano /etc/mysql/my.cnf
```
Find `bind-address` and change to `0.0.0.0` to give remote access.


Entry mysql to give privileges: 

```sql
GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'%'IDENTIFIED BY 'mypassword' WITH GRANT OPTION;

FLUSH PRIVILEGES;
```

Restart mysql

```bash
sudo service mysql restart
```

Add to your mysql server firewall the following rule:

```bash
sudo ufw allow from IP_FROM_YOU_CONNECT to any port 3306
```

## Usage

##### Variables:

* `local.db = 'mylocalbase'`
* `local.path = 'http://site.dev'`
* `local.user = 'myuser'`
* `local.pass = 'mypassword'`
* `remote.db = 'myremotebase'`
* `remote.path = 'http://site.com'`
* `remote.server = 'server IP'`
* `remote.user = 'myuser'`
* `remote.pass = 'mypassword'`

##### Gulp tasks:

* `gulp dump` - Dump DB
* `gulp replace` - Replace local path on server path
* `gulp deploy` - Deploy DB to server


## License
MIT © 2017 [Anton Reshetov](http://web.antonreshetov.com)