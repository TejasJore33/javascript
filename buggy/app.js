const usersDB = [
    { id: 1, name: "Alice", age: 28, isActive: true },
    { id: 2, name: "Bob", age: null, isActive: false },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Dana", isActive: true },
    { id: 5, name: "Eve", age: 22, isActive: false } // ❌ Bug: "yes" is a string not a boolean
];

function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 2000;

        setTimeout(() => {
            const user = usersDB.find(u => u.id === id);
            if (!user) {
                reject(new Error(`User with ID ${id} not found`));
            } else {
                if (Math.random() < 0.2) {
                    reject(new Error(`Random API failure for user ID ${id}`));
                } else {
                    resolve(user);
                }
            }
        }, delay);
    });
}

async function processUsers(ids) {
    const results = [];

    for (let id of ids) {
        try {
            const user = await fetchUserData(id);
            console.log(`Fetched: ${user.name}`);

            const processed = processUser(user); // ❌ This may throw
            results.push(processed);
        } catch (err) {
            console.error(`Error processing user ${id}:`, err.message);
        }
    }

    return results;
}

function processUser(user) {
    // ❌ Bug 1: age might be null or undefined
    if (user.age == undefined) {
        alert('age is not defined')
    }else {
        const ageGroup = user.age > 30 ? 'Senior' : 'Junior';
    }

    // ❌ Bug 2: isActive might be string, undefined or false
    if (!user.isActive) {
        throw new Error(`Inactive or invalid user: ${user.name}`);
    }

    return {
        name: user.name,
        ageGroup,
        active: user.isActive
    };
}

async function startProcessing() {
    const input = document.getElementById("userIds").value;
    const idList = input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x));
    const output = document.getElementById("output");
    output.textContent = "Processing...\n";

    const results = await processUsers(idList);
    output.textContent += JSON.stringify(results, null, 2);
}
