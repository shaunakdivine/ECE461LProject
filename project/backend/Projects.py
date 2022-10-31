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

    def get_name(self):
        return self.__name

    def get_ID(self):
        return self.__ID

    def get_description(self):
        return self.__description

    def change_name(self, new_name):
        self.__name = new_name

    def change_ID(self, new_ID):
        self.__ID = new_ID

    def change_description(self, new_description):
        self.__description = new_description
