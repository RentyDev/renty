from flask import Blueprint, render_template, abort

api_page = Blueprint('simple_page', __name__, template_folder=None)
