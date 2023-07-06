const { countComments} = require('./commentCounter.js');

describe('countComments', () => {
  test('it should update the comment counter with the provided count', () => {
    // Arrange
    document.body.innerHTML = '<div class="counter"></div>';
    const commentCounter = 10;

    // Act
    countComments(commentCounter);

    // Assert
    expect(document.querySelector('.counter').textContent).toBe('10');
  });
});