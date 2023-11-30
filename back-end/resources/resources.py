import os, sys

import json

from flask import Flask, jsonify, Response, make_response
from flask_restful import Resource, Api
from flask import request

from models.user import User
from models.restaurant import Restaurant
from models.table import Table
from models.order import Order
from models.menu import Menu

app = Flask(__name__)
api = Api(app)

users = {
    'Caslav': User('Caslav', 'sifrica123', 'waiter'),
    'Nevena': User('Nevena', 'sifrica', 'bar'),
    'Aleksandar': User('Aleksandar', 'sifra123', 'chef'),
    'Marko': User('Marko', 'sifricaaaa', 'admin')
}

restaurant = Restaurant('Monza', 'open')

menu = Menu()

#used as an example of the table creation method
tables = {
    'Prazan_sto': Table(4, users['Caslav'], 'open', 1),
    'Pun_sto': Table(4, users['Nevena'], 'taken', 10),
    'Neki_sto': Table(4, users['Aleksandar'], 'open', 4),
    'Cekajuci_sto': Table(4, users['Marko'], 'waiting', 5)
    #append new tables here
}


class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = users.get(username)
            if user and user.password == password:
                user_role = users[username].role
                return {
                    'message':'Login successful', 
                    'role':f"{user_role}", 
                    'name':f"{username}"
                    }, 200
            else:
                return {'error': 'Invalid credentials'}, 401
        else:
            return {'error':'Invalid data provided'}, 401
        
class TableHandler(Resource):
    def post(self):
        data = request.get_json()
        seat_number = data.get('seat_number')
        server = data.get('server')
        status = data.get('status')
        table_number = data.get('table_number')
        table_to_create = Table(seat_number, server, status, table_number)
        if (restaurant.add_table(table_to_create)):
            return {'message':'Table added', 'table_num': f'{table_number}'}, 201
        else:
            return {'error':'Table not added'}, 401
    def get(self):
        data = request.get_json()
        table_number = data.get('table_number')
        table = restaurant.get_table(table_number) #implement this method
        if table:
            return {'table_seats': f'{table.seats}',
                    'table_server': f'{table.user}',
                    'table_status': f'{table.status}',
                    'table_number': f'{table.table_number}'}, 201
        else:
            return {'error': "Table doesn't exist"}, 404
        
class MenuHandler(Resource):
    def post(self):
        data = request.get_json()
        if "items" in data:
            items = data["items"]
            for item, price in items.items():
                menu.add_item(item, price)
            return {'message':'Item added to menu'}, 201
        else:
            return {'error':'Invalid JSON format'}, 400  
        
    def  get(self):
        serialized_menu = json.dumps({"menu": {"items": menu.items}})
        return serialized_menu
        


        
class OrderHandler(Resource):
    def post(self):
        data = request.get_json()
        table_number = data.get('table_number')
        table = restaurant.get_table()



        
api.add_resource(UserLogin, '/login')
api.add_resource(TableHandler, '/table')
api.add_resource(MenuHandler, '/menu')

if __name__ == '__main__':
    app.run(debug=True)


