#!/usr/bin/env python3

def fizzbuzz():
    result =[]
    for number in range(1,101):
        if number % 3 == 0 and number % 5 == 0:
            result.append("fizzbuzz")
        elif number % 3 == 0:
            result.append("fizz")
        elif number % 5 == 0:
            result.append("buzz")
        else:
            result.append(str(number))
    return result



print(fizzbuzz())