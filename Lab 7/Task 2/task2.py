# a
class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model}'s engine has started."

    def stop_engine(self):
        return f"{self.brand} {self.model}'s engine has stopped."

    def __str__(self):
        return f"Vehicle: {self.brand} {self.model}, Year: {self.year}"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def open_trunk(self):
        return f"{self.brand} {self.model}'s trunk is open."

    # Method overriding
    def start_engine(self):
        return f"{self.brand} {self.model} car engine starts with a key."



class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def pop_wheelie(self):
        return f"{self.brand} {self.model} is doing a wheelie!"

    # Method overriding
    def start_engine(self):
        return f"{self.brand} {self.model} motorcycle starts with a button."


car1 = Car("Toyota", "Camry", 2022, 4)
bike1 = Motorcycle("Yamaha", "R1", 2023, False)

print(car1)
print(car1.start_engine())
print(car1.open_trunk())

print()

print(bike1)
print(bike1.start_engine())
print(bike1.pop_wheelie())






