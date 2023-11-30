from menu.py import Menu

class Order:

    def __init__(self, menu):
        self.menu = menu
        self.items = []
        self.price = 0

    def add_item(self, item):
        self.items.append(item)
        self.price += menu.get_item_price(item)

    def remove_item(self.item):
        if item not in items:
            print(f"{item} not in order")
        else:
            self.items.remove(item)
            self.price -= menu.get_item_price(item)

    def get_price(self):
        return self.price
