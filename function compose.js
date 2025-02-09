function compose(functions) {
    // If the list is empty, return the identity function
    if (functions.length === 0) {
        return x => x;
    }
    
    // Start with the last function and compose functions from right to left
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
}
