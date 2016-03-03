describe('Pairings', function () {
    describe('#possiblePairs', function () {
        it('groups alphabetically', function () {
            var pairings = new Pairings(['Mario', 'Luigi', 'Peach', 'Daisy']);

            expect(pairings.possiblePairs()).toEqual([
                ['Daisy', 'Luigi'], ['Daisy', 'Mario'], ['Daisy', 'Peach'],
                ['Luigi', 'Mario'], ['Luigi', 'Peach'],
                ['Mario', 'Peach']
            ]);
        });
    });

    describe('locking in pairs', function () {
        it('marks a pair as active for the day', function () {
            var pairings = new Pairings(['Mario', 'Luigi', 'Peach', 'Daisy']);

            pairings.lockIn(['Mario', 'Peach']);
            pairings.lockIn(['Daisy', 'Luigi']);

            expect(pairings.activePairs()).toEqual([['Daisy', 'Luigi'], ['Mario', 'Peach']]);
        });

        it('is not allowed for members already locked in', function () {
            var pairings = new Pairings(['Mario', 'Luigi', 'Peach', 'Daisy']);

            pairings.lockIn(['Mario', 'Peach']);
            pairings.lockIn(['Mario', 'Luigi']);

            expect(pairings.activePairs()).toEqual([['Mario', 'Peach']]);
        });
    });
});