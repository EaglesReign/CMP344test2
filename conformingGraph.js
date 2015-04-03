//Phil Hofer
//CMP344 Exam 2 Practicum Algorithms and Operations Problem 2
//4/3/2015
//conformingGraph.js

//This program creates a graph with at least six vertices. Each of these
//vertices connects to at least one other vertex. I have provided a pair 
//of vertices with at least two paths to get from the first to the second.

load("Graph.js");
//create a graph with 6 vertices
g = new Graph(6);

//add all of the edges
g.addEdge(0,3);
g.addEdge(1,2);
g.addEdge(1,4);
g.addEdge(1,5);
g.addEdge(2,5);
g.addEdge(3,4);

g.bfs(0);
//There are at least 2 paths between 0 and 5, so I have chosen these
var paths = g.pathTo(0,5);
g.showPath(paths);
print("\n");
