class Graph {
    constructor() {
      this.nodes = new Set();
      this.edges = new Map();
    }
  
    addNode(node) {
      this.nodes.add(node);
      this.edges.set(node, []);
    }
  
    addEdge(src, dest, weight) {
      this.edges.get(src).push({ node: dest, weight });
      this.edges.get(dest).push({ node: src, weight }); 
    }
  
    dijkstra(startNode, endNode) {
      const distances = {};
      const visited = new Set();
      const previous = {};
      const queue = new Set(this.nodes);
  
      for (let node of this.nodes) {
        distances[node] = Infinity;
      }
      distances[startNode] = 0;
  
      while (queue.size > 0) {
        let currentNode = [...queue].reduce((minNode, node) =>
          distances[node] < distances[minNode] ? node : minNode
        );
  
        queue.delete(currentNode);
        visited.add(currentNode);
  
        if (currentNode === endNode) break;
  
        for (let neighbor of this.edges.get(currentNode)) {
          if (visited.has(neighbor.node)) continue;
  
          let newDist = distances[currentNode] + neighbor.weight;
          if (newDist < distances[neighbor.node]) {
            distances[neighbor.node] = newDist;
            previous[neighbor.node] = currentNode;
          }
        }
      }
  
      
      const path = [];
      let current = endNode;
      while (current !== undefined) {
        path.unshift(current);
        current = previous[current];
      }
  
      return { distance: distances[endNode], path };
    }
  }
  

  const graph = new Graph();
  [1, 2, 3, 4, 5, 6].forEach(n => graph.addNode(n));
  
  graph.addEdge(1, 2, 5);
  graph.addEdge(1, 6, 1);
  graph.addEdge(2, 3, 5);
  graph.addEdge(2, 4, 5);
  graph.addEdge(3, 5, 6);
  graph.addEdge(4, 5, 5);
  graph.addEdge(4, 6, 7);
  graph.addEdge(5, 6, 4);
  

  const { distance, path } = graph.dijkstra(6, 5);
  console.log(`Найкоротший шлях від 6 до 5: ${path.join(' -> ')}`);
  console.log(`Загальна вага шляху: ${distance}`);
  