# WordPress MySQL Dump Deploy

Local DB dump, replace the local path on server path & deploy

##System Preparation

To use this, you'll need the following things installed on your machine.

1. [NodeJs](http://nodejs.org/) - use the installer.
2. [GulpJS](https://github.com/gulpjs/gulp) - `npm install -g gulp` (mac users may need sudo)

##Local Installation

Clone this repo, or download it into a directory and run `npm install` from inside the directory.

##MySQL Preparation

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

#####Variables:

* `localDB = 'mylocalbase'`
* `remoteDB = 'myremotebase'`
* `localPath = 'http://site.dev'`
* `remotePath = 'http://site.com'`
* `server = 'server IP'`
* `user = 'myuser'`
* `pass = 'mypassword'`

#####Gulp tasks:

* `gulp dump` - Dump DB
* `gulp replace` - Replace local path on server path
* `gulp deploy` - Deploy DB to server


## License
MIT © 2017 [Anton Reshetov](http://web.antonreshetov.com)


