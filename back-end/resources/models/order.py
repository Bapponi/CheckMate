from .menu import Menu

class Order:

    def __init__(self, menu):
        self.menu = menu
        self.items = []
        self.price = 0

    def add_item(self, item):
        self.items.append(item)

    def remove_item(self, item):
        if item not in self.items:
            print(f"{item} not in order")
        else:
            self.items.remove(item)

    def get_price(self):
        self.price = 0
        for item in self.items:
            if item in self.menu.items:
                self.price += self.menu.items[item]
        return self.price
            

