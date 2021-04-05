import getData from '../../utils/getData'

describe('fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })
    // test('Llamar una API y retornar datos', () => {
    //     fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
    //     getData('https://google.com')
    //         .then((response) => {
    //             expect(response.data).toEqual('12345')
    //         })
    //     expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    // })

    // 1. Callback

    test('Llamar una API y retornar datos', (done) => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        getData('https://google.com')
            .then((response) => {
                expect(response.data).toEqual('12345');
                done();
            });
        expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
    });

    // 2. Retornar promesa

    test('Llamar una API y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        return getData('https://google.com')
            .then((response) => {
                expect(response.data).toEqual('12345');
            });
    });
})