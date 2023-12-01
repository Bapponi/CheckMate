import json
import requests
from models.table import Table
from models.user import User

BASE = " http://127.0.0.1:5000"
headers = {"Content-type":"application/json", "Authorization":"1234567812345678"}

user = {
    'username':'Marko',
    'password':'sifricaaaa'
}

users = {
    'Caslav': User('Caslav', 'sifrica123', 'waiter'),
    'Nevena': User('Nevena', 'sifrica', 'bar'),
    'Aleksandar': User('Aleksandar', 'sifra123', 'chef'),
    'Marko': User('Marko', 'sifricaaaa', 'admin')
}

tables = {
    'Prazan_sto': Table(4, users['Caslav'], 'open', 1),
    'Pun_sto': Table(4, users['Nevena'], 'taken', 10),
    'Neki_sto': Table(4, users['Aleksandar'], 'open', 4),
    'Cekajuci_sto': Table(4, users['Marko'], 'waiting', 5)
    #append new tables here
}

table = {
    'seat_number': 4,
    'server': 'Caslav',
    'status': 'open',
    'table_number': 5
}

menu = {
    "items": {
        "item1":10,
        "item2":20,
        "item3":22,
        "item4":22,
        "item5":23
    }
}

order = {
    "table_number": 5,
    "items": {
        "item1":6,
        "item2":2,
        "item3":2,
        "item4":2,
        "item5":2
    }
}

test_order_get = {
    'table_number':5
}

test_check_creation = {
    'table_number': 5,
    'number_of_splits': 0
}

response = requests.post(BASE + '/login', data=json.dumps(user), headers=headers)
response1 = requests.post(BASE + '/table', data = json.dumps(table), headers=headers)
response2 = requests.get(BASE + '/table', data=json.dumps({'table_number': 5}), headers=headers)
response3 = requests.post(BASE + '/menu', data=json.dumps(menu), headers=headers)
response4 = requests.get(BASE + "/menu", headers=headers)
response5 = requests.post(BASE + '/order', data=json.dumps(order), headers=headers)
response6 = requests.get(BASE + '/order', data=json.dumps(test_order_get), headers=headers)
response7 = requests.get(BASE + '/check', data=json.dumps(test_check_creation), headers=headers)

if __name__ == '__main__':
    print(response.content)
    print(response1.content)
    print(response2.content)
    print(response3.content)
    print(response4.content)
    print(response5)
    print(response6.content)
    print(response7.content)