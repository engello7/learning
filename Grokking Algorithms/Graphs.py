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

graphDijkstra = {}
graphDijkstra["start"] = {}
graphDijkstra["start"]["a"] = 6
graphDijkstra["start"]["b"] = 2
graphDijkstra["a"] = {}
graphDijkstra["a"]["fin"] = 1
graphDijkstra["b"] = {}
graphDijkstra["b"]["a"] = 3
graphDijkstra["b"]["fin"] = 5
graphDijkstra["fin"] = {}

infinity = float("inf") 
costs = {} 
costs["a"] = 6 
costs["b"] = 2 
costs["fin"] = infinity

parents = {} 
parents["a"] = "start" 
parents["b"] = "start" 
parents["fin"] = None 

processed = [] 

def find_lowest_cost_node(costs): 
    lowest_cost = float("inf") 
    lowest_cost_node = None 
    for node in costs:
        cost = costs[node] 
        if cost < lowest_cost and node not in processed:
            lowest_cost = cost
            lowest_cost_node = node 
    return lowest_cost_node

node = find_lowest_cost_node(costs)
while node is not None:
    cost = costs[node] 
    neighbors = graphDijkstra[node] 
    for n in neighbors.keys():
        new_cost = cost + neighbors[n]
        if costs[n] > new_cost: 
            costs[n] = new_cost
            parents[n] = node
    processed.append(node) 
    node = find_lowest_cost_node(costs)

print(graphDijkstra)
print(costs)
print(parents)
print(costs)
