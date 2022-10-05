
def customEncrypt(input, n, direction):
    if " " in input:
        return -1
    if int(n) < 1:
        return -1
    if int(direction) != 1 and int(direction) != -1:
        return -1


    encrypted = list(input)
    encrypted.reverse()
    temp = ''
    val = 0;
    if direction == 1:
        for letter in encrypted:
            val = ord(letter) + n
            if val > 126:
                val = val % 127 + 34
            temp += chr(val)

    elif direction == -1:
        for letter in encrypted:
            val = ord(letter) - n
            if val < 34:
                val = 127 - (34 - val)
            temp += chr(val)

    return temp

def main():
    print(customEncrypt("TSET", 2, 1))

if __name__ == "__main__":
    main()


