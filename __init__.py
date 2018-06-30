"""
	Created on: Sat Jun 23 15:08:16 IST 2018
	Author: Prakhar Srivastava
"""
from flask import Flask, url_for, render_template, redirect, request, jsonify
from flask_cors import CORS
from bson.json_util import dumps
from flask_pymongo import PyMongo
import json as js
import requests as rq
app = Flask(__name__)
CORS(app)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
#app.config['MONGO_DBNAME']='<DBNAME_HERE>'
mongo=None
with app.app_context():
	global mongo
	mongo=PyMongo(app)
@app.route('/')
def main_page():
	return render_template('index.html')

@app.route('/login')
def login():
	return render_template('login.html')


@app.route('/dashboard',methods=['GET','POST'])
def dashboard():
	if request.method=='GET':
		return redirect('/',code=302)