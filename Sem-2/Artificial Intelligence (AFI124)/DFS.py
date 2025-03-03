def dfs(graph, start):
    visited = set()
    stack = [start]
    traversal_order = []

    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            traversal_order.append(node)
            stack.extend(reversed(graph[node]))

    return traversal_order


graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

dfs_result = dfs(graph, 'A')

print("DFS Traversal:", dfs_result)
