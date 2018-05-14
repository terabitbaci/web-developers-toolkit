/* Simple Linked Example */


//create a linked list object
let list = function (e) {
    //"self" is the global "this" to be used for all methods; the local "this"-es are to be used inside each method
    const self = this;

    //define key elements...

    //first element in the list
    let first;
    //last element in the list
    let last;
    //current element in the list
    let head;


    //insert a new value method
    self.insert = value => {
        //create a node that will hold the new node value
        const node = new Node(value);
        //if there are no nodes...
        if (first == null) {
            //new node will be the first node and the last
            first = last = node;
        } else {
            //if there are already elements in the linked list
            //head = first means that we start from the beginning of the list
            let head = first;
            //if next element is not null continue through the list
            while (head.next != null) {
                head = head.next;
            }
            //when you reach the end of the list, add node.
            head.next = node;
            //The end of the list will be the last element
            last = head.next;
        }
    }

    //display all node values
    self.show = () => {
        //head = first means that we start from the beginning of the list
        let head = first;
        //if next element is not null continue through the list
        while (head != null) {
            //show existing value
            console.log(head.value);
            head = head.next;
        }
    }

    // remove a value method (find a value and remove it)
    self.remove = value => {
        //make found = false - we did not find the value we were looking for
        let found = false;
        //start at beginning of list
        let head = first;
        //if next element is not null continue through the list
        while (head != null) {
            //if first value is equal to value we are looking for
            if (first.value == value) {
                //if we need to delete first element in pile, remove first element and make second element the first element
                prev = head = first = first.next;
                //we found the element we want to delete
                found = true;
            }
            //remove any subsequent element in the pile
            else {
                //if current value is the value we are searching for
                if (head.value == value) {
                    //we found the element we want to delete
                    found = true;
                    //remove element related to value.
                    prev.next = head.next;
                }
                //previous element will now be the head
                prev = head;
                //head will go further from there
                head = head.next;
            }
        }
        //if we didn't find anything, show error
        if (!found) {
            console.log(`#${value} not found`);
        }
    }

    //update method - find old value (value) and the newValue to be updated
    self.update = (value, newValue) => {
        //start at the beginning of the linked list
        let head = first;
        //as long as the head value is not equal to null - continue iterating through list
        while (head != null) {
            //if current value is the value we are searching for...
            if (head.value == value) {
                //update current value with new value
                head.value = newValue;
            }
            //after current value has been updated, go to the following one
            head = head.next
        }
    }

    //defines the value that needs to be changed
    let Node = function (value) {
        //this is referring to this Node, to the value that needs to be changed
        this.value = value;
        //as we continue through the values, every "next" will be considered a new object that we will fill with data
        const next = {};
    }
    //return the updated function with all methods and new values
    return self;
};


//create a new instance of the list object
let exampleList = new list();

//add new elements in the list
exampleList.insert(1);
exampleList.insert(2);
exampleList.insert(3);
exampleList.insert(4);
//show the list with the new elements in the list
exampleList.show();
console.log("____________________________");



//updated the second element and make it 5
exampleList.update(2, 5);
//show the list with updated element
exampleList.show();
console.log("____________________________");



//remove the 3 element in the list
exampleList.remove(3);
//show the list without the removed element
exampleList.show();







/* Complex Linked List Example (original solution by SF WDI GAIA (https://github.com/sf-wdi-gaia/linked-lists)) */

/* Linked List */
class List {
    constructor() {
        this.start = null;
        this.end = null;
    }

    /*  List methods */
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode() {
        return {
            data: null,
            next: null
        };
    }

    /*
        Method: addAtEnd
        Adds a Node to the END of the List
    */
    addAtEnd(data) {
        // if linkedList is empty
        if (this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    }

    /*
        Method: print
        Traverse the list. For each node, append the current node's data to
        a master list of all data, including head and tail
    */
    print() {
        let listString = 'Head -> ';
        // set our 'current' Node to the starting node
        let current = this.start;
        // while the 'current' Node isn't null
        while (current !== null) {
            // print out the 'current' Node's data
            listString += `${current.data} -> `;
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(`${listString}Tail`);
    }

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead(data) {
        const temp = this.makeNode();
        temp.data = data;
        temp.next = this.start;
        this.start = temp;
    }

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */

    length() {
        let current = this.start;
        let i = 0;
        while (current !== null) {
            i++;
            current = current.next;
        }
        return i;
    }

    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */
    exists(data) {
        // start our node at the start of the list
        let node = this.start;
        // loops through list until node === null
        while (node !== null) {
            // conditional check for data match
            if (data === node.data) {
                return true;
            }
            // increment our node
            node = node.next
        }
        return false;
    }

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each(f) {
        let node = this.start;
        while (node !== null) {
            f(node);
            node = node.next;
        }
    }

    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf(data) {
        let node = this.start;
        let i = 0;
        while (node !== null) {
            if (node.data === data) {
                return i;
            } else {
                node = node.next;
                i++;
            }
        }
        return -1;
    }

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
   */
    dataFrom(i) {
        // Enter code here!
        let node = this.start;
        let index = 0;
        while (node !== null) {
            if (index === i) {
                return node.data;
            } else {
                node = node.next;
                index++;
            }
        }
    }

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */
    insertAt(i, data) {
        // let previousNode;
        const newNode = this.makeNode();
        newNode.data = data;
        let current = this.start;
        let index = 0;
        if (i > this.length() + 1) {
            return "index out of range";
        }
        if (i === 0) {
            this.insertAtHead(data);
        }
        while (current !== null) {
            if (index === i - 1) {
                newNode.next = current.next;
                current.next = newNode;
                if (i === this.length() - 1) {
                    this.end = newNode;
                }
                return "inserted";
            }
            index++;
            current = current.next;
        }
    }

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete(data) {
        // Enter code here!
        if (LinkedList.exists(data)) {
            let current = this.start;
            let previous = null;
            while (current !== null) {
                if (current.data !== data) {
                    previous = current;
                    current = current.next;
                } else {
                    // set previous.data to current.data
                    previous.next = current.next;
                    console.log(`${current.data} deleted`);
                    current.data = null;
                }
            }
        }
    }
}


/* LinkedList initialization */
let LinkedList = new List();
/* We're creating our "base" linkedList */
let i = 2;
while (i <= 20) {
    LinkedList.addAtEnd(i);
    i += 2;
}
/* print */
console.log("Before:");
LinkedList.print();

/* Run your functions here to test */
/* Print again to see your results */

// check insertAtHead method
LinkedList.insertAtHead("Breakfast Burrito");

// check length method
let length = LinkedList.length();
console.log(`Length: ${length}`);

// check exists method
const foundData = LinkedList.exists(8);
console.log(`8 exists in our list: ${foundData}`);

// check each method
function accessor(node) {
    console.log(`${node.data} has been accessed.`)
}
LinkedList.each(accessor);


// check indexOf method
const indexOfSix = LinkedList.indexOf(6);
console.log(`Index of six: ${indexOfSix}`);

// check dataFrom method
const tempData = LinkedList.dataFrom(indexOfSix);
console.log("DataFrom index ", indexOfSix, "=", tempData);

LinkedList.insertAt(3, 'Bertha');

LinkedList.delete(6);

console.log("After:");
LinkedList.print();
