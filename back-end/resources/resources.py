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
from models.bar import Bar

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
        table = restaurant.get_table(table_number)
        if table:
            return {'table_seats': f'{table.seats}',
                    'table_server': f'{table.user}',
                    'table_status': f'{table.status}',
                    'table_number': f'{table.table_number}'}, 201
        else:
            return {'error': "Table doesn't exist"}, 400
        
class BarHandler(Resource):
    def post(self):
        data = request.get_json()
        seat_number = data.get('seat_number')
        server = 'bar'
        status = data.get('status')
        table_number = 0
        bar_to_create = Bar(seat_number, server, status, table_number)
        if (restaurant.add_table(bar_to_create)):
            return {'message':'Bar created', 'table_num':f'{table_number}'}, 201
        else:
            return {'error':'Bar not created'}, 401
    def get(self):
        bar = restaurant.get_table(0) 
        if bar:
            return {
                'bar_seats': f'{bar.seats}',
                'bar_server': f'{bar.server}',
                'bar_status': f'{bar.status}',
                'bar_number': '0'
            }, 201
        else:
            return {'error':"Bar doesn't exist"}, 400
        
class MenuHandler(Resource):
    def post(self):
        data = request.get_json()
        if "items" in data:
            items = data["items"]
            for item, price in items.items():
                menu.add_item(item, price)
            return {'message':'Items added to menu'}, 201
        else:
            return {'error':'Invalid JSON format'}, 400  
        
    def  get(self):
        serialized_menu = json.dumps({"menu": {"items": menu.items}})
        return serialized_menu

        
class OrderHandler(Resource):
    def post(self):
        data = request.get_json()
        table_number = data.get('table_number')
        table = restaurant.get_table(table_number)
        if table:
            order = Order(menu)
            if "items" in data:
                items_to_order = data["items"]
                for item, quantity in items_to_order.items():
                    for i in range(quantity):
                        order.add_item(item)
                table.add_order(order)
                return {'message':'Order added to table'}, 201
            else:
                return {'error': 'Invalid JSON format'}, 400
        else:
            return {'error':"Table doesn't exist"}, 400
        
    def get(self):
        data = request.get_json()
        response = {}
        table_number = data.get('table_number')
        table = restaurant.get_table(table_number)
        if table:
            order_list = table.get_orders()
            for order in order_list:
                order_items = []
                for item in order.items:
                    order_items.append({
                        'name':item
                    })
                response[f"Order"] = order_items
            return jsonify(response)
        else:
            return {'error':"Table doesn't exist"}, 401

class CheckHandler(Resource):
    def get(self):
        data = request.get_json()
        table_number = data.get('table_number')
        number_of_splits = data.get('number_of_splits')
        table = restaurant.get_table(table_number)
        if table:
            checks = []
            sum = 0
            for order in table.orders:
                sum += order.get_price()
            if number_of_splits != 0:
                for i in range(number_of_splits):
                    checks.append({
                        'check':(sum/number_of_splits)
                    })
            else:
                checks.append({
                    'check':sum
                })
            return jsonify(checks)
        else:
            return {'error':'Invalid JSON format'}, 401
            
    

        
api.add_resource(UserLogin, '/login')
api.add_resource(TableHandler, '/table')
api.add_resource(BarHandler, '/bar')
api.add_resource(MenuHandler, '/menu')
api.add_resource(OrderHandler, '/order')
api.add_resource(CheckHandler, '/check')

if __name__ == '__main__':
    app.run(debug=True)


