from flask import Blueprint, render_template, abort

from api import DB

api_page = Blueprint('simple_page', __name__, template_folder=None)

@api_page.route('/api')
def api_home():

    return DB.qry("")
