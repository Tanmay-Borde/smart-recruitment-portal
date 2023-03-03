#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask, request, jsonify
from flask_script import Manager
from flask_cors import CORS, cross_origin

# import mysql.connector

app = Flask(__name__)
CORS(app)

manager = Manager(app)


@app.route('/job/add', methods=['POST'])
@cross_origin()
def addJob():
    record = json.loads(request.data)
    # mydb=dbConnect()
    # mycursor = mydb.cursor()
    # mycursor.execute("SHOW TABLES")
    # for x in mycursor:
    #     print(x)

    return jsonify(record)
# app.run()

# def dbConnect():
#     print("db conect start")
#     mydb = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="root@1234",
#     database="smart_recruiter")
#     print("db connected")
#     return mydb


@manager.command
def runserver():
    app.run()
    # dbConnect()


if __name__ == "__main__":
    manager.run()
