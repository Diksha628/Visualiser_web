export const THEORY=[
    {  
        algoId:0,
        id: 0,
        name:'Bubble Sort',
        description:'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.',
        complexity:'O(n^2)',
        algorithm: 'There can be upto n numer of passes , (n being equal to number of elements ). At ith pass, the algorithm checks if last n-i-1 numbers are sorted',
        img: '/assets/bubble_1.png'
    },
    {   
        algoId:0,
        id: 1,
        name:'Insertion Sort',
        description: 'Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.',
        complexity:'O(n^2)',
        img: '/assets/insertion_1.png'
    },
    {   
        algoId: 0,
        id:2,
        name: 'Merge Sort',
        description: 'Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.',
        complexity: 'O(n log(n))',
        img: '/assets/merge_1.png'
    },
    {   
        algoId :0,
        id:3,
        name:'Quick Sort',
        description: 'QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort which differ in the way we choose pivot element.',
        complexity: 'O(nlog(n))',
        img: '/assets/quick_1.png'
    },
    {   
        algoId:0,
        id:4,
        name:'Heap Sort',
        description: 'Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for remaining element.',
        alhorithm:'Heap sort is an in-place algorithm.Its typical implementation is not stable, but can be made stable .',
        complexity:'O(nlog(n))',
        img: '/assets/heap_1.png'
    },
    {   
        algoId:1,
        id:5,
        name:'Dijkstra Shortest Path Algorithm',
        description: 'we generate a SPT (shortest path tree) with given source as root. We maintain two sets, one set contains vertices included in shortest path tree, other set includes vertices not yet included in shortest path tree. At every step of the algorithm, we find a vertex which is in the other set (set of not yet included) and has a minimum distance from the source.',
        complexity: 'O(V^2) , but can be reduced to O(Elog(v))',
        algorithm:'Algorithm : Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source is calculated and finalized. Initially, this set is empty.  Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first. While sptSet doesn’t include all vertices .a) Pick a vertex u which is not there in sptSet and has minimum distance value. .b) Include u to sptSet. .c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.',
        img: '/assets/dijkstra_1.png'
    }
];