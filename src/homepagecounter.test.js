const { updateitemscount } = require('./homepagecounter.js');

describe('updateitemscount', () => {
  beforeEach(() => {
    // Create a dummy counter element
    document.body.innerHTML = `
      <span id="counter"></span>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    `;
  });

  afterEach(() => {
    // Clean up the DOM elements
    document.body.innerHTML = '';
  });

  it('should update the item count correctly', () => {
    const counterElement = document.getElementById('counter');
    const mockGetElementById = jest.spyOn(document, 'getElementById');
    mockGetElementById.mockReturnValue(counterElement);

    updateitemscount();

    expect(mockGetElementById).toHaveBeenCalledWith('counter');
    expect(counterElement.innerHTML).toBe('Spaceships ( 3 )');
  });
});
