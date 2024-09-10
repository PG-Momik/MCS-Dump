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

    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const traversalOrder = [];

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (!visited.has(vertex)) {
                visited.add(vertex);
                traversalOrder.push(vertex);

                for (const neighbor of this.adjacencyList[vertex]) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }

        return traversalOrder;
    }

    displayGraph() {
        console.log(this.adjacencyList);
    }
}


const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.displayGraph();
console.log(graph.bfs('A'));
