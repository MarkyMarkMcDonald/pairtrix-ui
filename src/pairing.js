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
    var conflict = _.some(this._activePairs, function (activePair) {
        return _.intersection(activePair, pair).length > 0;
    });

    if (!conflict) {
        this._activePairs.push(pair)
    }

    return conflict;
};

Pairings.prototype.activePairs = function () {
    return alphabetize(this._activePairs);
};

function alphabetize(pairs) {
    return pairs.sort();
}