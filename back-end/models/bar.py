from table.py import Table

class Bar(Table):

    def __init__(self, seat_number, user, status, bar_number):
        super().__init__(seat_number, user, status, bar_number)