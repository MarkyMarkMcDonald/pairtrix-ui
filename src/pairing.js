function Pairings(names) {
    this.names = names;
    this._activePairs = [];
}

Pairings.prototype.possiblePairs = function () {
    var alphabeticalNames = alphabetize(this.names);
    return _.flatten(alphabeticalNames.map(function (name, index, names) {
        return names.slice(index + 1).map(function (laterName) {
            return [name, laterName];
        });
    }));
};

Pairings.prototype.lockIn = function (pair) {
    this._activePairs.push(pair)
};

Pairings.prototype.activePairs = function () {
    return alphabetize(this._activePairs);
};

function alphabetize(pairs) {
    return pairs.sort();
}