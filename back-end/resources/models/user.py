class User:
    username = ""
    password = ""
    earned = 0

    ROLES=[ "admin", "chef", "bar", "waiter"]

    def __init__(self, username, password, role):
        self.username = username
        self.password = password

        if role not in self.ROLES:
            raise ValueError(f"Invalid role. Choose from: {', '.join(self.ROLES)}")

        self.role = role
    
    def add_pay(self, pay):
        self.earned += pay

