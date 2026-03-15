from task2 import Vehicle, Car, Motorcycle


def main():

    car1 = Car("Toyota", "Camry", 2022, 4)
    bike1 = Motorcycle("Yamaha", "R1", 2023, False)
    vehicle1 = Vehicle("Generic", "Transport", 2015)

    vehicles = [car1, bike1, vehicle1]

    for v in vehicles:
        print(v)
        print(v.start_engine())  # polymorphism
        print(v.stop_engine())

        if isinstance(v, Car):
            print(v.open_trunk())

        if isinstance(v, Motorcycle):
            print(v.pop_wheelie())

        print()


if __name__ == "__main__":
    main()
