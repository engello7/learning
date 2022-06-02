from collections import deque

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []


def searchSeller(name):
    searchQueue = deque()
    searchQueue += graph[name]
    searched = []
    while searchQueue:
        person = searchQueue.popleft()
        if not person in searched:
            if personIsSeller(person):
                print(person + " is a mango selleer!")
                return True
            else:
                searchQueue += graph[person]
                searched.append(person)
    print("nothing is mango seller")
    return False 

def personIsSeller(name):
#    return len(name) < 3
    return name[-1] == 'm'

searchSeller("you")