from table.py import Table
from bar.py import Bar

class Restaurant:

    STATUS = [ "open", "closed" ]
    TABLES = []
    BARS = []

    def __init__(self, name, status):
        if status not in STATUS:
            raise ValueError(f"{status} isn't a valid status")
        else:
            self.status = status

    def add_bar(self, bar):
        BARS.append(bar)
    
    def add_table(self, table):
        TABLES.append(table)

    def remove_bar(self, bar):
        BARS.remove(bar)

    def remove_table(self, table):
        TABLES.remove(table)

