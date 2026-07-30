export default function createLinkedList() {
    let headNode = null;
    const append = value => {
        if (headNode === null) headNode = createNode(value);
        else {
            let tmp = headNode;
            while (tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = createNode(value);
        }
    }

    const prepend = value => {
        if (headNode === null) headNode.value = value;
        else {
            let newHeadNode = createNode(value, headNode)
            headNode = newHeadNode;
        }
    }

    const size = () => {
        if (headNode == null) return 0
        let tmp = headNode;
        let NodeCounter = 1;
        while (tmp.nextNode !== null) {
            NodeCounter++;
            tmp = tmp.nextNode;
        }
        return NodeCounter;
    }

    const head = () => {
        if (headNode === null) return undefined;
        else return headNode.value;
    }

    const tail = () => {
        if (headNode === null) return undefined;
        let tmp = headNode;
        while (tmp.nextNode !== null) tmp = tmp.nextNode;
        return tmp.value;
    }

    const at = (index) => {
        let i = 0;
        let tmp = headNode;
        while (tmp.nextNode !== null && i < index) {
            tmp = tmp.nextNode;
            i++;
        }
        if (i === index) return tmp.value;
        else return undefined;
    }

    const pop = () => {

    }

    const contains = (value) => {

    }

    const findIndex = (value) => {

    }

    const toString = () => {
        let tmp = headNode;
        let result = '';
        while (tmp !== null) {
            result += `( ${tmp.value} ) --> `;
            tmp = tmp.nextNode;
        }
        result += "null";
        return result;
        console.log(result);
    }

    const insertAt = (index, ...values) => {

    }

    const removeAt = index => {

    }

    return {append, prepend, size, head, tail, at, pop, contains, findIndex, toString, insertAt, removeAt};
}


function createNode(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
}