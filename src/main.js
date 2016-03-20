var pairings = new Pairings(['Mark', 'Zoe', 'David', 'Steven']);

var possiblePairs = pairings.possiblePairs();

var groupedPairs = _.groupBy(possiblePairs, function (pair) {
    return pair[0];
});

var things = _.map(groupedPairs, function (pairings, firstInPair) {
    return listOfPairings(firstInPair, pairings.map(function(pair){
        return pair[1];
    }))
});

function listOfPairings(header, otherPersons) {
    var dataTerm = '<dt>' + header + '</dt>';

    var descriptions = otherPersons.map(function (otherPerson) {
        return '<dd>' + otherPerson + '</dd>';
    }).join(' ');

    return '<dl>' + dataTerm + descriptions + '</dl>'
}

$(function () {
    $('#pairings').eq(0).html(things.join('<br/>'));
});
