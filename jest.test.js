test('test common matcher', () => {
    expect( 2 + 2).toBe(4);
    expect( 2 + 2).not.toBe(3);

})

test('test to be true or false', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('test nlumber', () => {
    expect(3).toBeGreaterThan(1)
    expect(3).toBeLessThan(4)
})

test('test object', () => {
    expect({name: 'tobe'}).toEqual({name: 'tobe'})
})