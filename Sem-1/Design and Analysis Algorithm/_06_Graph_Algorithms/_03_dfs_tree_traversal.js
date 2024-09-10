class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    displayGraph() {
        console.log(this.adjacencyList);
    }

    dfs(start, visited = new Set(), traversalOrder = []) {
        if (visited.has(start)) return traversalOrder;

        visited.add(start);
        traversalOrder.push(start);

        for (const neighbor of this.adjacencyList[start]) {
            this.dfs(neighbor, visited, traversalOrder);
        }

        return traversalOrder;
    }
}


const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.displayGraph();
console.log(graph.dfs('A'));