// 2225. Find Players with Zero or One Losses

// Problem Source: https://leetcode.com/problems/find-players-with-zero-or-one-losses/

const findPlayersWithZeroOrOneLosses = (matches) => {
  const n = matches.length; // Length of matches

  const players = []; // Array of players

  for (let i = 0; i < n; ++i) {
    // Loop through matches
    const [winner, loser] = matches[i]; // Destructure match

    if (players[winner] == null) players[winner] = [0, 0]; // If player doesn't exist, create it
    if (players[loser] == null) players[loser] = [0, 0]; // If player doesn't exist, create it

    players[winner][0] += 1; // Increment wins
    players[loser][1] += 1; // Increment losses
  }

  const first = []; // Array of players with zero losses
  const second = []; // Array of players with one loss

  for (let i = 1; i <= 1e5; ++i) {
    // Loop through players
    if (players[i] != null) {
      // If player exists
      if (players[i][1] === 0)
        first.push(i); // If player has zero losses, add to first
      else if (players[i][1] === 1) second.push(i); // If player has one loss, add to second
    }
  }

  return [first, second]; // Return both arrays
};

// Time Complexity: O(n) - Loop through matches
// Space Complexity: O(n) - Create players array
