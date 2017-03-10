
import MySQLdb as mdb

URL = 'localhost'
USER = 'root'
PASS = ''
DB = ''

class DB:

    def __init__():
        try:
            con = mdb.connect(URL, USER, PASS, DB)
            cur = con.cursor()
        except mdb.Error, e:
            print "Error %d: %s" % (e.args[0],e.args[1])

        return con
