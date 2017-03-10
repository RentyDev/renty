

URL = 'localhost'
USER = 'root'
PASS = ''
DB = ''


import MySQLdb as mdb
import threading, thread, uuid

from minfo import app_dir

from time import sleep

in_queue = False

lock = threading.Lock()

class dbase:
    _db = None
    _cn = None

    # Connect to database
    @classmethod
    def connect(self):
        lock.acquire(True)

        self._cn = mdb.connect(URL, USER, PASS, DB)
        self._db = self._cn.cursor() # Databse Cursor

    # Querry Database
    @classmethod
    def qry(self, qry, params=()):
        global in_queue

        self.connect()

        dat = self.exe(qry,params)

        self.close()
        in_queue = False

        return dat

    # Querry Database
    @classmethod
    def qry_many(self, qry, params=[]):
        global in_queue

        self.connect()

        dat = self.exe_many(qry,params)

        self.close()
        in_queue = False

        return dat

    # Only execute querry
    @classmethod
    def exe(self, qry, params=()):
        self._db.execute(qry,params)
        return self._db.fetchall()


    # Only execute many querry
    @classmethod
    def exe_many(self, qry, params=[]):
        self._db.executemany(qry,params)
        return self._db.fetchall()

    # Commit changes and close
    @classmethod
    def close(self):
        self._cn.close()
        lock.release()

    # Last added id
    @classmethod
    def last_id(self):
        return self._db.lastrowid

    # #TODO: Add Setup method to initate all of the tables
    # def setup(self):
    #     self.connect()
    #
    #     # Create a basic weather test table
    #     self.exe("""
    #         CREATE TABLE IF NOT EXISTS temp_video (
    #             id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    #             v_path TEXT NOT NULL,
    #             time INTEGER NOT NULL
    #         )
    #         """)
    #
    #     self.close()
