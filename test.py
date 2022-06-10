# for i in range(4):
#     print(i, end=" ")
#
heightDay = 7
heightNight = 2

def distance(d):
    depth = 0
    perDay= heightDay - heightNight
    days = 1
    while depth < d:
        depth = depth + perDay
        days+=1
    print(days)
distance(42)


# for i in range(0,8):
#     i+=1
#     print(i)