class Menu:

    def __init__(self):
        self.items = {}

    def add_item(self, item, price):
        if item in self.items:
            print(f"{item} is already in Menu")
        else:
            self.items[item] = float(price)
            print(f"{item} added to menu with price {price:2.f}")
        
    def remove_item(self, item):
        if item in self.items:
            del self.items[item]
            print(f"{item} removed from menu")
        else:
            print(f"{item} not in menu")

    def get_item_price(self, item):
        if item in self.items:
            return self.items[item]
        else:
            print(f"{item} not in Menu")

    def display_menu(self):
        if not self.items:
            print("Menu is empty.")
            return None
        else:
            return self.items