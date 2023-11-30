from .table import Table
from .bar import Bar

class Restaurant:

    STATUS = [ "open", "closed" ]
    TABLES = []
    BARS = []

    def __init__(self, name, status):
        if status not in self.STATUS:
            raise ValueError(f"{status} isn't a valid status")
        else:
            self.status = status

    def add_bar(self, bar):
        self.BARS.append(bar)
    
    def add_table(self, table):
        self.TABLES.append(table)
        return True

    def remove_bar(self, bar):
        self.BARS.remove(bar)

    def remove_table(self, table):
        self.TABLES.remove(table)

    def get_table(self, table_number):
        for table in self.TABLES:
            if table.table_number == table_number:
                return table
            else:
                return False

    def check_status(self):
        return self.status
    
    def change_status(self, status):
        if status not in self.STATUS:
            raise ValueError(f"{status} isn't valid")
        else:
            self.status = status

