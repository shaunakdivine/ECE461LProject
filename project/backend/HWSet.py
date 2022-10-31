from pymongo import MongoClient

Client = MongoClient("mongodb+srv://davidgross461L:Dg123456@cluster0.7qbmil3.mongodb.net/?retryWrites=true&w=majority")

database = Client.get_default_database()

collectionOne = database["HWSet"]

class HWSet:

    def __init__(self, qty):
        self.__capacity = qty
        self.__availability = self.capacity

    # accessor function to return the number of unused units
    def get_availability(self):
        return self.__availability

    # accessor function to return the total capacity of units
    def get_capacity(self):
        return self.__capacity

    # accessor function to return the total number of checkout quantities
    def get_checkedout_qty(self):
        return self.__capacity - self.__availability

    # method that checks out number of units specified by qty. This method should
    # update the number of units available after check_out. This method should handle
    # the situation if the quantity requested is greater than the current availability
    # in the following manner: Allow users to check out the number of units that are
    # available and then return error = -1.
    def check_out(self, qty):
        if qty > self.__availability:
            self.__availability = 0
            return -1
        else:
            self.__availability = self.__availability - qty
            return 0

    # method that checks in number of units specified by qty. This method should update
    # the number of units available after check_in. No error checking is required here.
    def check_in(self, qty):
        self.__availability = self.__availability + qty