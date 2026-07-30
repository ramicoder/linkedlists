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
        if (headNode === null) return undefined;

        if (headNode.nextNode === null) {
            const lastValue = headNode.value;
            headNode = null;
            return lastValue;
        }

        let tmp = headNode;
        while (tmp.nextNode.nextNode !== null) tmp = tmp.nextNode;

        const lastValue = tmp.nextNode.value;
        tmp.nextNode = null;
        return lastValue;
    }

    const contains = (value) => {

        let tmp = headNode;
        while (tmp !== null) {
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    const findIndex = (value) => {
        let i = 0;
        let tmp = headNode;
        while (tmp !== null) {
            if (tmp.value === value) return i;
            tmp = tmp.nextNode;
            i++;
        }
        return -1;
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
        if (index < 0) return false;

        if (index === 0) {
            for (let i = values.length - 1; i >= 0; i--) {
                const newNode = createNode(values[i]);
                newNode.nextNode = headNode;
                headNode = newNode;
            }
            return true;
        }
        let tmp = headNode;
        let i = 0;

        while (tmp !== null && i < index - 1) {
            tmp = tmp.nextNode;
            i++;
        }
        if (tmp === null) return false;

        for (const value of values) {
            const newNode = createNode(value);
            newNode.nextNode = tmp.nextNode;
            tmp.nextNode = newNode;
            tmp = newNode;
        }
        return true;
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