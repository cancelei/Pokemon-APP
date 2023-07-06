// Import the function to be tested
import countComments from './commentCounter';

describe('countComments', () => {
  // Test case 1: When commentCounter is an empty string
  test('should set the comment list text content to be an empty string', () => {
    // Arrange
    document.body.innerHTML = '<div class="counter"></div>';
    const commentCounter = '';
    // Act
    countComments(commentCounter);
    // Assert
    expect(document.querySelector('.counter').textContent).toBe('');
  });

  // Test case 2: When commentCounter is a non-empty string
  test('should set the comment list text content to be the same as commentCounter', () => {
    // Arrange
    document.body.innerHTML = '<div class="counter"></div>';
    const commentCounter = '5';
    // Act
    countComments(commentCounter);
    // Assert
    expect(document.querySelector('.counter').textContent).toBe('5');
  });
});