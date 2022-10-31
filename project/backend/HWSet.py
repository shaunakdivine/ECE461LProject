from pymongo import MongoClient

Client = MongoClient("mongodb+srv://davidgross461L:Dg123456@cluster0.7qbmil3.mongodb.net/?retryWrites=true&w=majority")

database = Client.get_default_database()

collectionOne = database["HWSet"]

class HWSet:

    def __init__(self, name, qty):
        self.__name = name
        self.__capacity = qty
        self.__availability = self.capacity
        new_HWSet = {
            "Name": self.__name,
            "Capacity": self.__capacity,
            "Availability": self.__availability
        }
        collectionOne.insert_one(new_HWSet)

    def __del__(self):
        myquery = {"Name": self.__name}
        collectionOne.delete_one(myquery)
        pass

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
        myquery = {"Name": self.__name}
        #mydoc = collectionOne.find_one(myquery)
    
        if qty > self.__availability:
            self.__availability = 0
            new_availability = {"$set": {"Availability": self.__availability}}
            collectionOne.update_one(myquery, new_availability)
            return -1
        else:
            self.__availability = self.__availability - qty
            new_availability = {"$set": {"Availability": self.__availability}}
            collectionOne.update_one(myquery, new_availability)
            return 0

    # method that checks in number of units specified by qty. This method should update
    # the number of units available after check_in. No error checking is required here.
    def check_in(self, qty):
        self.__availability = self.__availability + qty
        myquery = {"Name": self.__name}
        new_availability = {"$set": {"Availability": self.__availability}}
        collectionOne.update_one(myquery, new_availability)

def list_HWSets():
    for x in collectionOne.find({}, {"Name":1, "Capacity": 1, "Availability":1}):
        print(x)