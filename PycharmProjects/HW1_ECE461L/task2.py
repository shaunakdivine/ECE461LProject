from task1 import *

class spaceInID(Exception):

    pass

class spaceInPassword(Exception):

    pass

class invalidN(Exception):

    pass

class invalidDir(Exception):

    pass


def testCustomEncrypt():
    try:
        prompt = "Enter userID (no ' ' or '!'): \n"
        userID = input(prompt)
        if " " in userID:
            raise spaceInID

    except spaceInID:
        """When a space is passed into the ID"""
        while " " in userID:
            prompt = "Enter userID (no ' ' or '!'): \n"
            userID = input(prompt)

    try:
        prompt = "Enter password (no ' ' or '!'): \n"
        password = input(prompt)
        if " " in userID:
            raise spaceInPassword

    except spaceInPassword:
        """When a space is passed into the password"""
        while " " in password:
            prompt = "Enter password (no ' ' or '!'): \n"
            password = input(prompt)

    try:
        prompt = "Enter shift value (n): \n"
        n = input(prompt)
        if int(n) < 1:
            raise invalidN

    except invalidN:
        """When N <= 1"""
        while int(n) < 1:
            prompt = "Enter shift value (n): \n"
            n = input(prompt)

    try:
        prompt = "Enter direction (-1 or 1): \n"
        dir = input(prompt)
        if int(dir) != 1 and int(dir) != -1:
            raise invalidDir

    except invalidDir:
        """When D is not 1 or -1"""
        while int(dir) != 1 or int(dir) != -1:
            prompt = "Enter direction (-1 or 1): \n"
            dir = input(prompt)
    print("Original userID: " + userID)
    print("Original password: " + password)
    print("Encrypted userID: " + customEncrypt(userID, int(n), int(dir)))
    print("Encrypted password: " + customEncrypt(password, int(n), int(dir)))







def main():
    testCustomEncrypt()

if __name__ == "__main__":
    main()