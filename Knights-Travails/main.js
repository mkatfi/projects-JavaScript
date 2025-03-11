
function knightMoves(start, end) {
    const moves = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ];

    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];

        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            console.log(path.map(square => `[${square}]`).join(" -> "));
            // path.forEach((square) => console.log(square));
            return path;
        }

        for (const [dx, dy] of moves) {
            const nextX = x + dx;
            const nextY = y + dy;
            const key = `${nextX},${nextY}`;

            if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8 && !visited.has(key)) {
                visited.add(key);
                queue.push([...path, [nextX, nextY]]);
            }
        }
    }

    console.log("No path found.");
    return null;
}

// Example usage
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
