from user.py import User
from reservation.py import Reservation
from order.py import Order

class Table:

    orders = []
    STATUS = [ "taken", "served", "waiting", "getfood", "unavailable" ]

    def __init__(self, seat_number, user, status, table_number):
        self.table_number = table_number
        self.seats = seat_number
        self.user = user
        if status not in STATUS:
            raise ValueError(f"{status} isn't a valid status, use different one")
        else:
            self.status = status
    
    def change_status(self, status):
        self.status = status

    def add_order(self, order):
        orders.append(order)

    def remove_order(self, order):
        if order in orders:
            orders.remove(order)

    # def create_reservation(self, reservation):
    #     self.reservation = reservation #ovde isto moras da vidis kada implementiras klasu rezervacija kako ces da izvedes

    # def check_available(self, time):
    #     if self.reservation.check_time(time):
    #         create_reservation() #Ovde moras da vidis sta ces za rezervacije