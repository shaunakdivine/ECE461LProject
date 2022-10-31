from cmd import IDENTCHARS
from pymongo import MongoClient

Client = MongoClient("mongodb+srv://davidgross461L:Dg123456@cluster0.7qbmil3.mongodb.net/?retryWrites=true&w=majority")

database = Client.get_default_database()

collectionTwo = database["Projects"]

class Projects:
    def __init__(self, name, ID, description):
        self.__name = name
        self.__ID = ID
        self.__description = description
        new_project = {
            "Name": self.__name,
            "ID": self.__ID,
            "Description": self.__description
        }
        collectionTwo.insert_one(new_project)

    def __del__(self):
        myquery = {"Name": self.__name}
        collectionTwo.delete_one(myquery)

    def get_name(self):
        return self.__name

    def get_ID(self):
        return self.__ID

    def get_description(self):
        return self.__description

    def change_name(self, new_name):
        myquery = {"Name": self.__name}
        #mydoc = collectionTwo.find_one(myquery)
        newvalues = {"$set": {"Name": new_name}}
        collectionTwo.update_one(myquery, newvalues)

        self.__name = new_name


    def change_ID(self, new_ID):
        myquery = {"ID": self.__ID}
        #mydoc = collectionTwo.find_one(myquery)
        newvalues = {"$set": {"ID": new_ID}}
        collectionTwo.update_one(myquery, newvalues)

        self.__ID = new_ID

    def change_description(self, new_description):
        myquery = {"Description": self.__description}
        #mydoc = collectionTwo.find_one(myquery)
        newvalues = {"$set": {"Description": new_description}}
        collectionTwo.update_one(myquery, newvalues)

        self.__description = new_description

def get_projects():
    for x in collectionTwo.find({}, {"Name":1, "ID": 1, "Description":1}):
        print(x)
